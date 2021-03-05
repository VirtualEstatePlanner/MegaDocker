/** @format */

//  syncthingServiceMite.ts
//  MegaDocker
//  Service Mite for Syncthing
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite'

export const mealieServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 30013,
  miteString: `

# Begin Mealie Service Section
 
 mealie:
  image: hkotel/mealie:latest
  environment:
   - db_type=sqlite 
  volumes:
   - /var/data/mealie:/app/data
   - /etc/localtime:/etc/localtime:ro
  networks:
   - traefik
  deploy:
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.mealie.entrypoints=plainhttp'
    - 'traefik.http.services.mealie.loadbalancer.server.port=80'
    - 'traefik.http.routers.mealie.rule=Host("mealie.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.mealie-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.mealie.middlewares=mealie-force-secure'
    - 'traefik.http.routers.mealie.service=kanboard'
    - 'traefik.http.routers.mealie-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.mealie-https.rule=Host("mealie.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.mealie-https.service=mealie'
    - 'traefik.http.routers.mealie-https.tls=true'
    - 'traefik.http.services.mealie-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=Mealie - a recipe manager and meal planner'

# End Mealie Service Section

`,
}
