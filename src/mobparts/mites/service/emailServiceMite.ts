//  emailServiceMite.ts
//  MegaDocker
//  Service Mite for email server
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const emailServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2003,
  miteString: `

#Begin MailServer section

 mailserver:
  image: tvial/docker-mailserver
  ports:
   - 25:25
   - 587:587
   - 993:993
  volumes:
   - ./email/maildata:/var/mail
   - ./email//mailstate:/var/mail-state
   - ./email/config:/tmp/docker-mailserver
#   - ./traefik/ssl/certs:/certs:ro
#   - ./traefik/ssl/pem/*.[[PRIMARYDOMAIN]].pem:/etc/letsencrypt/live/*.[[PRIMARYDOMAIN]]/*.[[PRIMARYDOMAIN]].pem:ro
#   - ./traefik/ssl/private/*.[[PRIMARYDOMAIN]].key:/etc/letsencrypt/live/*.[[PRIMARYDOMAIN]]/*.[[PRIMARYDOMAIN]]/key:ro
#   - ./traefik/ssl/private/letsencrypt.key:/etc/letsencrypt/live/*.[[PRIMARYDOMAIN]]/letsencrypt.key:ro
   - ./traefik/ssl:/etc/letsencrypt:ro
  environment:
   - ENABLE_SPAMASSASSIN=1
   - ENABLE_CLAMAV=1
   - ENABLE_POSTGREY=0
   - ONE_DIR=1
   - DOMAIN=[[PRIMARYDOMAIN]]
   - OVERRIDE_HOSTNAME=mail.[[PRIMARYDOMAIN]]
   - OVERRIDE_DOMAINNAME=mail.[[PRIMARYDOMAIN]]
   - POSTMASTER_ADDRESS=postmaster@[[PRIMARYDOMAIN]]
   - PERMIT_DOCKER=network
   - SSL_TYPE=manual
   - SSL_CERT_PATH=/certs/certs/*.[[PRIMARYDOMAIN]].crt
   - SSL_KEY_PATH=/certs/private/*.[[PRIMARYDOMAIN]].key
  networks:
   - email
  deploy:
   replicas: 1
   restart_policy:
    condition: on-failure

 rainloop:
  image: hardware/rainloop
  networks:
   - email
   - traefik
  volumes:
   - ./[[MOBNAME]]/email/rainloop:/rainloop/data
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.rainloop.entrypoints=plainhttp'
    - 'traefik.http.services.rainloop.loadbalancer.server.port=80'
    - 'traefik.http.routers.rainloop.rule=Host("webmail.[[PRIMARYDOMAIN]]") || Host("webmail.[[SECONDARYDOMAIN]]")'
    - 'traefik.http.middlewares.rainloop-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.rainloop.middlewares=rainloop-force-secure'
    - 'traefik.http.routers.rainloop.service=rainloop'
    - 'traefik.http.routers.rainloop-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.rainloop-https.rule=Host("webmail.[[PRIMARYDOMAIN]]") || Host("webmail.[[SECONDARYDOMAIN]]")'
    - 'traefik.http.routers.rainloop-https.service=rainloop'
    - 'traefik.http.routers.rainloop-https.tls=true'
    - 'traefik.http.services.rainloop-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=Rainloop webmail frontend'
   placement:
    constraints:
     - node.role == manager

#End Mailserver Service Section

`
};
