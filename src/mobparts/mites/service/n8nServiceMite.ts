/** @format */

//  n8nServiceMite.ts
//  MEGADocker
//  Service Mite for n8n
//  Created by George Georgulas IV on 11/3/2020.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [`n8n`]

export const n8nServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30018,
  webInterfaceHostnames: hostnames,
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
   - WEBHOOK_TUNNEL_URL=https://${hostnames[0]}.[[PRIMARYDOMAIN]]/
   - VUE_APP_URL_BASE_API=https://${hostnames[0]}.[[PRIMARYDOMAIN]]/
   - N8N_PROTOCOL=https
   - N8N_HOST=${hostnames[0]}.[[PRIMARYDOMAIN]]
   - N8N_PORT=5678 
   - DEBUG_MODE=FALSE
   - PUID=$HOSTUSERID
   - PGID=$HOSTUSERGID
   - DATA_FOLDER=/root/n8n/
   - DOMAIN_NAME=[[PRIMARYDOMAIN]]
   - SUBDOMAIN=${hostnames[0]}
  volumes:
   - /var/run/docker.sock:/var/run/docker.sock:ro
   - \${PWD}/n8n/data:/root/n8n
   - \${PWD}/n8n/settings:/root/.n8n
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.n8n.entrypoints=plainhttp'
    - 'traefik.http.services.n8n.loadbalancer.server.port=5678'
    - 'traefik.http.routers.n8n.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.n8n-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.n8n.middlewares=n8n-force-secure'
    - 'traefik.http.routers.n8n.service=n8n'
    - 'traefik.http.routers.n8n-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.n8n-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.n8n-https.service=n8n'
    - 'traefik.http.routers.n8n-https.tls=true'
    - 'traefik.http.services.n8n-https.loadbalancer.server.port=5678'
    - 'com.MegaDocker.description=n8n - a middleware to connect multiple services'

# End n8n Service Section 

`,
}
