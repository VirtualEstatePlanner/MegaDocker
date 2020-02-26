import { IMite } from '../../../interfaces/IMite';

export const swarmpitServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2016,
  miteString: `

#Begin Swarmpit Service Section

 swarmpit-app:
  image: swarmpit/swarmpit
  depends_on:
   - swarmpit-db
  volumes:
   - /var/run/docker.sock:/var/run/docker.sock
  networks:
   - traefik
   - swarmpit
  environment:
   - SWARMPIT_DB=http://[[MOBNAME]]_swarmpit-db:5984
  deploy:
   resources:
    limits:
     cpus: '0.50'
     memory: 1024M
    reservations:
     cpus: '0.25'
     memory: 512M
   placement:
    constraints:
     - node.role == manager
   labels:
    - "traefik.enable=true"
    - "traefik.port=8080"
    - "traefik.backend=swarmpit"
    - "traefik.docker.network=[[MOBNAME]]_traefik"
    - "traefik.frontend.rule=Host:swarmpit.[[PRIMARYDOMAIN]],swarmpit.[[SECONDARYDOMAIN]]"
    - "com.MegaDocker.description=Swarmpit - a web GUI for Docker Swarm."
   restart_policy:
    condition: on-failure
  
 swarmpit-db:
  image: couchdb
  volumes:
   - ./swarmpit/database:/opt/couchdb/data
  networks:
   - swarmpit
  deploy:
   labels:
    - "com.MegaDocker.description=CouchDB Database - stores Swarmpit data"
   resources:
    limits:
     cpus: '0.50'
     memory: 1024M
    reservations:
     cpus: '0.25'
     memory: 512M
   restart_policy:
    condition: on-failure

 swarmpit-eye:
  image: swarmpit/agent
  networks:
   - swarmpit
  volumes:
   - /var/run/docker.sock:/var/run/docker.sock:ro
  deploy:
   labels:
    - "com.MegaDocker.description=Event Collector - Swarmpit event monitoring daemon"
   mode: global
   resources:
    limits:
     cpus: '0.10'
     memory: 64M
    reservations:
     cpus: '0.05'
     memory: 32M
   restart_policy:
    condition: on-failure

#End Swarmpit Service Section

`
};
