/** @format */

//  heimdallServiceMite.ts
//  MEGADocker
//  Service Mite for Heimdall
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [`heimdall`]

export const heimdallServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30010,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin Heimdall Service Section

 heimdall:
  image: linuxserver/heimdall
  networks:
   - traefik
  environment:
   - PUID=$HOSTUSERID
   - PGID=$HOSTUSERGID
   - TZ=$HOSTTIMEZONE
  volumes:
   - \${PWD}/logs/heimdall:/loglocation
   - \${PWD}/traefik/ssl/certs/[[PRIMARYDOMAIN]].crt:/config/keys/[[PRIMARYDOMAIN]].crt
   - \${PWD}/traefik/ssl/private/[[PRIMARYDOMAIN]].key:/config/keys/[[PRIMARYDOMAIN]].key
   - \${PWD}/heimdall/php:/config/php
   - \${PWD}/heimdall/www:/config/www
   - \${PWD}/heimdall/log:/config/log
   - \${PWD}/heimdall/nginx:/config/nginx
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.heimdall.entrypoints=plainhttp'
    - 'traefik.http.services.heimdall.loadbalancer.server.port=80'
    - 'traefik.http.routers.heimdall.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.heimdall-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.heimdall.middlewares=heimdall-force-secure'
    - 'traefik.http.routers.heimdall.service=heimdall'
    - 'traefik.http.routers.heimdall-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.heimdall-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.heimdall-https.service=heimdall'
    - 'traefik.http.routers.heimdall-https.tls=true'
    - 'traefik.http.services.heimdall-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=Heimdall - a portal for your MegaDocker interface pages'
  
# End Heimdall Service Section
  
`,
}
