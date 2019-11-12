//  traefik/serviceMite.ts
//  MegaDocker
//  Service Mite for Traefik
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../classes/IMite';
import {
  mobFolderPath,
  cloudFlareAPIKey,
  cloudFlareEmail,
  primaryDomain,
  secondaryDomain
} from '../../../objects/manikin-variables';

export const serviceMite: IMite = {
  type: 'Service',
  miteString: `

    #Begin Traefik Service Section
    
     traefik:
      image: traefik
      networks:
       - traefik
       - ldap
      ports:
       - 5000:5000
       - 8080:8080
       - 32400:32400/udp
       - 32400:32400
       - 80:80
       - 8110:8110
       - 443:443
      volumes:
       - /var/run/docker.sock:/var/run/docker.sock
       - ${mobFolderPath}/Traefik/traefik.toml:/traefik.toml
       - ${mobFolderPath}/Traefik/acme.json:/acme.json
      environment:
       - "CLOUDFLARE_API_KEY=${cloudFlareAPIKey.value}"
    - "CLOUDFLARE_EMAIL=${cloudFlareEmail.value}"
      deploy:
       replicas: 1
       placement:
        constraints:
         - node.role == manager
       labels:
        - "traefik.enable=true"
        - "traefik.backend=traefik"
        - "traefik.frontend.rule=Host:traefik.${primaryDomain.value},traefik.${secondaryDomain.value}"
        - "traefik.docker.network=traefik"
        - "traefik.port=8888"
    
     certdumper:
      image: alpine:latest
      depends_on:
       - traefik
      deploy:
       restart_policy:
        condition: none
      volumes:
       - ${mobFolderPath}/Traefik/acme.json:/traefik/acme.json:ro
       - ${mobFolderPath}/Traefik/traefik.toml:/traefik/traefik.toml:ro
       - ${mobFolderPath}/Traefik/ssl/certs:/traefik/ssl/certs
       - ${mobFolderPath}/Traefik/ssl/pem:/traefik/ssl/pem
       - ${mobFolderPath}/Traefik/ssl/private:/traefik/ssl/private
      command: >
       ash -c " \
       apk --no-cache add inotify-tools jq openssl util-linux bash && \
       wget https://raw.githubusercontent.com/containous/traefik/master/contrib/scripts/dumpcerts.sh -O dumpcerts.sh && \
           sleep 15 && \
           bash dumpcerts.sh /traefik/acme.json /traefik/ssl/ && \
           cat /traefik/ssl/certs/*.${primaryDomain.value}.crt /traefik/ssl/private/*.${primaryDomain.value}.key > /traefik/ssl/pem/*.${primaryDomain.value}.pem && \
           cat /traefik/ssl/certs/*.${secondaryDomain.value}.crt /traefik/ssl/private/*.${secondaryDomain.value}.key > /traefik/ssl/pem/*.${secondaryDomain.value}.pem;"
    
    #End Traefik Service Section
    
    `
};
