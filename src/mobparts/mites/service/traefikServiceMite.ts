//  traefikServiceMite.ts
//  MegaDocker
//  Service Mite for Traefik
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const traefikServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2017,
  miteString: `

# Begin Traefik Service Section

 traefik:
  image: traefik
  command:
   - '--accessLog=true'
   - '--accessLog.filePath=/logs/accessLog.json'
   - '--api'
   - '--api.dashboard=true'
   - '--api.debug=true'
   - '--api.insecure=true'
   - '--entrypoints.http.address=:80'
   - '--entrypoints.https.address=:443'
#   - '--entrypoints.traefik.address=:8888'
   - '--log=true'
   - '--log.level=DEBUG'
   - '--providers.docker=true'
   - '--providers.docker.watch=true'
   - '--providers.docker.endpoint=unix:///var/run/docker.sock'
   - '--providers.docker.exposedbydefault=false'
   - '--providers.docker.network=[[MOBNAME]]_traefik'
   - '--providers.docker.swarmmode=true'
   - '--certificatesresolvers.wildcard.acme.email=[[LETSENCRYPTEMAIL]]'
   - '--certificatesresolvers.wildcard.acme.storage=/acme.json'
# Testing Let's Encrypt server
   - '--certificatesresolvers.wildcard.acme.caserver=https://acme-staging-v02.api.letsencrypt.org/directory'
# Production Let's Encrypt server
#   - '--certificatesresolvers.wildcard.acme.caserver=https://acme-v02.api.letsencrypt.org/directory'
   - '--certificatesresolvers.wildcard.acme.dnschallenge=true'
   - '--certificatesresolvers.wildcard.acme.dnschallenge.provider=cloudflare'
#   - '--certificatesresolvers.wildcard.acme.dnschallenge.delaybeforecheck=0'
   - '--certificatesresolvers.wildcard.acme.dnschallenge.resolvers=1.1.1.1, 1.0.0.1, 8.8.8.8, 8.8.4.4, 9.9.9.9'
  networks:
   - traefik
  ports:
   - 80:80
   - 443:443
#   - 8888:8888
  volumes:
   - /var/run/docker.sock:/var/run/docker.sock:ro
   - ./traefik/acme.json:/acme.json
   - ./traefik/logs:/logs
  environment:
   - DEFAULT_NETWORK=[[MOBNAME]]_traefik
   - CF_DNS_API_TOKEN=[[CLOUDFLAREAPITOKEN]]
   - CF_ZONE_API_TOKEN=[[CLOUDFLAREAPITOKEN]]
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.docker.network=[[MOBNAME]]_traefik'
    - 'traefik.http.middlewares.forcesecure.redirectscheme.scheme=https'
    - 'traefik.http.services.traefik.loadbalancer.server.port=80'
#    - 'traefik.http.routers.forcesecure.entrypoints=http'
#    - 'traefik.http.routers.forcesecure.middlewares=forcesecure'
#    - 'traefik.http.middlewares.forcesecure.redirectscheme.permanent=true'
#    - 'traefik.http.routers.traefik-secured.entrypoints=https'
#    - 'traefik.http.routers.traefik-secured.rule=Host("traefik.[[PRIMARYDOMAIN]]") || Host("traefik.[[SECONDARYDOMAIN]]")'
    - 'traefik.http.routers.traefik.rule=hostregexp("{host:.+}")'
    - 'traefik.http.routers.traefik.entrypoints=http, https'
    - 'traefik.http.routers.traefik.middlewares.forcesecure'
    - 'traefik.http.routers.traefik.rule=Host("traefik.[[PRIMARYDOMAIN]]") || Host("traefik.[[SECONDARYDOMAIN]]")'
    - 'traefik.http.routers.traefik.service=api@internal'
#    - 'traefik.http.routers.traefik.tls=true'
    - 'traefik.http.routers.traefik.tls.certresolver=wildcard'
    - 'traefik.http.routers.traefik.tls.domains[0].main=[[PRIMARYDOMAIN]]'
    - 'traefik.http.routers.traefik.tls.domains[0].sans=*.[[PRIMARYDOMAIN]]'
    - 'traefik.http.routers.traefik.tls.domains[1].main=[[SECONDARYDOMAIN]]'
    - 'traefik.http.routers.traefik.tls.domains[1].sans=*.[[SECONDARYDOMAIN]]'
   placement:
    constraints:
     - node.role == manager

# End Traefik Service Section

`
};
