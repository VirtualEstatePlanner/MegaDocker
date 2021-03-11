/** @format */

//  drupalServiceMite.ts
//  MegaDocker
//  Network Mite for Drupal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [`books`]

export const booksServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30000,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin Books Service Section

 books:
  image: linuxserver/lazylibrarian:latest
  networks:
   - books
   - traefik
  volumes:
   - \${PWD}/media/books-config:/config
   - \${PWD}/media/books-data:/media
  environment:
   - PUID=$HOSTUSERID
   - PGID=$HOSTUSERGID
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.books.entrypoints=plainhttp'
    - 'traefik.http.services.books.loadbalancer.server.port=5299'
    - 'traefik.http.routers.books.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.books-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.books.middlewares=books-force-secure'
    - 'traefik.http.routers.books.service=books'
    - 'traefik.http.routers.books-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.books-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.books-https.service=books'
    - 'traefik.http.routers.books-https.tls=true'
    - 'traefik.http.services.books-https.loadbalancer.server.port=5299'
    - 'com.MegaDocker.description=LazyLibrarian - a books search tool'

# End Books Service Section 

`,
}
