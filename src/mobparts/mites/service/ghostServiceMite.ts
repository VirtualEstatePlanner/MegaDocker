//  serviceMite.ts
//  MegaDocker
//  Network Mite for $SOMEMANIKIN
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';
import { mobName } from '../../memories/mobName';
import { ghostRootMariaDBPassword } from '../../memories/ghostRootMariaDBPassword';
import { primaryDomain } from '../../memories/primaryDomain';
import { secondaryDomain } from '../../memories/secondaryDomain';
import { mobFolderPath } from '../../memories/mobFolderPath';

export const ghostServiceMite: IMite = {
  type: 'Service',
  miteIndex: 998,
  miteString: `

  #Begin Ghost Service Section
  
   ghost:
    image: ghost:1-alpine
    networks:
     - ghost
     - traefik
    environment:
     - database__client=mysql
     - database__connection__host=${mobName}_ghost-mariadb
     - database__connection__user=root
     - database__connection__password=${ghostRootMariaDBPassword.value}
     - database__connection__database=mariadb
    deploy:
     labels:
      - "traefik.backend=ghost"
      - "traefik.docker.network=traefik"
      - "traefik.enable=true"
      - "traefik.frontend.rule=Host:ghost.${primaryDomain.value},ghost.${secondaryDomain.value}"
      - "traefik.port=2368"
     restart_policy:
      condition: on-failure
  
   ghost-mariadb:
    image: mariadb
    networks:
     - ghost
    volumes:
     - ${mobFolderPath}/Ghost/database:/var/lib/mysql
    environment:
     MYSQL_ROOT_PASSWORD=${ghostRootMariaDBPassword.value}
    deploy:
     restart_policy:
      condition: on-failure
  
  #End Ghost Service Section
  
  `
};
