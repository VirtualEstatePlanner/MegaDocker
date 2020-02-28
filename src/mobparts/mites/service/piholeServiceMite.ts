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
  
# Begin pihole service section

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
    - 'traefik.enable=true'
    - 'traefik.docker.network=[[MOBNAME]]_traefik'
    - 'traefik.http.services.pihole.loadbalancer.server.port=80'
    - 'traefik.http.routers.pihole.entrypoints=http, https'
    - 'traefik.http.routers.pihole-secured.entrypoints=https'
    - 'traefik.http.middlewares.forcesecure.redirectscheme.scheme=https'
    - 'traefik.http.routers.pihole.middlewares.auto-tls'
    - 'traefik.http.routers.pihole.rule=Host("pihole.[[PRIMARYDOMAIN]]") || Host("pihole.[[SECONDARYDOMAIN]]")'
    - 'traefik.http.routers.pihole-secured.rule=Host("pihole.[[PRIMARYDOMAIN]]") || Host("pihole.[[SECONDARYDOMAIN]]")'
    - 'traefik.http.routers.pihole.service=pihole'
    - 'traefik.http.routers.pihole-secured.tls.certresolver=wildcard'
    - 'traefik.http.routers.pihole-secured.tls.domains[0].main=[[PRIMARYDOMAIN]]'
    - 'traefik.http.routers.pihole-secured.tls.domains[0].sans=*.[[PRIMARYDOMAIN]]'
    - 'traefik.http.routers.pihole-secured.tls.domains[1].main=[[SECONDARYDOMAIN]]'
    - 'traefik.http.routers.pihole-secured.tls.domains[1].sans=*.[[SECONDARYDOMAIN]]'

# End pihole service section
`
};
