import { IMite } from '../../../interfaces/IMite';

export const skoposServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2015,
  miteString: `
  
# Begin Skopos Service Section

 skopos:
  image: opsani/skopos:edge
  networks:
   - traefik
  environment:
   - skstkn=dflt:339650468.1517278337
  volumes:
   - ./logs/skopos:/var/log/skopos
   - /var/run/docker.sock:/var/run/docker.sock:rw
  deploy:
   replicas: 1
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.skopos.entrypoints=plainhttp'
    - 'traefik.http.routers.skopos.rule=Host("skopos.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.skopos-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.skopos.middlewares=skopos-force-secure'
    - 'traefik.http.routers.skopos-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.skopos-https.rule=Host("skopos.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.services.skopos.loadbalancer.server.port=8100'
    - 'traefik.http.services.skopos-https.loadbalancer.server.port=8100'
    - 'traefik.http.routers.skopos-https.service=skopos'
    - 'traefik.http.routers.skopos-https.tls=true'
    - 'com.MegaDocker.description=Swarmpit App - a web GUI for Docker Swarm.'

# End Skopos Service Section

`,
};
