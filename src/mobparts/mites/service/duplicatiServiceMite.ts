/** @format */

//  duplicatiServiceMite.ts
//  MEGADocker
//  Service Mite for duplicati
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [`backup`]

export const duplicatiServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30003,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin Backup Service Section

 backup:
  image: georgegeorgulasiv/duplicati
  networks:
   - traefik
  environment:
   - TZ=$HOSTTIMEZONE
   - PUID=$HOSTUSERID
   - PGID=$HOSTUSERGID
  volumes:
   - \${PWD}/:/source
   - \${PWD}/backups/data/:/backups
   - \${PWD}/backups/Duplicati/:/data/Duplicati
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.backup.entrypoints=plainhttp'
    - 'traefik.http.services.backup.loadbalancer.server.port=8200'
    - 'traefik.http.routers.backup.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.backup-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.backup.middlewares=backup-force-secure'
    - 'traefik.http.routers.backup.service=backup'
    - 'traefik.http.routers.backup-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.backup-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.backup-https.service=backup'
    - 'traefik.http.routers.backup-https.tls=true'
    - 'traefik.http.services.backup-interface-https.loadbalancer.server.port=8200'
    - 'com.MegaDocker.description=Duplicati - automated incremental backup and restore with web interface'

# End Backup Service Section

`,
}
