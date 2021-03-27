/** @format */

//  visualizerServiceMite.ts
//  MEGADocker
//  Service Mite for docker swarm visualizer
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [`visualizer`]

export const visualizerServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30032,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin Visualizer Service Section

 visualizer:
  image: dockersamples/visualizer
  networks:
   - traefik
  volumes:
   - /var/run/docker.sock:/var/run/docker.sock:ro
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.visualizer.entrypoints=plainhttp'
    - 'traefik.http.services.visualizer.loadbalancer.server.port=8080'
    - 'traefik.http.routers.visualizer.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.visualizer-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.visualizer.middlewares=visualizer-force-secure'
    - 'traefik.http.routers.visualizer.service=visualizer'
    - 'traefik.http.routers.visualizer-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.visualizer-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.visualizer-https.service=visualizer'
    - 'traefik.http.routers.visualizer-https.tls=true'
    - 'traefik.http.services.visualizer-https.loadbalancer.server.port=8080'
    - 'com.MegaDocker.description=Visualizer - Container node placement web visualizer'
   placement:
    constraints:
     - node.role == manager


# End Visualizer Service Section

`,
}
