//  drupalServiceMite.ts
//  MegaDocker
//  Network Mite for Drupal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';
import { primaryDomain } from '../../memories/primaryDomain';
import { mobName } from '../../memories/mobName';
import { mobFolderPath } from '../../memories/mobFolderPath';
import { secondaryDomain } from '../../memories/secondaryDomain';
import { drupalPostgresUser } from '../../memories/drupalPostgresUser';
import { drupalPostgresPassword } from '../../memories/drupalPostgresPassword';

export const drupalServiceMite: IMite = {
  type: 'Service',
  miteIndex: 3,
  miteString: `

  #Begin Drupal Service Section
  
   drupal:
    image: drupal
    networks:
     - ldap
     - traefik
     - drupal
    environment:
     - SERVER_NAME=drupal.${primaryDomain.value}
     - DRUPAL_PROFILE=standard
     - DRUPAL_SITE_NAME=Drupal
     - DRUPAL_USER=drupaluser
     - DRUPAL_PASS=drupalpass
     - DRUPAL_DBURL=postgres://drupal:drupaluser@${mobName}_drupal-postgres:5432/drupaldb
    volumes:
     - ${mobFolderPath}/Drupal/modules:/var/www/html/modules
     - ${mobFolderPath}/Drupal/profiles:/var/www/html/profiles
     - ${mobFolderPath}/Drupal/themes:/var/www/html/themes
     - ${mobFolderPath}/Drupal/sites:/var/www/html/sites
    deploy:
     replicas: 1
     restart_policy:
      condition: on-failure
     labels:
      - "traefik.enable=true"
      - "traefik.docker.network=traefik"
      - "traefik.port=2368"
      - "traefik.backend=drupal"
      - "traefik.frontend.rule=Host:drupal.${primaryDomain.value},drupal.${secondaryDomain.value}"
      - "com.MegaDocker.description=drupal-Drupal blogging software"
  
   drupal-postgres:
    image: postgres
    networks:
     - drupal
    ports:
     - 5432:5432
    volumes:
     - ${mobFolderPath}/Drupal/database:/var/lib/postgresql/data
    environment:
     - POSTGRES_DB=drupaldb
     - POSTGRES_USER=${drupalPostgresUser.value}
     - POSTGRES_PASSWORD=${drupalPostgresPassword.value}
    deploy:
     replicas: 1
     restart_policy:
      condition: on-failure
  
  #End Drupal Service Section
  
  `
};
