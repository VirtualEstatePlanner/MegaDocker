//  elkServiceMite.ts
//  MegaDocker
//  Service Mite for Elk
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const elkServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2002,
  miteString: `

# Begin ELK Service Section
 
 elasticsearch:
  image: elasticsearch:7.6.0
  environment:
   - 'ES_JAVA_OPTS=-Xms512m -Xmx512m'
   - ES_PATH_CONF=/usr/share/elasticsearch/configs
   - bootstrap.memory_lock=true
   - discovery.type=single-node
  networks:
   - elk
  volumes:
   - ./elk/elasticsearch-config:/usr/share/elasticsearch/configs
   - ./elk/elasticsearch-data:/usr/share/elasticsearch/data
   - ./elk/elasticsearch-logs:/usr/share/elasticsearch/logs

 kibana:
  image: kibana:7.6.0
  networks:
   - traefik
   - elk
  environment:
   - SERVER_NAME=[[MOBNAME]]_elasticsearch:9200
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.kibana.entrypoints=plainhttp'
    - 'traefik.http.services.kibana.loadbalancer.server.port=5601'
    - 'traefik.http.routers.kibana.rule=Host("kibana.[[PRIMARYDOMAIN]]") || Host("kibana.[[SECONDARYDOMAIN]]")'
    - 'traefik.http.middlewares.kibana-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.kibana.middlewares=kibana-force-secure'
    - 'traefik.http.routers.kibana.service=kibana'
    - 'traefik.http.routers.kibana-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.kibana-https.rule=Host("kibana.[[PRIMARYDOMAIN]]") || Host("kibana.[[SECONDARYDOMAIN]]")'
    - 'traefik.http.routers.kibana-https.service=kibana'
    - 'traefik.http.routers.kibana-https.tls=true'
    - 'traefik.http.services.kibana-https.loadbalancer.server.port=5601'
    - 'com.MegaDocker.description=Kibana data visualization dashboard'
   placement:
    constraints:
     - node.role == manager

 logstash:
  image: logstash:7.6.0
  volumes:
   - ./elk/logstash-logs:/usr/share/logstash/logfiles
   - ./elk/logfiles:/usr/share/logstash
  networks:
   - elk
  command: logstash -f /usr/share/logstash/logstash.conf
  depends_on:
   - elasticsearch

# End ELK Service Section

`
};
