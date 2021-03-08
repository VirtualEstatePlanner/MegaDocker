/** @format */

//  piholeServiceMite.ts
//  MegaDocker
//  Service Mite for Pihole
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

export const piholeServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30022,
  webInterfaceHostnames: [`pihole`],
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
   TZ=$HOSTTIMEZONE
   WEBPASSWORD=[[PIHOLEPASSWORD]]
  volumes:
   - ./logs/pihole:/loglocation
   - ./pihole/etc-pihole/:/etc/pihole/
   - ./pihole/etc-dnsmasq/:/etc/dnsmasq.d/
  dns:
   - 9.9.9.9
   - 8.8.8.8
   - 8.8.4.4
   - 1.1.1.1
   - 1.0.0.1
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.pihole.entrypoints=plainhttp'
    - 'traefik.http.services.pihole.loadbalancer.server.port=80'
    - 'traefik.http.routers.pihole.rule=Host("pihole.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.pihole-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.pihole.middlewares=pihole-force-secure'
    - 'traefik.http.routers.pihole.service=pihole'
    - 'traefik.http.routers.pihole-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.pihole-https.rule=Host("pihole.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.pihole-https.service=pihole'
    - 'traefik.http.routers.pihole-https.tls=true'
    - 'traefik.http.services.pihole-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=Pihole DNS-based adblocker'

# End pihole service section
`,
}
