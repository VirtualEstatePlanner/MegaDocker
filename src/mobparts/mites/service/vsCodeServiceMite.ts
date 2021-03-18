/** @format */

//  serviceMite.ts
//  MEGADocker
//  Service Mite for Visualizer
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [`vscode`]

export const vsCodeServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30032,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin VS Code Service Section

 vscode:
  image: beneventsur/visual-studio-code
  volumes:
   - \${PWD}/vscode/pages/index.html:/noVNC/index.html
   - \${PWD}/vscode/project:/root/project
  networks:
   - traefik
  environment:
   - PASSWORD=[[VSCODEPASSWORD]]
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.vscode.entrypoints=plainhttp'
    - 'traefik.http.services.vscode.loadbalancer.server.port=6080'
    - 'traefik.http.routers.vscode.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.vscode-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.vscode.middlewares=vscode-force-secure'
    - 'traefik.http.routers.vscode.service=vscode'
    - 'traefik.http.routers.vscode-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.vscode-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.vscode-https.service=vscode'
    - 'traefik.http.routers.vscode-https.tls=true'
    - 'traefik.http.services.vscode-https.loadbalancer.server.port=6080'
    - 'com.MegaDocker.description=VS Code - Development environment'
   placement:
    constraints:
     - node.role == manager


# End VS Code Service Section

`,
}
