//  drupalServiceMite.ts
//  MegaDocker
//  Network Mite for Drupal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const grocyServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2008,
  miteString: `

# Begin Grocy Service Section

 grocy-app:
  image: linuxserver/grocy
  networks:
   - grocy
   - traefik
  volumes:
   - ./grocy/app:/config
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.grocy-app.entrypoints=plainhttp'
    - 'traefik.http.services.grocy-app.loadbalancer.server.port=80'
    - 'traefik.http.routers.grocy-app.rule=Host("groceries.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.grocy-app-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.grocy-app.middlewares=grocy-app-force-secure'
    - 'traefik.http.routers.grocy-app.service=grocy-app'
    - 'traefik.http.routers.grocy-app-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.grocy-app-https.rule=Host("groceries.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.grocy-app-https.service=grocy-app'
    - 'traefik.http.routers.grocy-app-https.tls=true'
    - 'traefik.http.services.grocy-app-https.loadbalancer.server.port=443'
    - 'com.MegaDocker.description=Grocy Web Server - home Enterprise Resource Planning software'

 grocy-barcode-buddy:
  image: f0rc3/barcodebuddy-docker
  networks:
   - grocy
   - traefik
  volumes:
   - ./grocy/barcodebuddy:/config
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.grocy-barcode-buddy.entrypoints=plainhttp'
    - 'traefik.http.services.grocy-barcode-buddy.loadbalancer.server.port=80'
    - 'traefik.http.routers.grocy-barcode-buddy.rule=Host("barcodes.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.grocy-barcode-buddy-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.grocy-barcode-buddy.middlewares=grocy-barcode-buddy-force-secure'
    - 'traefik.http.routers.grocy-barcode-buddy.service=grocy-barcode-buddy'
    - 'traefik.http.routers.grocy-barcode-buddy-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.grocy-barcode-buddy-https.rule=Host("barcodes.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.grocy-barcode-buddy-https.service=grocy-barcode-buddy'
    - 'traefik.http.routers.grocy-barcode-buddy-https.tls=true'
    - 'traefik.http.services.grocy-barcode-buddy-https.loadbalancer.server.port=443'
    - 'com.MegaDocker.description=Barcode Buddy - barcode scanner add-on for grocy'

# End Grocy Service Section

`,
};
