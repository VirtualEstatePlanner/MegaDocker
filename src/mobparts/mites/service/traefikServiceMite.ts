//  traefikServiceMite.ts
//  MegaDocker
//  Service Mite for Traefik
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

// TODO: fix traefik authorization to use ldap

export const traefikServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2028,
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
   - '--log.format=json'
   - '--accesslog=true'
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
   - ./logs/traefik:/var/log/traefik
   - ./traefik/acme.json:/acme.json
   - /var/run/docker.sock:/var/run/docker.sock:ro
  environment:
   - CF_DNS_API_TOKEN=[[CLOUDFLAREAPITOKEN]]
   - CF_ZONE_API_TOKEN=[[CLOUDFLAREAPITOKEN]]
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.traefik.entrypoints=plainhttp'
    - 'traefik.http.routers.traefik.rule=Host("traefik.[[PRIMARYDOMAIN]]") && (PathPrefix("/api") || PathPrefix("/dashboard"))'
## TODO: create a traefik login and password with an htpassword compatible JS library, or integrate ldap auth
##    - 'traefik.http.middlewares.traefik-auth.basicauth.users=[[TRAEFIKUSER]]:[[TRAEFIKPASSWORD]]'
    - 'traefik.http.middlewares.traefik-auth.basicauth.users=traefikuser:$$apr1$$OG8S9BgU$$7BwcoMe3X.gpi.aRLljDd.'
    - 'traefik.http.routers.traefik-https.middlewares=traefik-auth'
    - 'traefik.http.middlewares.traefik-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.traefik.middlewares=traefik-force-secure'
    - 'traefik.http.routers.traefik-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.traefik-https.rule=Host("traefik.[[PRIMARYDOMAIN]]") && (PathPrefix("/api") || PathPrefix("/dashboard"))'
    - 'traefik.http.services.traefik.loadbalancer.server.port=8080'
    - 'traefik.http.routers.traefik-https.service=api@internal'
    - 'traefik.http.routers.traefik-https.tls=true'
    - 'traefik.http.routers.dashboard.tls.certresolver=cloudflarecerts'
    - 'traefik.http.routers.dashboard.tls.domains[0].main=[[PRIMARYDOMAIN]]'
    - 'traefik.http.routers.dashboard.tls.domains[0].sans=*.[[PRIMARYDOMAIN]]'
    - 'com.MegaDocker.description=Traefik - a modern reverse-proxy for microservices environments.'
   placement:
    constraints:
     - node.role == manager

 traefik-ssl-exporter:
  image: ldez/traefik-certs-dumper:latest
  networks:
   - traefik
  volumes:
   - ./logs/traefik:/loglocation
   - ./traefik/acme.json/:/acme.json
   - ./traefik/ssl:/output
  command: >
   file
   --watch
   --version v2
   --dest /output
  deploy:
   restart_policy:
    condition: on-failure
 
# End Traefik Service Section

`,
};
