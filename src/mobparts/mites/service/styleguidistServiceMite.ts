import { IMite } from '../../../interfaces/IMite';

export const styleguidistServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2023,
  miteString: `

# Begin Styleguidist Service Section

 styleguidist:
  image: georgegeorgulasiv/component-library
  volumes:
   - ./styleguidist/src:/app/src
   - ./styleguidist/typings:/app/typings
  networks:
   - styleguidist
   - traefik
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.styleguidist.entrypoints=plainhttp'
    - 'traefik.http.services.styleguidist.loadbalancer.server.port=6060'
    - 'traefik.http.routers.styleguidist.rule=Host("style.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.styleguidist-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.styleguidist.middlewares=styleguidist-force-secure'
    - 'traefik.http.routers.styleguidist.service=styleguidist'
    - 'traefik.http.routers.styleguidist-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.styleguidist-https.rule=Host("style.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.styleguidist-https.service=styleguidist'
    - 'traefik.http.routers.styleguidist-https.tls=true'
    - 'traefik.http.services.styleguidist-https.loadbalancer.server.port=6060'
    - 'com.MegaDocker.description=Styleguidist - a web sandbox for a react component library.'

# End Styleguidist Service Section

`,
};
