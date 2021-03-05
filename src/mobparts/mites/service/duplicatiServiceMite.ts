/** @format */

//  drupalServiceMite.ts
//  MegaDocker
//  Network Mite for Drupal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite'

export const duplicatiServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 30003,
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
   - ./:/source
   - ./backups/data/:/backups
   - ./backups/Duplicati/:/data/Duplicati
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.backup.entrypoints=plainhttp'
    - 'traefik.http.services.backup.loadbalancer.server.port=8200'
    - 'traefik.http.routers.backup.rule=Host("backup.megadocker.net") || Host("backup.megadocker.info")'
    - 'traefik.http.middlewares.backup-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.backup.middlewares=backup-force-secure'
    - 'traefik.http.routers.backup.service=backup'
    - 'traefik.http.routers.backup-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.backup-https.rule=Host("backup.megadocker.net") || Host("backup.megadocker.info")'
    - 'traefik.http.routers.backup-https.service=backup'
    - 'traefik.http.routers.backup-https.tls=true'
    - 'traefik.http.services.backup-interface-https.loadbalancer.server.port=8200'
    - 'com.MegaDocker.description=Duplicati - automated incremental backup and restore with web interface'

# End Backup Service Section

`,
}
