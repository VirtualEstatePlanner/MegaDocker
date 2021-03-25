/** @format */

//  serviceMite.ts
//  MEGADocker
//  Service Mite for Portainer
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [`portainer`]

export const portainerServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30025,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin Portainer Service Section

 portainer:
  image: portainer/portainer
  networks:
   - traefik
  command: '--no-auth'
  volumes:
   - \${PWD}/logs/portainer:/loglocation
   - /var/run/docker.sock:/var/run/docker.sock
  deploy:
   mode: global
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.portainer.entrypoints=plainhttp'
    - 'traefik.http.services.portainer.loadbalancer.server.port=9000'
    - 'traefik.http.routers.portainer.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.portainer-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.portainer.middlewares=portainer-force-secure'
    - 'traefik.http.routers.portainer.service=portainer'
    - 'traefik.http.routers.portainer-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.portainer-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.portainer-https.service=portainer'
    - 'traefik.http.routers.portainer-https.tls=true'
    - 'traefik.http.services.portainer-https.loadbalancer.server.port=9000'
    - 'com.MegaDocker.description=Portainer docker host management UI'
   placement:
    constraints:
     - node.role == manager

# End Portainer Service Section

`,
}
