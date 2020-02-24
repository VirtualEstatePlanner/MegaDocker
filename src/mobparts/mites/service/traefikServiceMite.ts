//  traefikServiceMite.ts
//  MegaDocker
//  Service Mite for Traefik
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const traefikServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2014,
  miteString: `

#Begin Traefik Service Section

 traefik:
  image: traefik
  networks:
   - [[MOBNAME]]_traefik
  ports:
   - 80:80
   - 443:443
   - 8888:8888
  volumes:
   - /var/run/docker.sock:/var/run/docker.sock:ro
   - ~/Documents/MegaDocker/[[MOBNAME]]/traefik/acme.json:/acme.json
   - ~/Documents/MegaDocker/[[MOBNAME]]/traefik/traefik.yml:/traefik.yml
  environment:
   - CF_API_EMAIL=[[CLOUDFLAREEMAIL]]
   - CF_API_KEY=[[CLOUDFLAREAPIKEY]]
  deploy:
   restart_policy:
    condition: any
   labels:
    - "traefik.enable=true"
    - "traefik.docker.network=[[MOBNAME]]_traefik"
    - "traefik.http.routers.api.rule=Host('traefik.[[PRIMARYDOMAIN]]')"
    - "traefik.http.routers.api.entrypoints=traefik"
    - "traefik.http.routers.api.service=api@internal"
    - "traefik.http.routers.api.insecure=true"
    - "traefik.http.routers.api.tls"
    - "traefik.http.routers.api.tls.certresolver=[[PRIMARYDOMAIN]]"
    - "traefik.http.routers.api.tls.domains[0].main=[[PRIMARYDOMAIN]]"
    - "traefik.http.routers.api.tls.domains[0].sans=*.[[PRIMARYDOMAIN]]"
    - "traefik.http.routers.api.tls.certresolver=[[SECONDARYDOMAIN]]"
    - "traefik.http.routers.api.tls.domains[0].main=[[SECONDARYDOMAIN]]"
    - "traefik.http.routers.api.tls.domains[0].sans=*.[[SECONDARYDOMAIN]]"
   constraints:
    - node.role == manager
#End Traefik Service Section

`
};
