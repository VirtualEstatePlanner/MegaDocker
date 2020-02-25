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
    - "traefik.docker.network=[[MOBNAME]]_traefik"
    - "traefik.port=8080"
    - "traefik.backend=visualizer"
    - "traefik.frontend.rule=Host:visualizer.[[PRIMARYDOMAIN]],visualizer.[[SECONDARYDOMAIN]]"
    - "com.MegaDocker.description=Visualizer - Container node placement web visualizer"

#End Visualizer Service Section

`
};
