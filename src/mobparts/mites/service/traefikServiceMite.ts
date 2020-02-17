//  traefikServiceMite.ts
//  MegaDocker
//  Network Mite for $SOMEMANIKIN
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';
import { cloudflareAPIKey } from '../../memories/cloudflareAPIKey';
import { mobFolderPath } from '../../memories/mobFolderPath';
import { cloudflareEmail } from '../../memories/cloudflareEmail';
import { primaryDomain } from '../../memories/primaryDomain';
import { mobName } from '../../memories/mobName';
import { secondaryDomain } from '../../memories/secondaryDomain';

export const traefikServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2014,
  miteString: `

#Begin Traefik Service Section
  
traefik:
image: traefik
networks:
 - ${mobName}_traefik
ports:
 - 80:80
 - 443:443
 - 8888:8888
volumes:
 - /var/run/docker.sock:/var/run/docker.sock:ro
 - ${mobFolderPath}/traefik/acme.json:/acme.json
 - ${mobFolderPath}/traefik/traefik.yml:/traefik.yml
environment:
 - CF_API_EMAIL=${cloudflareEmail.value}
 - CF_API_KEY=${cloudflareAPIKey.value}
deploy:
 restart_policy:
  condition: any
 labels:
  - "traefik.enable=true"
  - "traefik.docker.network=${mobName}_traefik"
  - "traefik.http.routers.api.rule=Host('traefik.${primaryDomain.value}')"
  - "traefik.http.routers.api.entrypoints=traefik"
  - "traefik.http.routers.api.service=api@internal"
  - "traefik.http.routers.api.insecure=true"
  - "traefik.http.routers.api.tls"
  - "traefik.http.routers.api.tls.certresolver=${primaryDomain.value}"
  - "traefik.http.routers.api.tls.domains[0].main=${primaryDomain.value}"
  - "traefik.http.routers.api.tls.domains[0].sans=*.${primaryDomain.value}"
  - "traefik.http.routers.api.tls.certresolver=${secondaryDomain.value}"
  - "traefik.http.routers.api.tls.domains[0].main=${secondaryDomain.value}"
  - "traefik.http.routers.api.tls.domains[0].sans=*.${secondaryDomain.value}"


  traefik:
   image: 
   networks:
    - 
   ports:
    - 
   volumes:
    - 
   environment:
    - 
   deploy:
    replicas: 
    placement:
    constraints:
     - node.role == manager
    labels:
     - 
#End Traefik Service Section
  
  `
};
