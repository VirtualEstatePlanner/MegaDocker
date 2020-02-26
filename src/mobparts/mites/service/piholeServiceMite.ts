//  piholeServiceMite.ts
//  MegaDocker
//  Service Mite for Pihole
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const piholeServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2011,
  miteString: `
  
#Begin pihole service section

 pihole:
  image: pihole/pihole:latest
  networks:
   - traefik
  ports:
   - 53:53/tcp
   - 53:53/udp
  environment:
   TZ: "America/New York"
   WEBPASSWORD: "[[PIHOLEPASSWORD]]"
  volumes:
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
   labels:
    - "traefik.enable=true"
    - "traefik.docker.network=[[MOBNAME]]_traefik"
    - "traefik.http.routers.pihole.rule=Host('pihole.[[PRIMARYDOMAIN]]')"
    - "traefik.http.services.pihole.loadbalancer.server.port=80"
    - "traefik.http.routers.api.entrypoints=web"
    - "traefik.http.routers.api.entrypoints=websecure"
 
 #End pihole service section
 `
};
