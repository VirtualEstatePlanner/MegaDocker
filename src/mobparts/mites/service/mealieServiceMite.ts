/** @format */

//  mealieServiceMite.ts
//  MEGADocker
//  Service Mite for Mealie
//  Created by George Georgulas IV on 3/5/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/miteTypeInterfaces/ITraefikedServiceMite'

const hostnames: string[] = [`mealie`]

export const mealieServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30014,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin Mealie Service Section
 
 mealie:
  image: hkotel/mealie:latest
  environment:
   - db_type=sqlite 
  volumes:
   - \${PWD}/mealie/data:/app/data
## TODO: fix /etc/localtime bug on macOS
##   - /etc/localtime:/etc/localtime:ro
  networks:
   - traefik
  deploy:
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.mealie.entrypoints=plainhttp'
    - 'traefik.http.services.mealie.loadbalancer.server.port=80'
    - 'traefik.http.routers.mealie.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.mealie-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.mealie.middlewares=mealie-force-secure'
    - 'traefik.http.routers.mealie.service=kanboard'
    - 'traefik.http.routers.mealie-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.mealie-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.mealie-https.service=mealie'
    - 'traefik.http.routers.mealie-https.tls=true'
    - 'traefik.http.services.mealie-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=Mealie - a recipe manager and meal planner'

# End Mealie Service Section

`
}
