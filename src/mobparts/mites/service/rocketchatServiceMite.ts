//  serviceMite.ts
//  MegaDocker
//  Network Mite for $SOMEMANIKIN
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';
import { mobFolderPath } from '../../memories/mobFolderPath';
import { primaryDomain } from '../../memories/primaryDomain';
import { mobName } from '../../memories/mobName';
import { secondaryDomain } from '../../memories/secondaryDomain';
import { rocketchatBotUsername } from '../../memories/rocketchatBotUsername';
import { rocketchatBotPassword } from '../../memories/rocketchatBotPassword';

export const rocketchatServiceMite: IMite = {
  type: 'Service',
  miteIndex: 998,
  miteString: `

  #Begin Rocketchat Service Section
  
   rocketchat:
    image: rocketchat/rocket.chat
    networks:
     - traefik
     - rocketchat
     - ldap
    volumes:
     - ${mobFolderPath}/RocketChat/uploads:/app/uploads
    environment:
     - PORT=3000
     - ROOT_URL=http://rocketchat.${primaryDomain.value}:3000
     - MONGO_URL=mongodb://${mobName}_rocketmongo:27017/rocketchat
     - MONGO_OPLOG_URL=mongodb://${mobName}_rocketmongo:27017/local
     - MAIL_URL=smtp://smtp.email
    depends_on:
     - rocketmongo
    deploy:
     restart_policy:
      condition: on-failure
     labels:
      - "traefik.backend=rocketchat"
      - "traefik.docker.network=traefik"
      - "traefik.enable=true"
      - "traefik.frontend.rule=Host:rocketchat.${primaryDomain.value},rocketchat.${secondaryDomain.value}"
      - "traefik.port=3000"
  
   rocketmongo:
    image: mongo
    networks:
     - rocketchat
    deploy:
     restart_policy:
      condition: on-failure
    volumes:
     - ${mobFolderPath}/RocketChat/database:/data/db
     - ${mobFolderPath}/RocketChat/db-dump:/dump
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
     - ROCKETCHAT_URL=${mobName}_rocketchat:3000
     - ROCKETCHAT_ROOM=GENERAL
     - ROCKETCHAT_USER=${rocketchatBotUsername.value}
     - ROCKETCHAT_PASSWORD=${rocketchatBotPassword.value}
     - BOT_NAME=bot
     - EXTERNAL_SCRIPTS=hubot-help,hubot-seen,hubot-links,hubot-diagnostics
    depends_on:
     - rocketchat
    volumes:
     - ${mobFolderPath}/Rocketchat/hubot/scripts:/home/hubot/scripts
    ports:
     - 3001:8080
  
  #End Rocketchat Service Section
  
  `
};
