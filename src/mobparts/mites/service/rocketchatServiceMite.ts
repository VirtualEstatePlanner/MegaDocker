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
    image: rocketchat/rocket.chat
    networks:
     - traefik
     - rocketchat
     - ldap
    volumes:
     - ~/Documents/MegaDocker/[[MOBNAME]]/RocketChat/uploads:/app/uploads
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
      - "traefik.backend=rocketchat"
      - "traefik.docker.network=[[MOBNAME]]_traefik"
      - "traefik.enable=true"
      - "traefik.frontend.rule=Host:rocketchat.[[PRIMARYDOMAIN]],rocketchat.[[SECONDARYDOMAIN]]"
      - "traefik.port=3000"
  
   rocketmongo:
    image: mongo
    networks:
     - rocketchat
    deploy:
     restart_policy:
      condition: on-failure
    volumes:
     - ~/Documents/MegaDocker/[[MOBNAME]]/rocketchat/database:/data/db
     - ~/Documents/MegaDocker/[[MOBNAME]]/rocketChat/db-dump:/dump
    command: mongod --smallfiles --oplogSize 128 --replSet rs0 --storageEngine=mmapv1
  
   mongo-init-replica:
    image: mongo
    command: 'mongo mongo/rocketchat --eval "rs.initiate({ _id: ''rs0'', members: [ { _id: 0, host: ''localhost:27017'' } ]})"'
    depends_on:
     - rocketmongo
    networks:
     - rocketchat
  
   hubot:
    image: rocketchat/hubot-rocketchat
    networks:
     - rocketchat
    deploy:
     restart_policy:
      condition: on-failure
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
     - ~/Documents/MegaDocker/[[MOBNAME]]/rocketchat/hubot/scripts:/home/hubot/scripts
    ports:
     - 3001:8080
  
  #End Rocketchat Service Section
  
  `
};
