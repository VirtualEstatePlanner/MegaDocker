//  .ts
//  MegaDocker
//  YMl snippet for
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

//  tslint:disable max-line-length

export const mobFileHeaderString: string = `
# MegaDocker YML File
version: '3.6'

# Created by MegaDocker
# Data is stored at: ${mobFolderPath}
# Mob is named: ${mobName}

#Begin Services Section
services:
`;

import { cloudflareAPIKey } from '../memories/cloudflareAPIKey';
import { cloudflareEmail } from '../memories/cloudflareEmail';
import { drupalPostgresPassword } from '../memories/drupalPostgresPassword';
import { drupalPostgresUser } from '../memories/drupalPostgresUser';
import { ghostRootMariaDBPassword } from '../memories/ghostRootMariaDBPassword';
import { letsEncryptEmail } from '../memories/letsEncryptEmail';
import { mobFolderPath } from '../memories/mobFolderPath';
import { mobName } from '../memories/mobName';
import { primaryDomain } from '../memories/primaryDomain';
import { rocketchatBotPassword } from '../memories/rocketchatBotPassword';
import { rocketchatBotUsername } from '../memories/rocketchatBotUsername';
import { secondaryDomain } from '../memories/secondaryDomain';
import { wordpressMariaDBPassword } from '../memories/wordpressMariaDBPassword';
import { wordpressMariaDBRootPassword } from '../memories/wordpressMariaDBRootPassword';
import { wordpressMariaDBUser } from '../memories/wordpressMariaDBUser';

export const wordPressServiceString: string = `

#Begin WordPress Service Section

 wordpress:
  image: wordpress
  depends_on:
   - mariadb
  networks:
   - wordpress
   - traefik
  environment:
   - WORDPRESS_DB_HOST=${mobName}_wordpress-mariadb
   - WORDPRESS_DB_USER=${wordpressMariaDBUser.value}
   - WORDPRESS_DB_PASSWORD=${wordpressMariaDBPassword.value}
   - WORDPRESS_DB_NAME=wordpress
  volumes:
   - ${mobFolderPath}/WordPress/data:/var/www/html
  deploy:
   replicas: 1
   restart_policy:
    condition: on-failure
   labels:
    - "traefik.enable=true"
    - "traefik.port=80"
    - "traefik.backend=wordpress"
    - "traefik.frontend.rule=Host:wordpress.${primaryDomain.value},wordpress.${secondaryDomain.value}"
    - "traefik.docker.network=traefik"
    - "com.MegaDocker.description=WordPress - WordPress blogging platform"

 wordpress-mariadb:
  image: mariadb
  networks:
   - wordpress
  environment:
   - MYSQL_DATABASE=wordpress
   - MYSQL_ROOT_PASSWORD=${wordpressMariaDBRootPassword.value}
   - MYSQL_USER=${wordpressMariaDBUser.value}
   - MYSQL_PASSWORD=${wordpressMariaDBPassword.value}
  volumes:
   - ${mobFolderPath}/WordPress/mariadb:/var/lib/mysql
  deploy:
   restart_policy:
    condition: on-failure

#End WordPress Service Section

`;

export const owncloudServiceString: string = `

#Begin Owncloud Service Sections

 owncloud:
  image: owncloud
  networks:
   - traefik
   - owncloud
  volumes:
   - export/Owncloud/apps/:/var/www/html/apps
   - ${mobFolderPath}/Owncloud/config/:/var/www/html/config
   - ${mobFolderPath}/Owncloud/data/:/var/www/html/data
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - "traefik.enable=true"
    - "traefik.backend=owncloud"
    - "traefik.frontend.rule=Host:owncloud.${primaryDomain.value},owncloud.${secondaryDomain.value}"
    - "traefik.port=80"
    - "traefik.docker.network=traefik"
  depends_on:
   - postgres

 owncloud-postgres:
  image: postgres:alpine
  environment:
   - POSTGRES_PASSWORD=password
   - POSTGRES_USER=owncloud
   - POSTGRES_DB=owncloud
  networks:
   - owncloud
  volumes:
 #  - /etc/localtime:/etc/localtime:ro
   - ${mobFolderPath}/Owncloud/postgres:/var/lib/postgresql
  deploy:
   restart_policy:
    condition: on-failure

 owncloud-mariadb:
  image: mariadb
  environment:
   - MYSQL_USER=owncloud
   - MYSQL_PASSWORD=owncloud
   - MYSQL_ROOT_PASSWORD=owncloud
   - MYSQL_DATABASE=owncloud
  volumes:
   - ${mobFolderPath}/Owncloud/mariadb:/var/lib/mysql
  deploy:
   restart_policy:
    condition: on-failure
  networks:
   - owncloud


 owncloud-redis:
  image: redis
  volumes:
   - ${mobFolderPath}/Owncloud/redis:/var/lib/mysql
  networks:
   - owncloud
  deploy:
   restart_policy:
    condition: on-failure


#End Owncloud Service Section

`;

