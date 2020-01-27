import { IMite } from '../../../interfaces/IMite';
import { primaryDomain } from '../../memories/primaryDomain';
import { secondaryDomain } from '../../memories/secondaryDomain';

export const skoposServiceMite: IMite = {
  type: 'Service',
  miteIndex: 40,
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
    - "traefik.enable=true"
    - "traefik.port=8100"
    - "traefik.backend=skopos"
    - "traefik.frontend.rule=Host:skopos.${primaryDomain.value},skopos.${secondaryDomain.value}"
    - "com.MegaDocker.description=Skopos - an application discovery and CI/CD for Docker Swarm Tool"

#End Skopos Service Section

`
};
