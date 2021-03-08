/** @format */

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [`style`]

export const styleguidistServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30026,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin Styleguidist Service Section

 styleguidist:
  image: georgegeorgulasiv/component-library
  volumes:
   - ./styleguidist/components:/app/src/shared/components
   - ./styleguidist/typings:/app/src/shared/typings
   - ./styleguidist/interfaces:/app/src/shared/interfaces
   - ./styleguidist/assets:/app/src/shared/assets
   - ./styleguidist/objects:/app/src/shared/objects
   - ./styleguidist/configs/package.json:/app/package.json
   - ./styleguidist/configs/styleguide.config.js:/app/styleguide.config.js
   - ./styleguidist/configs/tsconfig.json:/app/tsconfig.json
   - ./styleguidist/configs/webpack.config.js:/app/webpack.config.js
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
    - 'traefik.http.routers.styleguidist.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.styleguidist-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.styleguidist.middlewares=styleguidist-force-secure'
    - 'traefik.http.routers.styleguidist.service=styleguidist'
    - 'traefik.http.routers.styleguidist-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.styleguidist-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.styleguidist-https.service=styleguidist'
    - 'traefik.http.routers.styleguidist-https.tls=true'
    - 'traefik.http.services.styleguidist-https.loadbalancer.server.port=6060'
    - 'com.MegaDocker.description=Styleguidist - a web sandbox for a react component library.'

# End Styleguidist Service Section

`,
}
