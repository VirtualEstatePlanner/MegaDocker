//  serviceMite.ts
//  MegaDocker
//  Network Mite for $SOMEMANIKIN
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';
import { mobName } from '../../memories/mobName';
import { primaryDomain } from '../../memories/primaryDomain';
import { secondaryDomain } from '../../memories/secondaryDomain';

export const visualizerServiceMite: IMite = {
  type: 'Service',
  miteIndex: 2015,
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
      - "traefik.docker.network=${mobName}_traefik"
      - "traefik.port=8080"
      - "traefik.backend=visualizer"
      - "traefik.frontend.rule=Host:visualizer.${primaryDomain.value},visualizer.${secondaryDomain.value}"
      - "com.MegaDocker.description=Visualizer - Container node placement web visualizer"
  
  #End Visualizer Service Section
  
  `
};