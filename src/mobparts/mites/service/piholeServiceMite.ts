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
   - [[MOBNAME]]_traefik
  ports:
   - 53:53/tcp
   - 53:53/udp
   - 80:80/tcp
  environment:
   TZ: "America/New York"
   WEBPASSWORD: "[[PIHOLEPASSWORD]]"
  volumes:
   - ~/Documents/MegaDocker/[[MOBNAME]]/pihole/etc-pihole/:/etc/pihole/
   - ~/Documents/MegaDocker/[[MOBNAME]]/pihole/etc-dnsmasq/:/etc/dnsmasq.d/
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
    - "traefik.enable=true"
    - "traefik.backend=pihole"
    - "traefik.frontend.rule=Host:pihole.[[PRIMARYDOMAIN]], pihole.[[SECONDARYDOMAIN]]"
    - "traefik.docker.network=[[MOBNAME]]_traefik"
    - "traefik.port=80"
 
 #End pihole service section
 `
};
