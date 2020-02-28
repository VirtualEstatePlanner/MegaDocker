import { IMite } from '../../../interfaces/IMite';

export const skoposServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2015,
  miteString: `
  
#Begin Skopos Service Section

 skopos:
  image: opsani/skopos:edge
  networks:
   - traefik
  environment:
   - skstkn=dflt:339650468.1517278337
  volumes:
   - /var/run/docker.sock:/var/run/docker.sock:rw
  deploy:
   replicas: 1
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.docker.network=[[MOBNAME]]_traefik'
    - 'traefik.http.routers.skopos.entrypoints=https'
    - 'traefik.http.routers.skopos.middlewares.forcesecure'
    - 'traefik.http.routers.skopos.rule=Host("skopos.[[PRIMARYDOMAIN]]") || Host("skopos.[[SECONDARYDOMAIN]]")'
#    - 'traefik.http.routers.skopos.tls.certresolver=wildcard'
    - 'traefik.http.services.skopos.loadbalancer.server.port=80'
    - 'traefik.http.routers.skopos.service=[[MOBNAME]]_skopos'

#End Skopos Service Section

`
};
