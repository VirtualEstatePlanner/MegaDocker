//  serviceMite.ts
//  MegaDocker
//  Service Mite for Nginx
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const nginxServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2009,
  miteString: `

#Begin Nginx Service Sections

 nginx:
  image: nginx:alpine
  networks:
   - traefik
  volumes:
   - ./logs/nginx:/loglocation
   - ./nginx/pages:/usr/share/nginx/html
   - ./nginx/log:/var/log/nginx/log
  environment:
   - NGINX_HOST=www.[[PRIMARYDOMAIN]]
  deploy:
   replicas: 1
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.nginx.entrypoints=plainhttp'
    - 'traefik.http.services.nginx.loadbalancer.server.port=80'
    - 'traefik.http.routers.nginx.rule=Host("nginx.[[PRIMARYDOMAIN]]") || Host("nginx.[[SECONDARYDOMAIN]]")'
    - 'traefik.http.middlewares.nginx-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.nginx.middlewares=nginx-force-secure'
    - 'traefik.http.routers.nginx.service=nginx'
    - 'traefik.http.routers.nginx-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.nginx-https.rule=Host("nginx.[[PRIMARYDOMAIN]]") || Host("nginx.[[SECONDARYDOMAIN]]")'
    - 'traefik.http.routers.nginx-https.service=nginx'
    - 'traefik.http.routers.nginx-https.tls=true'
    - 'traefik.http.services.nginx-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=nginx - Nginx web server'

#End Nginx Service Section

`
};
