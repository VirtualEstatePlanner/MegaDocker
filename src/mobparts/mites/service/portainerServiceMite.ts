//  serviceMite.ts
//  MegaDocker
//  Service Mite for Portainer
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const portainerServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2012,
  miteString: `

#Begin Portainer Service Section

 portainer:
  image: portainer/portainer
  networks:
   - [[MOBNAME]]_traefik
  command: '--no-auth'
  volumes:
   - /var/run/docker.sock:/var/run/docker.sock
  deploy:
   labels:
    - "traefik.backend=portainer"
    - "traefik.docker.network=[[MOBNAME]]_traefik"
    - "traefik.enable=true"
    - "traefik.frontend.rule=Host:portainer.[[PRIMARYDOMAIN]],portainer.[[SECONDARYDOMAIN]]"
    - "traefik.port=9000"

#End Portainer Service Section

`
};
