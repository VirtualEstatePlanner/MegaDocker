//  ghostServiceMite.ts
//  MegaDocker
//  Service Mite for Ghost
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const ghostServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2004,
  miteString: `

  #Begin Ghost Service Section
  
   ghost:
    image: ghost:1-alpine
    networks:
     - ghost
     - traefik
    environment:
     - database__client=mysql
     - database__connection__host=[[MOBNAME]]_ghost-mariadb
     - database__connection__user=root
     - database__connection__password=[[GHOSTMARIADBROOTPASSWORD]]
     - database__connection__database=mariadb
    deploy:
     labels:
      - "traefik.backend=ghost"
      - "traefik.docker.network=traefik"
      - "traefik.enable=true"
      - "traefik.frontend.rule=Host:ghost.[[PRIAMRYDOMAIN]],ghost.[[SECONDARYDOMAIN]]"
      - "traefik.port=2368"
     restart_policy:
      condition: on-failure
  
   ghost-mariadb:
    image: mariadb
    networks:
     - ghost
    volumes:
     - ~/Documents/MegaDocker/[[MOBNAME]]/Ghost/database:/var/lib/mysql
    environment:
     MYSQL_ROOT_PASSWORD=[[GHOSTMARIADBROOTPASSWORD]]
    deploy:
     restart_policy:
      condition: on-failure
  
  #End Ghost Service Section
  
  `
};
