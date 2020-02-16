//  serviceMite.ts
//  MegaDocker
//  Network Mite for $SOMEMANIKIN
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';
import { mobFolderPath } from '../../memories/mobFolderPath';
import { mobName } from '../../memories/mobName';
import { primaryDomain } from '../../memories/primaryDomain';
import { secondaryDomain } from '../../memories/secondaryDomain';

export const elkServiceMite: IMite = {
  type: 'Service',
  miteIndex: 998,
  miteString: `

  #Begin ELK Service Section
  
   elasticsearch:
    image: elasticsearch
    networks:
     - elk
    volumes:
     - ${mobFolderPath}/ELK/Elasticsearch:/usr/share/elasticsearch/data
    ports:
     - 9200:9200
     - 9300:9300
  
   kibana:
    image: kibana
    networks:
     - traefik
     - elk
     - ldap
    environment:
     - SERVER_NAME=${mobName}_elasticsearch:9200
    depends_on:
     - elasticsearch
    deploy:
     labels:
     - "traefik.backend=kibana"
     - "traefik.docker.network=traefik"
     - "traefik.enable=true"
     - "traefik.frontend.rule=Host:kibana.${primaryDomain.value},kibana.${secondaryDomain.value}"
     - "traefik.port=5601"
  
   logstash:
    image: logstash
    volumes:
     - ${mobFolderPath}/ELK/Logstash/config:/config-dir
    networks:
     - elk
    command: logstash -f /config-dir/logstash.conf
    depends_on:
     - elasticsearch
  
  #End ELK Service Section
  
  `
};
