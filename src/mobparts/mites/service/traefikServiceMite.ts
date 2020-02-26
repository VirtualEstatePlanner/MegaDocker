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
   - "--accessLog=true"
   - "--accessLog.filePath=/logs/accessLog.json"
   - "--api"
   - "--entrypoints.web.address=:80"
   - "--entrypoints.websecure.address=:443"
   - "--entrypoints.traefik.address=:8888"
   - "--providers.docker=true"
   - "--providers.docker.watch=true"
   - "--providers.docker.endpoint=unix:///var/run/docker.sock"
   - "--providers.docker.exposedByDefault=false"
   - "--providers.docker.network=[[MOBNAME]]_traefik"
   - "--providers.docker.swarmMode=true"
   - "--certificatesResolvers.letsEncryptResolver.acme.email=[[LETSENCRYPTEMAIL]]"
   - "--certificatesResolvers.letsEncryptResolver.acme.keyType=RSA8192"
   - "--certificatesResolvers.letsEncryptResolver.acme.storage=/acme.json"
   - "--certificatesResolvers.letsEncryptResolver.acme.dnschallenge=true"
   - "--certificatesResolvers.letsEncryptResolver.acme.dnschallenge.provider=cloudflare"
   - "--certificatesResolvers.letsEncryptResolver.acme.dnschallenge.delayBeforeCheck=0"
   - "--certificatesResolvers.letsEncryptResolver.acme.dnschallenge.resolvers='1.1.1.1:53', '8.8.8.8:53'"
# Testing Let's Encrypt server
   - "--certificatesResolvers.letsEncryptResolver.acme.caServer=https://acme-staging-v02.api.letsencrypt.org/directory"
# Production Let's Encrypt server
#   - "--certifcatesresolvers.letsEncryptResolver.acme.caServer=https://acme-v02.api.letsencrypt.org/directory"
  networks:
   - traefik
  ports:
   - 80:80
   - 443:443
   - 8888:8888
  volumes:
   - /var/run/docker.sock:/var/run/docker.sock:ro
   - ./traefik/acme.json:/acme.json
   - ./traefik/logs:/logs
  environment:
   - CF_API_EMAIL=[[CLOUDFLAREEMAIL]]
   - CF_API_KEY=[[CLOUDFLAREAPIKEY]]
  deploy:
   restart_policy:
    condition: any
   labels:
    - "traefik.enable=true"
    - "traefik.docker.network=[[MOBNAME]]_traefik"
    - "traefik.http.routers.traefik.rule=Host('traefik.[[PRIMARYDOMAIN]]')"
    - "traefik.http.routers.traefik.rule=Host('traefik.[[SECONDARYDOMAIN]]')"
    - "traefik.http.routers.traefik.entrypoints=traefik"
    - "traefik.http.routers.traefik.service=api@internal"
    - "traefik.http.routers.traefik.tls"
    - "traefik.http.routers.traefik.tls.certresolver=letsEncryptResolver"
    - "traefik.http.routers.traefik.tls.domains[0].main=[[PRIMARYDOMAIN]]"
    - "traefik.http.routers.traefik.tls.domains[0].sans=*.[[PRIMARYDOMAIN]]"
    - "traefik.http.routers.traefik.tls.domains[1].main=[[SECONDARYDOMAIN]]"
    - "traefik.http.routers.traefik.tls.domains[1].sans=*.[[SECONDARYDOMAIN]]"
   placement:
    constraints:
     - node.role == manager

# End Traefik Service Section

`
};
