//  serviceMite.ts
//  MegaDocker
//  Network Mite for $SOMEMANIKIN
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';
import { mobFolderPath } from '../../memories/mobFolderPath';
import { primaryDomain } from '../../memories/primaryDomain';
import { secondaryDomain } from '../../memories/secondaryDomain';

export const nginxServiceMite: IMite = {
  type: 'Service',
  miteIndex: 2007,
  miteString: `

  #Begin Nginx Service Sections
  
   nginx:
    image: nginx:alpine
    networks:
     - traefik
    volumes:
     - ${mobFolderPath}/Nginx/conf/default.conf:/etc/nginx/conf.d/default.conf
     - ${mobFolderPath}/Nginx/pages:/var/www/html
     - ${mobFolderPath}/Nginx/log:/var/log/nginx/log
     - ${mobFolderPath}/Nginx/conf/default.template.conf:/etc/nginx/conf.d/default.template
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
      - "traefik.frontend.rule=Host:www.${primaryDomain.value},www.${secondaryDomain.value}"
      - "com.MegaDocker.description=nginx - "
    command: /bin/sh -c "envsubst 'www.${primaryDomain.value}' < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
  
  #End Nginx Service Section
  
  `
};
