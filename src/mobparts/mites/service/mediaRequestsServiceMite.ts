//  serviceMite.ts
//  MegaDocker
//  Service Mite for Owncloud
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const mediaRequestsServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2014,
  miteString: `

# Begin Media Requests Service Sections

 requests:
  image: linuxserver/ombi
  volumes:
   - ./media/requests-config:/config
  networks:
   - books
   - comics
   - movies
   - music
   - traefik
   - tv
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.requests.entrypoints=plainhttp'
    - 'traefik.http.services.requests.loadbalancer.server.port=80'
    - 'traefik.http.routers.requests.rule=Host("requests.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.requests-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.requests.middlewares=requests-force-secure'
    - 'traefik.http.routers.requests.service=requests'
    - 'traefik.http.routers.requests-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.requests-https.rule=Host("requests.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.requests-https.service=requests'
    - 'traefik.http.routers.requests-https.tls=true'
    - 'traefik.http.services.requests-https.loadbalancer.server.port=443'
    - 'com.MegaDocker.description=Ombi - media download request app'

 torrent-indexer:
  image: linuxserver/jackett
  volumes:
   - ./media/torrent-indexer-config:/config
  networks:
   - books
   - comics
   - movies
   - music
   - traefik
   - tv
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.torrent-indexer.entrypoints=plainhttp'
    - 'traefik.http.services.torrent-indexer.loadbalancer.server.port=9117'
    - 'traefik.http.routers.torrent-indexer.rule=Host("torrent-indexer.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.torrent-indexer-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.torrent-indexer.middlewares=torrent-indexer-force-secure'
    - 'traefik.http.routers.torrent-indexer.service=torrent-indexer'
    - 'traefik.http.routers.torrent-indexer-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.torrent-indexer-https.rule=Host("torrent-indexer.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.torrent-indexer-https.service=torrent-indexer'
    - 'traefik.http.routers.torrent-indexer-https.tls=true'
    - 'traefik.http.services.torrent-indexer-https.loadbalancer.server.port=9117'
    - 'com.MegaDocker.description=Jackett - torrent indexer'

 torrent:
  image: linuxserver/qbittorrent
  volumes:
   - ./media/torrent-config:/config
   - ./media/torrent-downloads:/downloads
   - ./media/books-data:/media/books
   - ./media/comics-data:/media/comics
   - ./media/movies-data:/media/movies
   - ./media/music-data:/media/music
   - ./media/tv-data:/media/tv
   - /Volumes/Drobo/Fileshare/plex:/plex
  environment:
   - PUID=$HOSTUSERID
   - PGID=$HOSTUSERGID
   - UMASK_SET=022
   - WEBUI_PORT=8080
   - TZ=$HOSTTIMEZONE
  networks:
   - books
   - comics
   - movies
   - music
   - traefik
   - tv
  ports:
   - 6881:6881
   - 6881:6881/udp
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.torrent.entrypoints=plainhttp'
    - 'traefik.http.services.torrent.loadbalancer.server.port=8080'
    - 'traefik.http.routers.torrent.rule=Host("torrent.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.torrent-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.torrent.middlewares=torrent-force-secure'
    - 'traefik.http.routers.torrent.service=torrent'
    - 'traefik.http.routers.torrent-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.torrent-https.rule=Host("torrent.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.torrent-https.service=torrent'
    - 'traefik.http.routers.torrent-https.tls=true'
    - 'traefik.http.services.torrent-https.loadbalancer.server.port=8080'
    - 'com.MegaDocker.description=ruTorrent - torrent downloader'

 newsgroups:
  image: linuxserver/nzbget
  volumes:
   - ./media/newsgroups-config:/config
   - ./media/newsgroups-downloads:/media
  networks:
   - books
   - comics
   - movies
   - music
   - traefik
   - tv
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.newsgroups.entrypoints=plainhttp'
    - 'traefik.http.services.newsgroups.loadbalancer.server.port=80'
    - 'traefik.http.routers.newsgroups.rule=Host("newsgroups.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.newsgroups-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.newsgroups.middlewares=newsgroups-force-secure'
    - 'traefik.http.routers.newsgroups.service=newsgroups'
    - 'traefik.http.routers.newsgroups-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.newsgroups-https.rule=Host("newsgroups.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.newsgroups-https.service=newsgroups'
    - 'traefik.http.routers.newsgroups-https.tls=true'
    - 'traefik.http.services.newsgroups-https.loadbalancer.server.port=443'
    - 'com.MegaDocker.description=NZBGet - newsgroups downloader'

 newsgroup-indexer:
  image: linuxserver/hydra2
  volumes:
   - ./media/newsgroups-indexer-config:/config
  networks:
   - books
   - comics
   - movies
   - music
   - traefik
   - tv
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.newsgroup-indexer.entrypoints=plainhttp'
    - 'traefik.http.services.newsgroup-indexer.loadbalancer.server.port=80'
    - 'traefik.http.routers.newsgroup-indexer.rule=Host("newsgroup-indexer.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.newsgroup-indexer-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.newsgroup-indexer.middlewares=newsgroup-indexer-force-secure'
    - 'traefik.http.routers.newsgroup-indexer.service=newsgroup-indexer'
    - 'traefik.http.routers.newsgroup-indexer-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.newsgroup-indexer-https.rule=Host("newsgroup-indexer.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.newsgroup-indexer-https.service=newsgroup-indexer'
    - 'traefik.http.routers.newsgroup-indexer-https.tls=true'
    - 'traefik.http.services.newsgroup-indexer-https.loadbalancer.server.port=443'
    - 'com.MegaDocker.description=NZBGet - newsgroup indexer'

# End Media Requests Service Section

`,
};
