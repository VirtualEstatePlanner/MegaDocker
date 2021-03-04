//  minposServiceMite.ts
//  MegaDocker
//  Service Mite for MinPOS
//  Created by George Georgulas IV on 03/04/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const minposServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 30015,
  miteString: `

# Begin MinPOS Service Sections

 minpos-postgres:
  image: postgres:alpine
  networks:
   - minpos
  environment:
   - POSTGRESPASSWORD=[[MINPOS_POSTGRES_PASSWORD]]
   - POSTGRESUSER=[[MINPOS_POSTGRES_USER]]
   - POSTGRESDB=[[MINPOS_POSTGRES_DATABASE]]
  volumes:
   - ./openbravo/postgresql:/var/lib/postgresql/datas
  deploy:
   restart_policy:
    condition: on-failure

 minpos-app:
  image: georgegeorgulasiv/minpos:latest
  environment:
   - SERVER_NAME=megadocker_ldap
  volumes:
   - ./traefik/ssl/private/letsencrypt.key:/container/service/ldap-client/assets/certs/letsencrypt.key:ro
  networks:
   - minpos
   - traefik
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.minpos.entrypoints=plainhttp'
    - 'traefik.http.services.minpos.loadbalancer.server.port=80'
    - 'traefik.http.routers.minpos.rule=Host("minpos.[[PRIMARYDOMAIN]]") || Host("minpos.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.minpos-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.minpos.middlewares=minpos-force-secure'
    - 'traefik.http.routers.minpos.service=minpos'
    - 'traefik.http.routers.minpos-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.minpos-https.rule=Host("minpos.[[PRIMARYDOMAIN]]") || Host("minpos.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.minpos-https.service=minpos'
    - 'traefik.http.routers.minpos-https.tls=true'
    - 'traefik.http.services.minpos-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=MinPOS - point of sale software'

# End MinPOS Service Section

`,
};
