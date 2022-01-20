/** @format */

//  nginxServiceMite.ts
//  MEGADocker
//  Service Mite for Nginx
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/miteTypeInterfaces/ITraefikedServiceMite'

const hostnames: string[] = [`nginx`]

export const nginxServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30020,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin Nginx Service Sections

 nginx:
  image: nginx:alpine
  networks:
   - traefik
  volumes:
   - \${PWD}/logs/nginx:/loglocation
   - \${PWD}/nginx/pages:/usr/share/nginx/html
   - \${PWD}/nginx/log:/var/log/nginx/log
  environment:
   - NGINX_HOST=www.[[PRIMARYDOMAIN]]
  deploy:
   replicas: 1
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.nginx.entrypoints=plainhttp'
    - 'traefik.http.services.nginx.loadbalancer.server.port=80'
    - 'traefik.http.routers.nginx.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.nginx-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.nginx.middlewares=nginx-force-secure'
    - 'traefik.http.routers.nginx.service=nginx'
    - 'traefik.http.routers.nginx-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.nginx-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.nginx-https.service=nginx'
    - 'traefik.http.routers.nginx-https.tls=true'
    - 'traefik.http.services.nginx-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=nginx - Nginx web server'

# End Nginx Service Section

`
}
