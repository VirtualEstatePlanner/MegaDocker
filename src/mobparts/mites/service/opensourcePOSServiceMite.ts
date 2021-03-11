/** @format */

//  opensourcePOSServiceMite.ts
//  MegaDocker
//  Service Mite for opensourcePOS
//  Created by George Georgulas IV on 3/5/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [`opensourcepos`]

export const opensourcePOSServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30020,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin opensourcePOS Service Section

 opensourcepos-app:
  image: jekkos/opensourcepos:latest
  networks:
   - opensourcepos
   - traefik
  volumes:
   - \${PWD}/opensourcepos/app:/app/public/uploads
#   - \${PWD}/logs/opensourcepos/app:/app/application/logs
  environment:
   - CI_ENV=production
   - FORCE_HTTPS=true
   - PHP_TIMEZONE=UTC
   - MYSQL_USERNAME=[[OPENSOURCEPOSMARIADBUSER]]
   - MYSQL_PASSWORD=[[OPENSOURCEPOSMARIADBPASSWORD]]
   - MYSQL_DB_NAME=opensourcepos
   - MYSQL_HOST_NAME=[[MOBNAME]]_opensourcepos-mariadb
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.opensourcepos.entrypoints=plainhttp'
    - 'traefik.http.services.opensourcepos.loadbalancer.server.port=80'
    - 'traefik.http.routers.opensourcepos.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.opensourcepos-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.opensourcepos.middlewares=opensourcepos-force-secure'
    - 'traefik.http.routers.opensourcepos.service=opensourcepos'
    - 'traefik.http.routers.opensourcepos-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.opensourcepos-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.opensourcepos-https.service=opensourcepos'
    - 'traefik.http.routers.opensourcepos-https.tls=true'
    - 'traefik.http.services.opensourcepos-interface-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=opensourcePOS - Point of Sale system'

 opensourcepos-mariadb:
  image: mariadb:latest
  networks:
   - opensourcepos
  volumes:
## TODO: add database.sql customMite
   - \${PWD}/opensourcepos/database/database.sql:/docker-entrypoint-initdb.d/database.sql
   - \${PWD}/opensourcepos/mariadb:/var/lib/mysql
  environment:
   - MYSQL_ROOT_PASSWORD=[[OPENSOURCEPOSMARIADBROOTPASSWORD]]
   - MYSQL_DATABASE=opensourcepos
   - MYSQL_USER=[[OPENSOURCEPOSMARIADBUSER]]
   - MYSQL_PASSWORD=[[OPENSOURCEPOSMARIADBPASSWORD]]
  deploy:
   restart_policy:
    condition: on-failure

# End opensourcePOS Service Section

`,
}