export const drupalServiceString: string = `

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

`;

export const portalServiceString: string = `

#Begin Drupal Service Section

#End Drupal Service Section

`;

export const webdavServiceString: string = `

#Begin WebDAV Service Section

#End WebDAV Service Section

`;

export const rocketChatServiceString: string = `

#Begin Rocketchat Service Section

 rocketchat:
  image: rocketchat/rocket.chat
  networks:
   - traefik
   - rocketchat
   - ldap
  volumes:
   - ${mobFolderPath}/RocketChat/uploads:/app/uploads
  environment:
   - PORT=3000
   - ROOT_URL=http://rocketchat.${primaryDomain.value}:3000
   - MONGO_URL=mongodb://${mobName}_rocketmongo:27017/rocketchat
   - MONGO_OPLOG_URL=mongodb://${mobName}_rocketmongo:27017/local
   - MAIL_URL=smtp://smtp.email
  depends_on:
   - rocketmongo
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - "traefik.backend=rocketchat"
    - "traefik.docker.network=traefik"
    - "traefik.enable=true"
    - "traefik.frontend.rule=Host:rocketchat.${primaryDomain.value},rocketchat.${secondaryDomain.value}"
    - "traefik.port=3000"

 rocketmongo:
  image: mongo
  networks:
   - rocketchat
  deploy:
   restart_policy:
    condition: on-failure
  volumes:
   - ${mobFolderPath}/RocketChat/database:/data/db
   - ${mobFolderPath}/RocketChat/db-dump:/dump
  command: mongod --smallfiles --oplogSize 128 --replSet rs0 --storageEngine=mmapv1

 mongo-init-replica:
  image: mongo
  command: 'mongo mongo/rocketchat --eval "rs.initiate({ _id: ''rs0'', members: [ { _id: 0, host: ''localhost:27017'' } ]})"'
  depends_on:
   - rocketmongo
  networks:
   - rocketchat

 hubot:
  image: rocketchat/hubot-rocketchat
  networks:
   - rocketchat
  deploy:
   restart_policy:
    condition: on-failure
  environment:
   - ROCKETCHAT_URL=${mobName}_rocketchat:3000
   - ROCKETCHAT_ROOM=GENERAL
   - ROCKETCHAT_USER=${rocketchatBotUsername.value}
   - ROCKETCHAT_PASSWORD=${rocketchatBotPassword.value}
   - BOT_NAME=bot
   - EXTERNAL_SCRIPTS=hubot-help,hubot-seen,hubot-links,hubot-diagnostics
  depends_on:
   - rocketchat
  volumes:
   - ${mobFolderPath}/Rocketchat/hubot/scripts:/home/hubot/scripts
  ports:
   - 3001:8080

#End Rocketchat Service Section

`;

