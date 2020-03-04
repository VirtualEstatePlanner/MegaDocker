//  traefikServiceMite.ts
//  MegaDocker
//  Service Mite for Traefik
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

// TODO: fix traefik authorization to use ldap

export const traefikServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2017,
  miteString: `

# Begin Traefik Service Section

 traefik:
  image: traefik
  command:
   - '--accesslog=true'
   - '--api.dashboard=true'
   - '--certificatesresolvers.cloudflarecerts.acme.email=[[LETSENCRYPTEMAIL]]'
   - '--certificatesresolvers.cloudflarecerts.acme.storage=/acme.json'
   - '--certificatesresolvers.cloudflarecerts.acme.caserver=https://acme-staging-v02.api.letsencrypt.org/directory'
   - '--certificatesresolvers.cloudflarecerts.acme.dnschallenge=true'
   - '--certificatesresolvers.cloudflarecerts.acme.dnschallenge.provider=cloudflare'
   - '--certificatesresolvers.cloudflarecerts.acme.dnschallenge.resolvers=1.1.1.1:53, 1.0.0.1:53'
   - '--entrypoints.plainhttp.address=:80'
   - '--entrypoints.encryptedhttp.address=:443'
   - '--log.level=DEBUG'
   - '--logFile=/logs/traefikLog.json'
   - '--accessLog=true'
   - '--accessLog.filePath=/logs/traefikAccessLog.json'
   - '--providers.docker.endpoint=unix:///var/run/docker.sock'
   - '--providers.docker.exposedbydefault=false'
   - '--providers.docker.network=[[MOBNAME]]_traefik'
   - '--providers.docker.swarmmode=true'
   - '--providers.docker.watch=true'
  networks:
   - traefik
  ports:
   - 80:80
   - 443:443
   - 8080:8080
  volumes:
   - /var/run/docker.sock:/var/run/docker.sock:ro

   - ./traefik/acme.json:/acme.json
  environment:
   - CF_DNS_API_TOKEN=[[CLOUDFLAREAPITOKEN]]
   - CF_ZONE_API_TOKEN=[[CLOUDFLAREAPITOKEN]]
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.traefik.entrypoints=plainhttp'
    - 'traefik.http.routers.traefik.rule=Host("traefik.[[PRIMARYDOMAIN]]") || Host("traefik.[[SECONDARYDOMAIN]]") && (PathPrefix("/api") || PathPrefix("/dashboard"))'
    - 'traefik.http.middlewares.traefik-auth.basicauth.users=traefikuser:$$apr1$$OG8S9BgU$$7BwcoMe3X.gpi.aRLljDd.'
    - 'traefik.http.routers.traefik-https.middlewares=traefik-auth'
    - 'traefik.http.middlewares.traefik-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.traefik.middlewares=traefik-force-secure'
    - 'traefik.http.routers.traefik-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.traefik-https.rule=Host("traefik.[[PRIMARYDOMAIN]]") || Host("traefik.[[SECONDARYDOMAIN]]")'
    - 'traefik.http.services.traefik.loadbalancer.server.port=8080'
    - 'traefik.http.routers.traefik-https.service=api@internal'
    - 'traefik.http.routers.traefik-https.tls=true'
    - 'traefik.http.routers.dashboard.tls.certresolver=cloudflarecerts'
    - 'traefik.http.routers.dashboard.tls.domains[0].main=[[PRIMARYDOMAIN]]'
    - 'traefik.http.routers.dashboard.tls.domains[0].sans=*.[[PRIMARYDOMAIN]]'
    - 'traefik.http.routers.dashboard.tls.domains[1].main=[[SECONDARYDOMAIN]]'
    - 'traefik.http.routers.dashboard.tls.domains[1].sans=*.[[SECONDARYDOMAIN]]'
    - 'com.MegaDocker.description=Swarmpit App - a web GUI for Docker Swarm.'
   placement:
    constraints:
     - node.role == manager

 traefik-ssl-exporter:
  image: ldez/traefik-certs-dumper:latest
  networks:
   - traefik
  volumes:
   - ./traefik/acme.json/:/acme.json
   - ./traefik/certs:/output
  command: >
   file
   --watch
   --version v2
   --dest /output
  deploy:
   restart_policy:
    condition: on-failure
 
# End Traefik Service Section

`
};
