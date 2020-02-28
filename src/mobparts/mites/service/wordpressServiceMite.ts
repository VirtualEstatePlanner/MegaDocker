//  wordpressServiceMite.ts
//  MegaDocker
//  Network Mite for Wordpress
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const wordpressServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2020,
  miteString: `

#Begin WordPress Service Section

 wordpress:
  image: wordpress
  depends_on:
   - mariadb
  networks:
   - wordpress
   - traefik
  environment:
   - WORDPRESS_DB_HOST=[[MOBNAME]]_wordpress-mariadb
   - WORDPRESS_DB_USER=[[WORDPRESSMARIADBUSER]]
   - WORDPRESS_DB_PASSWORD=[[WORDPRESSMARIADBPASSWORD]]
   - WORDPRESS_DB_NAME=wordpress
  volumes:
   - ./wordpress/php:/var/www/html
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.wordpress.entrypoints=plainhttp'
    - 'traefik.http.services.wordpress.loadbalancer.server.port=80'
    - 'traefik.http.routers.wordpress.rule=Host("wordpress.[[PRIMARYDOMAIN]]") || Host("wordpress.[[SECONDARYDOMAIN]]")'
    - 'traefik.http.middlewares.wordpress-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.wordpress.middlewares=wordpress-force-secure'
    - 'traefik.http.routers.wordpress.service=wordpress'
    - 'traefik.http.routers.wordpress-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.wordpress-https.rule=Host("wordpress.[[PRIMARYDOMAIN]]") || Host("wordpress.[[SECONDARYDOMAIN]]")'
    - 'traefik.http.routers.wordpress-https.service=wordpress'
    - 'traefik.http.routers.wordpress-https.tls=true'
    - 'traefik.http.services.wordpress-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=WordPress - WordPress blogging platform'

 wordpress-mariadb:
  image: mariadb
  networks:
   - wordpress
  environment:
   - MYSQL_DATABASE=wordpress
   - MYSQL_ROOT_PASSWORD=[[WORDPRESSMARIADBROOTPASSWORD]]
   - MYSQL_USER=[[WORDPRESSMARIADBUSER]]
   - MYSQL_PASSWORD=[[WORDPRESSMARIADBPASSWORD]]
  volumes:
   - ./wordpress/mariadb:/var/lib/mysql
  deploy:
   restart_policy:
    condition: on-failure

#End WordPress Service Section

`
};
