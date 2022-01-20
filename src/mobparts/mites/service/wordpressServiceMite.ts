/** @format */

//  wordpressServiceMite.ts
//  MEGADocker
//  Service Mite for Wordpress
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/miteTypeInterfaces/ITraefikedServiceMite'

const hostnames: string[] = [`wordpress`]

export const wordpressServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30035,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin WordPress Service Section

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
   - \${PWD}/wordpress/php:/var/www/html
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.wordpress.entrypoints=plainhttp'
    - 'traefik.http.services.wordpress.loadbalancer.server.port=80'
    - 'traefik.http.routers.wordpress.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.wordpress-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.wordpress.middlewares=wordpress-force-secure'
    - 'traefik.http.routers.wordpress.service=wordpress'
    - 'traefik.http.routers.wordpress-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.wordpress-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
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
   - \${PWD}/wordpress/mariadb:/var/lib/mysql
  deploy:
   restart_policy:
    condition: any

# End WordPress Service Section

`
}
