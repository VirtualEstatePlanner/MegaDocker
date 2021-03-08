/** @format */

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

export const swarmpitServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30027,
  webInterfaceHostnames: [`swarmpit`],
  miteString: `

#Begin Swarmpit Service Section

 swarmpit-app:
  image: swarmpit/swarmpit
  environment:
   - SWARMPIT_DB=http://[[MOBNAME]]_swarmpit-couchbase-db:5984
   - SWARMPIT_INFLUXDB=http://[[MOBNAME]]_swarmpit-influx-db:8086
  volumes:
   - ./logs/swarmpit:/loglocation
   - /var/run/docker.sock:/var/run/docker.sock:ro
  networks:
   - traefik
   - swarmpit
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.swarmpit.entrypoints=plainhttp'
    - 'traefik.http.services.swarmpit.loadbalancer.server.port=8080'
    - 'traefik.http.routers.swarmpit.rule=Host("swarmpit.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.swarmpit-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.swarmpit.middlewares=swarmpit-force-secure'
    - 'traefik.http.routers.swarmpit.service=swarmpit'
    - 'traefik.http.routers.swarmpit-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.swarmpit-https.rule=Host("swarmpit.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.swarmpit-https.service=swarmpit'
    - 'traefik.http.routers.swarmpit-https.tls=true'
    - 'traefik.http.services.swarmpit-https.loadbalancer.server.port=8080'
    - 'com.MegaDocker.description=Swarmpit App - a web GUI for Docker Swarm.'
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

 swarmpit-couchbase-db:
  image: couchdb:2.3.0
  volumes:
   - ./logs/swarmpit:/loglocation
   - ./swarmpit/couchbase-data:/opt/couchdb/data
  networks:
   - swarmpit
  deploy:
   labels:
    - 'com.MegaDocker.description=Swarmpit Couchbase - Swarmpit couchdb database'
   resources:
    limits:
     cpus: '0.30'
     memory: 256M
    reservations:
     cpus: '0.15'
     memory: 128M

 swarmpit-influx-db:
  image: influxdb
  volumes:
   - ./logs/swarmpit:/loglocation
   - ./swarmpit/influx-data:/var/lib/influxdb
  networks:
   - swarmpit
  deploy:
   labels:
    - 'com.MegaDocker.description=Swarmpit Influx - Swarmpit influx database'
   restart_policy:
    condition: on-failure
   resources:
    limits:
     cpus: '0.60'
     memory: 512M
    reservations:
     cpus: '0.30'
     memory: 128M

 swarmpit-agent:
  image: swarmpit/agent
  environment:
   - DOCKER_API_VERSION=1.35
  volumes:
   - ./logs/swarmpit:/loglocation
   - /var/run/docker.sock:/var/run/docker.sock:ro
  networks:
   - swarmpit
  deploy:
   restart_policy:
    condition: on-failure
   mode: global
   labels:
    - 'swarmpit.agent=true'
    - 'com.MegaDocker.description=Swarmpit Agent - Swarmpit event monitoring daemon'
   resources:
    limits:
     cpus: '0.10'
     memory: 64M
    reservations:
     cpus: '0.05'
     memory: 32M

#End Swarmpit Service Section

`,
}
