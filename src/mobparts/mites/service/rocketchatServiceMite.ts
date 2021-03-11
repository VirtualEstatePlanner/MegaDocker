/** @format */

//  serviceMite.ts
//  MegaDocker
//  Service Mite for RocketChat
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [`rocketchat`]

export const rocketchatServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30025,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin Rocketchat Service Section

 rocketchat-mongo:
  image: mongo
  networks:
   - rocketchat
  command: mongod --replSet rocketchat
  volumes:
   - \${PWD}/rocketchat/database:/data/db
   - \${PWD}/rocketchat/dump:/dump
  deploy:
   restart_policy:
    condition: any

 rocketchat-mongo-replicator:
  image: mongo
  networks:
   - rocketchat
  command: 'mongo [[MOBNAME]]_rocketchat-mongo/rocketchat --eval "rs.initiate({ _id: ''rocketchat'', members: [ { _id: 0, host: ''[[MOBNAME]]_rocketchat-mongo:27017'' } ]})"'
  deploy:
   restart_policy:
    condition: on-failure

 rocketchat-app:
  image: rocketchat/rocket.chat
  command: node main.js
  networks:
   - ldap
   - rocketchat
   - traefik
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.rocketchat.entrypoints=plainhttp'
    - 'traefik.http.services.rocketchat.loadbalancer.server.port=3000'
    - 'traefik.http.routers.rocketchat.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.rocketchat-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.rocketchat.middlewares=rocketchat-force-secure'
    - 'traefik.http.routers.rocketchat.service=rocketchat'
    - 'traefik.http.routers.rocketchat-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.rocketchat-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.rocketchat-https.service=rocketchat'
    - 'traefik.http.routers.rocketchat-https.tls=true'
    - 'traefik.http.services.rocketchat-https.loadbalancer.server.port=3000'
    - 'com.MegaDocker.description=RockeChat team management software'
  volumes:
   - \${PWD}/rocketchat/uploads:/app/uploads
  environment:
   - PORT=3000
   - ROOT_URL=https://rocketchat.[[PRIMARYDOMAIN]]
   - MONGO_URL=mongodb://[[MOBNAME]]_rocketchat-mongo:27017/rocketchat
   - MONGO_OPLOG_URL=mongodb://[[MOBNAME]]_rocketchat-mongo:27017/local

 rocketchat-hubot:
  image: rocketchat/hubot-rocketchat:latest
  deploy:
   restart_policy:
    condition: any
  environment:
   - ROCKETCHAT_URL=[[MOBNAME]]_rocketchat-app:3000
   - ROCKETCHAT_ROOM=GENERAL
   - ROCKETCHAT_USER=[[ROCKETCHATBOTUSERNAME]]
   - ROCKETCHAT_PASSWORD=[[ROCKETCHATBOTPASSWORD]]
   - BOT_NAME=bot
  # you can add more scripts as you'd like here, they need to be installable by npm
   - EXTERNAL_SCRIPTS=hubot-help,hubot-seen,hubot-links,hubot-diagnostics
  volumes:
   - \${PWD}/rocketchat/hubot-scripts:/home/hubot/scripts
# this is used to expose the hubot port for notifications on the host on port 3001, e.g. for hubot-jenkins-notifier, and should be forwarded through traefik over tcp
  ports:
   - 3001:8080

# End Rocketchat Service Section

`,
}
