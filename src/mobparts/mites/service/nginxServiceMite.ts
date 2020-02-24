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
   - [[MOBNAME]]_traefik
  volumes:
   - ~/Documents/MegaDocker/[[MOBNAME]]/nginx/conf/default.conf:/etc/nginx/conf.d/default.conf
   - ~/Documents/MegaDocker/[[MOBNAME]]/nginx/pages:/var/www/html
   - ~/Documents/MegaDocker/[[MOBNAME]]/nginx/log:/var/log/nginx/log
   - ~/Documents/MegaDocker/[[MOBNAME]]/nginx/conf/default.template.conf:/etc/nginx/conf.d/default.template
  environment:
   - NGINX_HOST=www.megadocker.com
  deploy:
   replicas: 1
   restart_policy:
    condition: on-failure
   labels:
    - "traefik.enable=true"
    - "traefik.port=80"
    - "traefik.network=[[MOBNAME]]_traefik"
    - "traefik.backend=nginx"
    - "traefik.frontend.rule=Host:www.[[PRIMARYDOMAIN]],www.[[SECONDARYDOMAIN]]"
    - "com.MegaDocker.description=nginx - Nginx web server"
  command: /bin/sh -c "envsubst 'www.[[PRIMARYDOMAIN]]' < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"

#End Nginx Service Section

`
};
