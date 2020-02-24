//  drupalServiceMite.ts
//  MegaDocker
//  Network Mite for Drupal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const drupalServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2001,
  miteString: `

#Begin Drupal Service Section

 drupal:
  image: drupal
  networks:
   - ldap
   - traefik
   - drupal
  environment:
   - SERVER_NAME=drupal.[[PRIMARYDOMAIN]]
   - DRUPAL_PROFILE=standard
   - DRUPAL_SITE_NAME=Drupal
   - DRUPAL_USER=drupaluser
   - DRUPAL_PASS=drupalpass
   - DRUPAL_DBURL=postgres://drupal:drupaluser@[[MOBNAME]]_drupal-postgres:5432/drupaldb
  volumes:
   - ~/Documents/MegaDocker/[[MOBNAME]]/drupal/modules:/var/www/html/modules
   - ~/Documents/MegaDocker/[[MOBNAME]]/drupal/profiles:/var/www/html/profiles
   - ~/Documents/MegaDocker/[[MOBNAME]]/drupal/themes:/var/www/html/themes
   - ~/Documents/MegaDocker/[[MOBNAME]]/drupal/sites:/var/www/html/sites
  deploy:
   replicas: 1
   restart_policy:
    condition: on-failure
   labels:
    - "traefik.enable=true"
    - "traefik.docker.network=[[MOBNAME]]_traefik"
    - "traefik.port=2368"
    - "traefik.backend=drupal"
    - "traefik.frontend.rule=Host:drupal.[[PRIMARYDOMAIN]],drupal.[[SECONDARYDOMAIN]]"
    - "com.MegaDocker.description=drupal-Drupal blogging software"

 drupal-postgres:
  image: postgres
  networks:
   - drupal
  ports:
   - 5432:5432
  volumes:
   - ~/Documents/MegaDocker/[[MOBNAME]]/drupal/database:/var/lib/postgresql/data
  environment:
   - POSTGRES_DB=drupaldb
   - POSTGRES_USER=[[DRUPALUSER]]
   - POSTGRES_PASSWORD=[[DRUPALPOSTGRESPASSWORD]]
  deploy:
   replicas: 1
   restart_policy:
    condition: on-failure

#End Drupal Service Section

`
};
