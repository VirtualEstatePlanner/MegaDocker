/** @format */

//  drupalServiceMite.ts
//  MEGADocker
//  Service Mite for Drupal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/miteTypeInterfaces/ITraefikedServiceMite'

const hostnames: string[] = [`drupal`]

export const drupalServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30002,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin Drupal Service Section

 drupal:
  image: drupal:8.9.13-php7.4-fpm-alpine
  networks:
   - ldap
   - traefik
   - drupal
  environment:
   - SERVER_NAME=drupal.[[PRIMARYDOMAIN]]
   - DRUPAL_PROFILE=standard
   - DRUPAL_SITE_NAME=Drupal
   - DRUPAL_USER=[[DRUPALPOSTGRESUSER]]
   - DRUPAL_PASS=[[DRUPALPOSTGRESPASSWORD]]
   - DRUPAL_DBURL=postgres://drupal:drupaluser@[[MOBNAME]]_drupal-postgres:5432/drupaldb
  volumes:
   - \${PWD}/logs/drupal:/loglocation
   - \${PWD}/drupal/modules:/var/www/html/modules
   - \${PWD}/drupal/profiles:/var/www/html/profiles
   - \${PWD}/drupal/themes:/var/www/html/themes
   - \${PWD}/drupal/sites:/var/www/html/sites
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.drupal.entrypoints=plainhttp'
    - 'traefik.http.services.drupal.loadbalancer.server.port=80'
    - 'traefik.http.routers.drupal.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.drupal-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.drupal.middlewares=drupal-force-secure'
    - 'traefik.http.routers.drupal.service=drupal'
    - 'traefik.http.routers.drupal-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.drupal-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.drupal-https.service=drupal'
    - 'traefik.http.routers.drupal-https.tls=true'
    - 'traefik.http.services.drupal-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=drupal-Drupal blogging software'
   placement:
    constraints:
     - node.role == manager


 drupal-postgres:
  image: postgres
  networks:
   - drupal
  volumes:
   - \${PWD}/logs/drupal:/loglocation
   - \${PWD}/drupal/database:/var/lib/postgresql/data
  environment:
   - POSTGRES_DB=drupaldb
   - POSTGRES_USER=[[DRUPALPOSTGRESUSER]]
   - POSTGRES_PASSWORD=[[DRUPALPOSTGRESPASSWORD]]
  deploy:
   replicas: 1
   restart_policy:
    condition: any

# End Drupal Service Section

`,
}