export const myLDAPServiceString: string = `

#Begin LDAP Service Sections

 openldap:
  image: osixia/openldap
  command:  --copy-service --loglevel debug
  networks:
   - ldap
  environment:
   - LDAP_TLS=true
   - LDAP_TLS_CRT_FILENAME=*.${primaryDomain.value}.crt
   - LDAP_TLS_KEY_FILENAME=*.${primaryDomain.value}.key
   - LDAP_TLS_CA_CRT_FILENAME=letssencrypt.key
   - LDAP_ORGANISATION=The MegaDocker Group
   - LDAP_DOMAIN=ldap.${primaryDomain.value}
   - LDAP_BASE_DN=dc=ldap,dc=megadocker,dc=com
   - LDAP_ADMIN_PASSWORD=verysecret
   - LDAP_CONFIG_PASSWORD=verysecret
   - LDAP_TLS_CIPHER_SUITE=NORMAL
   - LDAP_TLS_VERIFY_CLIENT=allow
  tty: true
  stdin_open: true
  volumes:
   - ${mobFolderPath}/LDAP/ldif-files:/ldif
   - ${mobFolderPath}/LDAP/lib:/var/lib/ldap
   - ${mobFolderPath}/LDAP/slapd.d:/etc/ldap/slapd.d
   - ${mobFolderPath}/Traefik/ssl/certs/*.${primaryDomain}.crt:/container/service/slapd/assets/certs/*.${primaryDomain.value}.crt
   - ${mobFolderPath}/Traefik/ssl/private/*.${primaryDomain}.key:/container/service/slapd/assets/certs/*.${primaryDomain.value}.key
   - ${mobFolderPath}/Traefik/ssl/private/letssencrypt.key:/container/service/slapd/assets/certs/letsencrypt.key
  ports:
   - 389:389
   - 636:636
   - 6443:443
  hostname: ldap.${primaryDomain.value}

 ldapadmin:
  image: osixia/phpldapadmin:latest
  environment:
   - SERVER_NAME=${mobName}_openldap
   - PHPLDAPADMIN_LDAP_HOSTS=${mobName}_openldap
   - PHPLDAPADMIN_TRUST_PROXY_SSL=true
   - PHPLDAPADMIN_HTTPS=false
   - PHPLDAPADMIN_SERVER_ADMIN=${letsEncryptEmail.value}
   - PHPLDAPADMIN_HTTPS_CRT_FILENAME=certs/*.${primaryDomain.value}.crt
   - PHPLDAPADMIN_HTTPS_KEY_FILENAME=private/*.${primaryDomain.value}.key
   - PHPLDAPADMIN_HTTPS_CA_CRT_FILENAME=private/letsencrypt.key
   - PHPLDAPADMIN_LDAP_CLIENT_TLS_CA_CRT_FILENAME=*.${primaryDomain.value}.crt
   - PHPLDAPADMIN_LDAP_CLIENT_TLS_CRT_FILENAME=*.${primaryDomain.value}.key
   - PHPLDAPADMIN_LDAP_CLIENT_TLS_KEY_FILENAME=letsencrypt.key
  hostname: ldap-admin.${primaryDomain.value}
  volumes:
   - ${mobFolderPath}/Traefik/ssl/certs/*.${primaryDomain.value}.crt:/container/service/phpldapadmin/assets/apache2/certs/certs/*.${primaryDomain.value}.crt
   - ${mobFolderPath}/Traefik/ssl/private/*.${primaryDomain.value}.key:/container/service/phpldapadmin/assets/apache2/certs/private/*.${primaryDomain.value}.key
   - ${mobFolderPath}/Traefik/ssl/private/letsencrypt.key:/container/service/phpldapadmin/assets/apache2/certs/certs/letsencrypt.key
   - ${mobFolderPath}/Traefik/ssl/certs/*.${primaryDomain.value}.crt:/container/service/ldap-client/assets/certs/*.${primaryDomain.value}.crt
   - ${mobFolderPath}/Traefik/ssl/private/*.${primaryDomain.value}.key:/container/service/ldap-client/assets/certs/*.${primaryDomain.value}.key
   - ${mobFolderPath}/Traefik/ssl/private/letssencrypt.key:/container/service/ldap-client/assets/certs/letsencrypt.key
  networks:
   - ldap
   - traefik
  depends_on:
   - openldap
  deploy:
   labels:
    - "traefik.enable=true"
    - "traefik.docker.network=traefik"
    - "traefik.port=80"
    - "traefik.backend=ldap-admin"
    - "traefik.frontend.rule=Host:ldap-admin.${primaryDomain.value},ldap-admin.${secondaryDomain.value}"
    - "com.MegaDocker.description=PHPLDAPAdmin - a web front-end for OpenLDAP."

#End LDAP Service Section

`;

export const gitServiceString: string = `

#Begin Git Service Section

#End Git Service Section

`;

export const ghostServiceString: string = `

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

`;

