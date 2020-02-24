//  serviceMite.ts
//  MegaDocker
//  Service Mite for Nginx
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const nginxServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2007,
  miteString: `

  #Begin Nginx Service Sections
  
   nginx:
    image: nginx:alpine
    networks:
     - traefik
    volumes:
     - ~/Documents/MegaDocker/[[MOBNAME]]/Nginx/conf/default.conf:/etc/nginx/conf.d/default.conf
     - ~/Documents/MegaDocker/[[MOBNAME]]/Nginx/pages:/var/www/html
     - ~/Documents/MegaDocker/[[MOBNAME]]/Nginx/log:/var/log/nginx/log
     - ~/Documents/MegaDocker/[[MOBNAME]]/Nginx/conf/default.template.conf:/etc/nginx/conf.d/default.template
    environment:
     - NGINX_HOST=www.megadocker.com
    deploy:
     replicas: 1
     restart_policy:
      condition: on-failure
     labels:
      - "traefik.enable=true"
      - "traefik.port=80"
      - "traefik.backend=nginx"
      - "traefik.frontend.rule=Host:www.[[PRIMARYDOMAIN]],www.[[SECONDARYDOMAIN]]"
      - "com.MegaDocker.description=nginx - "
    command: /bin/sh -c "envsubst 'www.[[PRIMARYDOMAIN]]' < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
  
  #End Nginx Service Section
  
  `
};
