//  serviceMite.ts
//  MegaDocker
//  Service Mite for RocketChat
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const rocketchatServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2014,
  miteString: `

#Begin Rocketchat Service Section

 rocketchat:
  image: rocketchat/rocket.chat:latest
  command: > sh -c "for i in 'seq 1 30'; do node main.js && s=$$? && break || s=$$?; echo "Tried $$i times. Waiting 5 secs..."; sleep 5; done; (exit $$s)"
  networks:
   - traefik
   - rocketchat
   - ldap
  volumes:
   - ./rocketchat/uploads:/app/uploads
  environment:
   - PORT=3000
   - ROOT_URL=http://rocketchat.[[PRIMARYDOMAIN]]:3000
   - MONGO_URL=mongodb://[[MOBNAME]]_rocketmongo:27017/rocketchat
   - MONGO_OPLOG_URL=mongodb://[[MOBNAME]]_rocketmongo:27017/local
   - MAIL_URL=smtp://smtp.email
  depends_on:
   - rocketmongo
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.rocketchat.entrypoints=plainhttp'
    - 'traefik.http.services.rocketchat.loadbalancer.server.port=3000'
    - 'traefik.http.routers.rocketchat.rule=Host("rocketchat.[[PRIMARYDOMAIN]]") || Host("rocketchat.[[SECONDARYDOMAIN]]")'
    - 'traefik.http.middlewares.rocketchat-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.rocketchat.middlewares=rocketchat-force-secure'
    - 'traefik.http.routers.rocketchat.service=rocketchat'
    - 'traefik.http.routers.rocketchat-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.rocketchat-https.rule=Host("rocketchat.[[PRIMARYDOMAIN]]") || Host("rocketchat.[[SECONDARYDOMAIN]]")'
    - 'traefik.http.routers.rocketchat-https.service=rocketchat'
    - 'traefik.http.routers.rocketchat-https.tls=true'
    - 'traefik.http.services.rocketchat-https.loadbalancer.server.port=3000'
    - 'com.MegaDocker.description=RockeChat team management software'
   placement:
    constraints:
     - node.role == manager
 
 rocketmongo:
  image: mongo
  networks:
   - rocketchat
  deploy:
   restart_policy:
    condition: on-failure
  volumes:
   - ./rocketchat/database:/data/db
   - ./rocketchat/db-dump:/dump
  command: mongo --smallfiles --oplogSize 128 --replSet rs0 --storageEngine=mmapv1

 mongo-init-replica:
  image: mongo
#  command: 'mongo mongo/rocketchat --eval "rs.initiate({ _id: ''rs0'', members: [ { _id: 0, host: ''localhost:27017'' } ]})"'
  command: 'mongo mongo/rocketchat --eval "rs.initiate({ _id: ''rs0'', members: [ { _id: 0, host: ''[[MOBNAME]]_rocketmongo:27017'' } ]})"'
  depends_on:
   - rocketmongo
  networks:
   - rocketchat

 hubot:
  image: rocketchat/hubot-rocketchat
  networks:
   - rocketchat
  environment:
   - ROCKETCHAT_URL=[[MOBNAME]]_rocketchat:3000
   - ROCKETCHAT_ROOM=GENERAL
   - ROCKETCHAT_USER=[[ROCKETCHATBOTUSERNAME]]
   - ROCKETCHAT_PASSWORD=[[ROCKETCHATBOTPASSWORD]]
   - BOT_NAME=rocketchatbot
   - EXTERNAL_SCRIPTS=hubot-help,hubot-seen,hubot-links,hubot-diagnostics
  depends_on:
   - rocketchat
  volumes:
   - ./rocketchat/hubot/scripts:/home/hubot/scripts
  ports:
   - 3001:8080

#End Rocketchat Service Section

`
};
