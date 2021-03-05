/** @format */

//  opensourcePOSServiceMite.ts
//  MegaDocker
//  Service Mite for opensourcePOS
//  Created by George Georgulas IV on 3/5/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite'

export const opensourcePOSServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 30020,
  miteString: `

# Begin opensourcePOS Service Section

 opensourcepos:
  image: jekkos/opensourcepos:latest
  networks:
   - opensourcepos
   - traefik
  volumes:
   - uploads:/app/public/uploads
   - logs:/app/application/logs
  environment:
   - CI_ENV=production
   - FORCE_HTTPS=true
   - PHP_TIMEZONE=UTC
   - MYSQL_USERNAME=[[OPENSOURCEPOSMARIADBUSER]]
   - MYSQL_PASSWORD=[[OSPOSMARIADBPASSWORD]]
   - MYSQL_DB_NAME=opensourcepos
   - MYSQL_HOST_NAME=mariadb
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.opensourcepos.entrypoints=plainhttp'
    - 'traefik.http.services.opensourcepos.loadbalancer.server.port=80'
    - 'traefik.http.routers.opensourcepos.rule=Host("opensourcepos.[[PRIMARYDOMAIN]]") || Host("opensourcepos.[[SECONDARYDOMAIN]]")'
    - 'traefik.http.middlewares.opensourcepos-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.opensourcepos.middlewares=opensourcepos-force-secure'
    - 'traefik.http.routers.opensourcepos.service=opensourcepos'
    - 'traefik.http.routers.opensourcepos-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.opensourcepos-https.rule=Host("opensourcepos.[[PRIMARYDOMAIN]]") || Host("opensourcepos.[[SECONDARYDOMAIN]]")'
    - 'traefik.http.routers.opensourcepos-https.service=opensourcepos'
    - 'traefik.http.routers.opensourcepos-https.tls=true'
    - 'traefik.http.services.opensourcepos-interface-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=opensourcePOS - Point of Sale system'

 mariadb:
  image: mariadb:latest
  networks:
   - opensourcepos
  volumes:
   - ./database/database.sql:/docker-entrypoint-initdb.d/database.sql
   - mysql:/var/lib/mysql:rw
  environment:
   - MYSQL_ROOT_PASSWORD=[[OPENSOURCEPOSMARIADBROOTPASSWORD]]
   - MYSQL_DATABASE=opensourcepos
   - MYSQL_USER=[[OPENSOURCEPOSMARIADBUSER]]
   - MYSQL_PASSWORD=[[OSPOSMARIADBPASSWORD]]
  deploy:
   restart_policy:
    condition: on-failure

# End opensourcePOS Service Section

`,
}
