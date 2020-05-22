//  serviceMite.ts
//  MegaDocker
//  Service Mite for Visualizer
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const visualizerServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2018,
  miteString: `

#Begin Visualizer Service Section

 visualizer:
  image: dockersamples/visualizer
  networks:
   - traefik
  volumes:
   - /var/run/docker.sock:/var/run/docker.sock:ro
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.visualizer.entrypoints=plainhttp'
    - 'traefik.http.services.visualizer.loadbalancer.server.port=8080'
    - 'traefik.http.routers.visualizer.rule=Host("visualizer.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.visualizer-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.visualizer.middlewares=visualizer-force-secure'
    - 'traefik.http.routers.visualizer.service=visualizer'
    - 'traefik.http.routers.visualizer-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.visualizer-https.rule=Host("visualizer.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.visualizer-https.service=visualizer'
    - 'traefik.http.routers.visualizer-https.tls=true'
    - 'traefik.http.services.visualizer-https.loadbalancer.server.port=8080'
    - 'com.MegaDocker.description=Visualizer - Container node placement web visualizer'
   placement:
    constraints:
     - node.role == manager


#End Visualizer Service Section

`,
};
