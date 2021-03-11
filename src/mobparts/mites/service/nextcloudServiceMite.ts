/** @format */

//  serviceMite.ts
//  MegaDocker
//  Service Mite for NextCloud
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [`nextcloud`]

export const nextcloudServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30018,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin NextCloud Service Sections

nextcloud:
  image: nextcloud
  networks:
   - nextcloud
   - traefik
  volumes:
   - \${PWD}/nextcloud/application:/var/www/html
  environment:
   - MYSQL_HOST=[[MOBNAME]]_nextcloud_mariadb
   - MYSQL_PASSWORD=[[NEXTCLOUDMARIADBPASSWORD]]
   - MYSQL_DATABASE=nextcloud
   - MYSQL_USER=[[NEXTCLOUDMARIADBUSER]]
  deploy:
   restart_policy:
    condition: any
   placement:
    constraints:
     - node.role == manager
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.nextcloud.entrypoints=plainhttp'
    - 'traefik.http.services.nextcloud.loadbalancer.server.port=80'
    - 'traefik.http.routers.nextcloud.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.nextcloud-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.nextcloud.middlewares=nextcloud-force-secure'
    - 'traefik.http.routers.nextcloud.service=nextcloud'
    - 'traefik.http.routers.nextcloud-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.nextcloud-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.nextcloud-https.service=nextcloud'
    - 'traefik.http.routers.nextcloud-https.tls=true'
    - 'traefik.http.services.nextcloud-https.loadbalancer.server.port=443'
    - 'com.MegaDocker.description=Nextcloud office suite'

 nextcloud-mariadb:
  image: mariadb
  networks:
   - nextcloud
  command: --transaction-isolation=READ-COMMITTED --binlog-format=ROW
  volumes:
   - \${PWD}/nextcloud/mariadb:/var/lib/mysql
  environment:
   - MYSQL_ROOT_PASSWORD=[[NEXTCLOUDMARIADBROOTPASSWORD]]
   - MYSQL_PASSWORD=[[NEXTCLOUDMARIADBPASSWORD]]
   - MYSQL_DATABASE=nextcloud
   - MYSQL_USER=[[NEXTCLOUDMARIADBUSER]]
  deploy:
   restart_policy:
    condition: any
   labels:
    - "com.MegaDocker.description=MariaDB - Storage for NextCloud"
  placement:
   constraints:
    - node.role == manager

# End NextCloud Service Section

`,
}
