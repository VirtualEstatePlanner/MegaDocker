//  serviceMite.ts
//  MegaDocker
//  Service Mite for Portal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const heimdallServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2009,
  miteString: `

  #Begin Portal Service Section

 heimdall:
  image: linuxserver/heimdall
  networks:
   - traefik
  environment:
   - PUID=$HOSTUSERID
   - PGID=$HOSTUSERGID
   - TZ=$HOSTTIMEZONE
  volumes:
   - ./logs/heimdall:/loglocation
   - ./traefik/ssl/certs/[[PRIMARYDOMAIN]].crt:/config/keys/[[PRIMARYDOMAIN]].crt
   - ./traefik/ssl/private/[[PRIMARYDOMAIN]].key:/config/keys/[[PRIMARYDOMAIN]].key
   - ./heimdall/php:/config/php
   - ./heimdall/www:/config/www
   - ./heimdall/log:/config/log
   - ./heimdall/nginx:/config/nginx
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.heimdall.entrypoints=plainhttp'
    - 'traefik.http.services.heimdall.loadbalancer.server.port=80'
    - 'traefik.http.routers.heimdall.rule=Host("heimdall.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.heimdall-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.heimdall.middlewares=heimdall-force-secure'
    - 'traefik.http.routers.heimdall.service=heimdall'
    - 'traefik.http.routers.heimdall-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.heimdall-https.rule=Host("heimdall.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.heimdall-https.service=heimdall'
    - 'traefik.http.routers.heimdall-https.tls=true'
    - 'traefik.http.services.heimdall-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=Heimdall - a portal for your MegaDocker interface pages'
  
  #End Portal Service Section
  
  `,
};
