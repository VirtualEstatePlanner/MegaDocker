/** @format */

//  webdavServiceMite.ts
//  MEGADocker
//  Service Mite for WebDAV
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [`webdav`]

export const webdavServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30034,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin WebDAV Service Section

 webdav:
  image: bytemark/webdav
  networks:
   - webdav
  environment:
   - AUTH_TYPE=Digest
   - USERNAME=[[WEBDAVUSER]]
   - PASSWORD=[[WEBDAVPASSWORD]]
   - SERVER_NAMES=webdav.[[PRIMARYDOMAIN]]
  volumes:
   - \${PWD}/webdav/data:/var/lib/dav
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.webdav.entrypoints=plainhttp'
    - 'traefik.http.services.webdav.loadbalancer.server.port=0'
    - 'traefik.http.routers.webdav.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.webdav-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.webdav.middlewares=webdav-force-secure'
    - 'traefik.http.routers.webdav.service=webdav'
    - 'traefik.http.routers.webdav-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.webdav-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.webdav-https.service=webdav'
    - 'traefik.http.routers.webdav-https.tls=true'
    - 'traefik.http.services.webdav-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=WebDav - File-sharing service'

# End WebDAV Service Section

`,
}
