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
  image: elasticsearch
  networks:
   - elk
  volumes:
   - ./elk/elasticsearch:/usr/share/elasticsearch/data
#  ports:
#   - 9200:9200
#   - 9300:9300

 kibana:
  image: kibana
  networks:
   - traefik
   - elk
   - ldap
  environment:
   - SERVER_NAME=[[MOBNAME]]_elasticsearch:9200
  depends_on:
   - elasticsearch
  deploy:
   labels:
   - "traefik.backend=kibana"
   - "traefik.docker.network=[[MOBNAME]]_traefik"
   - "traefik.enable=true"
   - "traefik.frontend.rule=Host:kibana.[[PRIMARYDOMAIN]],kibana.[[SECONDARYDOMAIN]]"
   - "traefik.port=5601"

 logstash:
  image: logstash
  volumes:
   - ./elk/logstash/config:/config-dir
  networks:
   - elk
  command: logstash -f /config-dir/logstash.conf
  depends_on:
   - elasticsearch

# End ELK Service Section

`
};
