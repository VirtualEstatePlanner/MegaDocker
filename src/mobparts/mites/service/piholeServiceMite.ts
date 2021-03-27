/** @format */

//  piholeServiceMite.ts
//  MEGADocker
//  Service Mite for Pihole
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [`pihole`]

export const piholeServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30023,
  webInterfaceHostnames: hostnames,
  miteString: `
  
# Begin pihole service section

 pihole:
  image: pihole/pihole:latest
  networks:
   - traefik
  ports:
   - 53:53/tcp
   - 53:53/udp
  environment:
   - TZ=$HOSTTIMEZONE
   - WEBPASSWORD=[[PIHOLEPASSWORD]]
  volumes:
   - \${PWD}/logs/pihole:/loglocation
   - \${PWD}/pihole/etc-pihole/:/etc/pihole/
   - \${PWD}/pihole/etc-dnsmasq/:/etc/dnsmasq.d/
  dns:
   - 9.9.9.9
   - 8.8.8.8
   - 8.8.4.4
   - 1.1.1.1
   - 1.0.0.1
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.pihole.entrypoints=plainhttp'
    - 'traefik.http.services.pihole.loadbalancer.server.port=80'
    - 'traefik.http.routers.pihole.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.pihole-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.pihole.middlewares=pihole-force-secure'
    - 'traefik.http.routers.pihole.service=pihole'
    - 'traefik.http.routers.pihole-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.pihole-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.pihole-https.service=pihole'
    - 'traefik.http.routers.pihole-https.tls=true'
    - 'traefik.http.services.pihole-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=Pihole DNS-based adblocker'

# End pihole service section

`,
}