export const portainerServiceString: string = `

#Begin Portainer Service Sections

 portainer:
  image: portainer/portainer
  networks:
   - traefik
  command: '--no-auth'
  volumes:
   - /var/run/docker.sock:/var/run/docker.sock
  deploy:
   labels:
    - "traefik.backend=portainer"
    - "traefik.docker.network=traefik"
    - "traefik.enable=true"
    - "traefik.frontend.rule=Host:portainer.${primaryDomain.value},portainer.${secondaryDomain.value}"
    - "traefik.port=9000"

#End Portainer Service Section

`;

export const nginxServiceString: string = `

#Begin Nginx Service Sections

 nginx:
  image: nginx:alpine
  networks:
   - traefik
  volumes:
   - ${mobFolderPath}/Nginx/conf/default.conf:/etc/nginx/conf.d/default.conf
   - ${mobFolderPath}/Nginx/pages:/var/www/html
   - ${mobFolderPath}/Nginx/log:/var/log/nginx/log
   - ${mobFolderPath}/Nginx/conf/default.template.conf:/etc/nginx/conf.d/default.template
  environment:
   - NGINX_HOST=www.megadocker.com
  deploy:
   replicas: 1
   restart_policy:
    condition: on-failure
   labels:
    - "traefik.enable=true"
    - "traefik.port=80"
    - "traefik.backend=nginx"
    - "traefik.frontend.rule=Host:www.${primaryDomain.value},www.${secondaryDomain.value}"
    - "com.MegaDocker.description=nginx - "
  command: /bin/sh -c "envsubst 'www.${primaryDomain.value}' < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"

#End Nginx Service Section

`;

export const skoposServiceString: string = `

#Begin Skopos Service Section

 skopos:
  image: opsani/skopos:edge
  networks:
   - traefik
  environment:
   - skstkn=dflt:339650468.1517278337
  volumes:
   - /var/run/docker.sock:/var/run/docker.sock:rw
  deploy:
   replicas: 1
   restart_policy:
    condition: on-failure
   labels:
    - "traefik.enable=true"
    - "traefik.port=8100"
    - "traefik.backend=skopos"
    - "traefik.frontend.rule=Host:skopos.${primaryDomain.value},skopos.${secondaryDomain.value}"
    - "com.MegaDocker.description=Skopos - an application discovery and CI/CD for Docker Swarm Tool"

#End Skopos Service Section

`;

export const swarmpitServiceString: string = `

#Begin Swarmpit Service Section

 swarmpit-app:
  image: swarmpit/swarmpit
  depends_on:
   - swarmpit-db
  volumes:
   - /var/run/docker.sock:/var/run/docker.sock
  networks:
   - traefik
   - swarmpit
  environment:
   - SWARMPIT_DB=http://${mobName}_swarmpit-db:5984
  deploy:
   resources:
    limits:
     cpus: '0.50'
     memory: 1024M
    reservations:
     cpus: '0.25'
     memory: 512M
   placement:
    constraints:
     - node.role == manager
   labels:
    - "traefik.enable=true"
    - "traefik.port=8080"
    - "traefik.backend=swarmpit"
    - "traefik.docker.network=traefik"
    - "traefik.frontend.rule=Host:swarmpit.${primaryDomain.value},swarmpit.${secondaryDomain.value}"
    - "com.MegaDocker.description=Swarmpit - a web GUI for Docker Swarm."
   restart_policy:
    condition: on-failure

 swarmpit-db:
  image: klaemo/couchdb
  volumes:
   - ${mobFolderPath}/Swarmpit/database:/opt/couchdb/data
  networks:
   - swarmpit
  deploy:
   labels:
    - "com.MegaDocker.description=CouchDB Database - stores Swarmpit data"
   resources:
    limits:
     cpus: '0.50'
     memory: 1024M
    reservations:
     cpus: '0.25'
     memory: 512M
   restart_policy:
    condition: on-failure

 swarmpit-eye:
  image: swarmpit/agent
  networks:
   - swarmpit
  volumes:
   - /var/run/docker.sock:/var/run/docker.sock:ro
  deploy:
   labels:
    - "com.MegaDocker.description=Event Collector - Swarmpit event monitoring daemon"
   mode: global
   resources:
    limits:
     cpus: '0.10'
     memory: 64M
    reservations:
     cpus: '0.05'
     memory: 32M
   restart_policy:
    condition: on-failure

#End Swarmpit Service Section

`;

