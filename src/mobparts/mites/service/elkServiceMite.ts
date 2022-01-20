/** @format */

//  elkServiceMite.ts
//  MEGADocker
//  Service Mite for Elk
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/miteTypeInterfaces/ITraefikedServiceMite'

const hostnames: string[] = [`kibana`]

export const elkServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30004,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin ELK Service Section
 
 elasticsearch:
  image: elastic/elasticsearch:7.12.0
  environment:
   - bootstrap.memory_lock=true
   - cluster.name="[[MOBNAME]]-docker-cluster"
   - discovery.type=single-node
   - 'ES_JAVA_OPTS=-Xms512m -Xmx512m'
   - ES_PATH_CONF=/usr/share/elasticsearch/configs
   - network.host=0.0.0.0
   - path.data=/usr/share/elasticsearch/data
   - path.logs=/usr/share/elasticsearch/logs
  networks:
   - elk
  volumes:
   - \${PWD}/logs/elk-elasticsearch:/loglocation
   - \${PWD}/elk/elasticsearch-config:/usr/share/elasticsearch/configs
   - \${PWD}/elk/elasticsearch-data:/usr/share/elasticsearch/data
   - \${PWD}/elk/logfiles:/usr/share/elasticsearch/logs

 filebeat:
  image: elastic/filebeat:7.12.0
  command: filebeat run --modules traefik
  environment:
   - 'ES_JAVA_OPTS=-Xms512m -Xmx512m'
   - ES_PATH_CONF=/usr/share/elasticsearch/configs
   - bootstrap.memory_lock=true
   - discovery.type=single-node
  networks:
   - elk
  volumes:
  - ./logs/elk-filebeats:/loglocation
  - ./elk/filebeat-config/filebeat.yml:/usr/share/filebeat/filebeat.yml:ro
  - ./elk/filebeat-modules:/usr/share/filebeat/modules.d
  - /var/lib/docker/containers:/var/lib/docker/containers:ro
  - /var/run/docker.sock:/var/run/docker.sock

 kibana:
  image: elastic/kibana:7.12.0
  networks:
   - traefik
   - elk
  environment:
   - SERVER_NAME=[[MOBNAME]]_elasticsearch:9200
  volumes:
   - \${PWD}/logs/elk-kibana:/loglocation
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.kibana.entrypoints=plainhttp'
    - 'traefik.http.services.kibana.loadbalancer.server.port=5601'
    - 'traefik.http.routers.kibana.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.kibana-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.kibana.middlewares=kibana-force-secure'
    - 'traefik.http.routers.kibana.service=kibana'
    - 'traefik.http.routers.kibana-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.kibana-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.kibana-https.service=kibana'
    - 'traefik.http.routers.kibana-https.tls=true'
    - 'traefik.http.services.kibana-https.loadbalancer.server.port=5601'
    - 'com.MegaDocker.description=Kibana data visualization dashboard'
   placement:
    constraints:
     - node.role == manager

# End ELK Service Section

`
}
