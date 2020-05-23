//  drupalServiceMite.ts
//  MegaDocker
//  Network Mite for Drupal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const booksServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2000,
  miteString: `

# Begin Books Service Section

 books:
  image: linuxserver/lazylibrarian:latest
  networks:
   - books
   - traefik
  volumes:
   - ./media/books-config:/config
   - ./media/content:/media
  environment:
   - GUID=501
   - PUID=501
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.books.entrypoints=plainhttp'
    - 'traefik.http.services.books.loadbalancer.server.port=80'
    - 'traefik.http.routers.books.rule=Host("books.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.books-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.books.middlewares=books-force-secure'
    - 'traefik.http.routers.books.service=books'
    - 'traefik.http.routers.books-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.books-https.rule=Host("books.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.books-https.service=books'
    - 'traefik.http.routers.books-https.tls=true'
    - 'traefik.http.services.books-https.loadbalancer.server.port=443'
    - 'com.MegaDocker.description=LazyLibrarian - a books search tool'

# End Books Service Section

`,
};
