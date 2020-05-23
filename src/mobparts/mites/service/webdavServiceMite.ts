//  serviceMite.ts
//  MegaDocker
//  Service Mite for WebDAV
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const webdavServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2028,
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
   - ./webdav/data:/var/lib/dav
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.webdav.entrypoints=plainhttp'
    - 'traefik.http.services.webdav.loadbalancer.server.port=0'
    - 'traefik.http.routers.webdav.rule=Host("webdav.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.webdav-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.webdav.middlewares=webdav-force-secure'
    - 'traefik.http.routers.webdav.service=webdav'
    - 'traefik.http.routers.webdav-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.webdav-https.rule=Host("webdav.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.webdav-https.service=webdav'
    - 'traefik.http.routers.webdav-https.tls=true'
    - 'traefik.http.services.webdav-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=WebDav - File-sharing service'

# End WebDAV Service Section

`,
};
