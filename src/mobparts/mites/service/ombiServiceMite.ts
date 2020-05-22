//  serviceMite.ts
//  MegaDocker
//  Service Mite for Owncloud
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const ombiServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2010,
  miteString: `
 # Begin Ombi Service Sections

 ombi:
  image: linuxserver/ombi
  networks:
   - traefik
   - ombi
  volumes:
   - ./plex/ombi-config:/someconfdir
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.ombi.entrypoints=plainhttp'
    - 'traefik.http.services.ombi.loadbalancer.server.port=80'
    - 'traefik.http.routers.ombi.rule=Host("ombi.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.ombi-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.ombi.middlewares=ombi-force-secure'
    - 'traefik.http.routers.ombi.service=ombi'
    - 'traefik.http.routers.ombi-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.ombi-https.rule=Host("ombi.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.ombi-https.service=ombi'
    - 'traefik.http.routers.ombi-https.tls=true'
    - 'traefik.http.services.ombi-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=Ombi - media download request app'

# End Ombi Service Section

`,
};
