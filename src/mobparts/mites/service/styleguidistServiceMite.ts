/** @format */

//  styleguidistServiceMite.ts
//  MEGADocker
//  Service Mite for Styleguidist
//  Created by George Georgulas IV on 8/15/20.
//  Copyright © 2020-2021 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/miteTypeInterfaces/ITraefikedServiceMite'

const hostnames: string[] = [`style`]

export const styleguidistServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30027,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin Styleguidist Service Section

 styleguidist:
  image: georgegeorgulasiv/component-library
  volumes:
   - \${PWD}/styleguidist/components:/app/src/shared/components
## TODO: add mite for image typings - probably just use the ones we use internally
   - \${PWD}/styleguidist/typings:/app/src/shared/typings
   - \${PWD}/styleguidist/interfaces:/app/src/shared/interfaces
   - \${PWD}/styleguidist/assets:/app/src/shared/assets
   - \${PWD}/styleguidist/objects:/app/src/shared/objects
   - \${PWD}/styleguidist/configs/package.json:/app/package.json
   - \${PWD}/styleguidist/configs/styleguide.config.js:/app/styleguide.config.js
   - \${PWD}/styleguidist/configs/tsconfig.json:/app/tsconfig.json
   - \${PWD}/styleguidist/configs/webpack.config.js:/app/webpack.config.js
  networks:
   - styleguidist
   - traefik
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.styleguidist.entrypoints=plainhttp'
    - 'traefik.http.services.styleguidist.loadbalancer.server.port=6060'
    - 'traefik.http.routers.styleguidist.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.styleguidist-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.styleguidist.middlewares=styleguidist-force-secure'
    - 'traefik.http.routers.styleguidist.service=styleguidist'
    - 'traefik.http.routers.styleguidist-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.styleguidist-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.styleguidist-https.service=styleguidist'
    - 'traefik.http.routers.styleguidist-https.tls=true'
    - 'traefik.http.services.styleguidist-https.loadbalancer.server.port=6060'
    - 'com.MegaDocker.description=Styleguidist - a web sandbox for a react component library.'

# End Styleguidist Service Section

`
}