export const traefikServiceString: string = ``;

export const visualizerServiceString: string = `

#Begin Visualizer Service Section

 visualizer:
  image: dockersamples/visualizer
  networks:
   - traefik
  volumes:
   - /var/run/docker.sock:/var/run/docker.sock:ro
  deploy:
   replicas: 1
   placement:
    constraints:
    - node.role == manager
   resources:
    limits:
     cpus: '0.10'
     memory: 64M
    reservations:
     cpus: '0.05'
     memory: 32M
   labels:
    - "traefik.enable=true"
    - "traefik.docker.network=${mobName}_traefik"
    - "traefik.port=8080"
    - "traefik.backend=visualizer"
    - "traefik.frontend.rule=Host:visualizer.${primaryDomain.value},visualizer.${secondaryDomain.value}"
    - "com.MegaDocker.description=Visualizer - Container node placement web visualizer"

#End Visualizer Service Section

`;

export const myELKServiceString: string = `

#Begin ELK Service Section

 elasticsearch:
  image: elasticsearch
  networks:
   - elk
  volumes:
   - ${mobFolderPath}/ELK/Elasticsearch:/usr/share/elasticsearch/data
  ports:
   - 9200:9200
   - 9300:9300

 kibana:
  image: kibana
  networks:
   - traefik
   - elk
   - ldap
  environment:
   - SERVER_NAME=${mobName}_elasticsearch:9200
  depends_on:
   - elasticsearch
  deploy:
   labels:
   - "traefik.backend=kibana"
   - "traefik.docker.network=traefik"
   - "traefik.enable=true"
   - "traefik.frontend.rule=Host:kibana.${primaryDomain.value},kibana.${secondaryDomain.value}"
   - "traefik.port=5601"

 logstash:
  image: logstash
  volumes:
   - ${mobFolderPath}/ELK/Logstash/config:/config-dir
  networks:
   - elk
  command: logstash -f /config-dir/logstash.conf
  depends_on:
   - elasticsearch

#End ELK Service Section

`;

export const servicesFooterSectionString: string = `

#End Services Section

`;

export const mobNetworksSectionString: string = `

#Begin Networks Section

networks:

`;

export const swarmpitNetworkString: string = `

#Begin Swarmpit Network Section

 swarmpit:
  external: true

#End Swarmpit Network Section

`;

export const traefikNetworkString: string = ``;

export const myELKNetworkString: string = `

#Begin ELK Network Section

 elk:
  external: true

#End ELK Network Section

`;

export const owncloudNetworkString: string = `

#Begin Owncloud Network Section

 owncloud:
  external: true

#End Owncloud Network Section

`;

export const nextcloudNetworkString: string = `

#Begin Nextcloud Network Section

 nextcloud:
  external: true

#End Nextcloud Network Section

`;

export const backupNetworkString: string = `

#Begin Backup Network Section

 backup:
  external: true

#End Backup Network Section

`;

export const ghostNetworkString: string = `

#Begin Ghost Network Section

 ghost:
  external: true

#End Ghost Network Section

`;

export const myLDAPNetworkString: string = `

#Begin LDAP Network Section

 ldap:
  external: true

#End LDAP Network Section

`;

export const rocketChatNetworkString: string = `

#Begin RocketChat Network Section

 rocketchat:
  external: true

#End RocketChat Network Section

`;

export const wordPressNetworkString: string = `

#Begin WordPress Network Section

 wordpress:
  external: true

#End WordPress Network Section

`;

export const drupalNetworkString: string = `

#Begin RocketChat Network Section

 drupal:
  external: true

#End Drupal Network Section

`;

export const gitNetworkString: string = `

#Begin Git Network Section

 git:
  external: true

#End Git Network Section

`;

export const webdavNetworkString: string = `

#Begin Webdav Network Section

 webdav:
  external: true

#End Webdav Network Section

`;

export const noNetworkString: string = ``;

export const mobNetworkFooterSectionString: string = `

#End Networks Section

`;

export const blankSynopsisString: string = `
Empty
Manikin Synopsis
`;
