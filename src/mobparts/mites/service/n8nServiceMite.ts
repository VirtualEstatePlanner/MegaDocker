//  n8nServiceMite.ts
//  MegaDocker
//  Service Mite for n8n
//  Created by George Georgulas IV on 11/3/2020.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const n8nServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2017,
  miteString: `

# Begin n8n Service Section

 n8n:
  image: n8nio/n8n:latest
  networks:
   - n8n
   - traefik
  environment:
   - ZABBIX_HOSTNAME=n8n
   - NODE_ENV=production
   - N8N_BASIC_AUTH_ACTIVE=true
   - N8N_BASIC_AUTH_USER=[[N8NUSERNAME]]
   - N8N_BASIC_AUTH_PASSWORD=[[N8NPASSWORD]]
   - GENERIC_TIMEZONE=HOSTTIMEZONE
   - WEBHOOK_TUNNEL_URL=https://n8n.[[PRIMARYDOMAIN]]/
   - VUE_APP_URL_BASE_API=https://n8n.[[PRIMARYDOMAIN]]/
   - N8N_PROTOCOL=https
   - N8N_HOST=n8n.[[PRIMARYDOMAIN]]
   - N8N_PORT=5678 
   - DEBUG_MODE=FALSE
   - PUID=$HOSTUSERID
   - PGID=$HOSTUSERGID
   - DATA_FOLDER=/root/n8n/
   - DOMAIN_NAME=[[PRIMARYDOMAIN]]
   - SUBDOMAIN=n8n
  volumes:
   - /var/run/docker.sock:/var/run/docker.sock:ro
   - ./n8n/data:/root/n8n
   - ./n8n/settings:/root/.n8n
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.n8n.entrypoints=plainhttp'
    - 'traefik.http.services.n8n.loadbalancer.server.port=5678'
    - 'traefik.http.routers.n8n.rule=Host("n8n.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.n8n-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.n8n.middlewares=n8n-force-secure'
    - 'traefik.http.routers.n8n.service=n8n'
    - 'traefik.http.routers.n8n-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.n8n-https.rule=Host("n8n.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.n8n-https.service=n8n'
    - 'traefik.http.routers.n8n-https.tls=true'
    - 'traefik.http.services.n8n-https.loadbalancer.server.port=5678'
    - 'com.MegaDocker.description=n8n - a middleware to connect multiple services'

# End n8n Service Section 

`,
};
