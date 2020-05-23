//  serviceMite.ts
//  MegaDocker
//  Service Mite for Portainer
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const portainerServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2021,
  miteString: `

#Begin Portainer Service Section

 portainer:
  image: portainer/portainer
  networks:
   - traefik
  command: '--no-auth'
  volumes:
   - ./logs/portainer:/loglocation
   - /var/run/docker.sock:/var/run/docker.sock
  deploy:
   mode: global
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.portainer.entrypoints=plainhttp'
    - 'traefik.http.services.portainer.loadbalancer.server.port=9000'
    - 'traefik.http.routers.portainer.rule=Host("portainer.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.portainer-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.portainer.middlewares=portainer-force-secure'
    - 'traefik.http.routers.portainer.service=portainer'
    - 'traefik.http.routers.portainer-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.portainer-https.rule=Host("portainer.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.portainer-https.service=portainer'
    - 'traefik.http.routers.portainer-https.tls=true'
    - 'traefik.http.services.portainer-https.loadbalancer.server.port=9000'
    - 'com.MegaDocker.description=Portainer docker host management UI'
   placement:
    constraints:
     - node.role == manager


#End Portainer Service Section

`,
};
