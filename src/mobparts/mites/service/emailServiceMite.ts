//  emailServiceMite.ts
//  MegaDocker
//  Service Mite for email server
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const emailServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2019,
  miteString: `

#Begin MailServer section

 mailserver:
  image: tvial/docker-mailserver
  ports:
   - 25:25
   - 587:587
   - 993:993
  volumes:
   - /Users/agg4/Documents/MegaDocker/[[MOBNAME]]/mail/maildata:/var/mail
   - /Users/agg4/Documents/MegaDocker/[[MOBNAME]]/mail//mailstate:/var/mail-state
   - /Users/agg4/Documents/MegaDocker/[[MOBNAME]]/mail/config:/tmp/docker-mailserver
   - /Users/agg4/Documents/MegaDocker/[[MOBNAME]]/traefik/ssl/certs:/certs:ro
 #  - /Users/agg4/Documents/MegaDocker/[[MOBNAME]]/traefik/ssl/pem/*.[[PRIMARYDOMAIN]].pem:/etc/letsencrypt/live/*.[[PRIMARYDOMAIN]]/*.[[PRIMARYDOMAIN]].pem:ro
 #  - /Users/agg4/Documents/MegaDocker/[[MOBNAME]]/traefik/ssl/private/*.[[PRIMARYDOMAIN]].key:/etc/letsencrypt/live/*.[[PRIMARYDOMAIN]]/*.[[PRIMARYDOMAIN]]/key:ro
 #  - /Users/agg4/Documents/MegaDocker/[[MOBNAME]]/traefik/ssl/private/letsencrypt.key:/etc/letsencrypt/live/*.[[PRIMARYDOMAIN]]/letsencrypt.key:ro
 #  - /Users/agg4/Documents/MegaDocker/[[MOBNAME]]/traefik/ssl:/etc/letsencrypt:ro
 #  - /Users/agg4/Documents/MegaDocker/[[MOBNAME]]/mail/letsencrypt:/etc/letsencrypt:ro
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
   - [[MOBNAME]]_email
  deploy:
   replicas: 1
   restart_policy:
    condition: on-failure

 rainloop:
  image: hardware/rainloop
  networks:
   - [[MOBNAME]]_mail
   - [[MOBNAME]]_traefik
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - traefik.enable=true
    - traefik.frontend.rule=Host:webmail.[[PRIMARYDOMAIN]]
    - traefik.backend=webmail
    - traefik.docker.network=[[MOBNAME]]_traefik
    - traefik.port=8888
  volumes:
   - /Users/agg4/Documents/MegaDocker/[[MOBNAME]]/mail/rainloop:/rainloop/data

#End Mailserver Service Section

`
};
