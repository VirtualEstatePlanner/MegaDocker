/** @format */

//  serviceMite.ts
//  MegaDocker
//  Service Mite for GitLab
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

export const gitlabServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30007,
  webInterfaceHostnames: [`gitlab`, `dockerhub`],
  miteString: `

# Begin GitLab Service Section

 gitlab:
  image: gitlab/gitlab-ce
  environment:
   - DB_ADAPTER=postgresql
   - DB_HOST=[[MOBNAME]]_gitlab-postgres
   - DB_PORT=5432
   - DB_USER=[[GITLABPOSTGRESUSER]]
   - DB_PASS=[[GITLABPOSTGRESPASSWORD]]
   - DB_NAME=[[MOBNAME]]_gitlabhq_production
   - REDIS_HOST=[[MOBNAME]]_gitlab-redis
   - REDIS_PORT=63679
   - TZ=$HOSTTIMEZONE
   - GITLAB_TIMEZONE=New York
   - GITLAB_HTTPS=true
   - SSL_SELF_SIGNED=false
   - GITLAB_HOST=gitlab.[[PRIMARYDOMAIN]]
   - GITLAB_REGISTRY_ENABLED=true
   - GITLAB_REGISTRY_HOST=dockerhub.[[PRIMARYDOMAIN]]
   - GITLAB_REGISTRY_API_URL=http://dockerhub.[[PRIMARYDOMAIN]]:5000
   - GITLAB_ROOT_PASSWORD=[[GITLABROOTPASSWORD]]
   - GITLAB_ROOT_EMAIL=[[GITLABROOTEMAIL]]
   - GITLAB_SSH_PORT=22
   - EXTERNAL_URL=http://gitlab.[[PRIMARYDOMAIN]]
   - LDAP_ENABLED=true
   - LDAP_HOST=[[MOBNAME]]_ldap.[[PRIMARYDOMAIN]]
   - LDAP_PORT=636
   - LDAP_UID=email
   - LDAP_METHOD=start_tls
   - LDAP_VERIFY_SSL=true
   - LDAP_CA_FILE=/ldapcerts/[[PRIMARYDOMAIN]].crt
   - LDAP_SSL_VERSION=TLSv1_2
#   - LDAP_BIND_DN=dc=ldap,[[LDAPDOMAINASDCS]]
   - LDAP_BIND_DN=dc=megadocker,dc=net
   - LDAP_PASS=[[LDAPADMINPASSWORD]]
   - LDAP_ACTIVE_DIRECTORY=false
   - LDAP_ALLOW_USERNAME_OR_EMAIL_LOGIN=true
#   - LDAP_BASE=ou=GitlabUsers,ou=UserGroups,dc=ldap,[[LDAPDOMAINASDCS]]
   - LDAP_BASE=ou=GitlabUsers,ou=UserGroups,dc=megadocker,dc=net
#   - LDAP_USER_FILTER=
  volumes:
   - ./logs/gitlab:/var/log/gitlab
   - ./traefik/ssl:/ldapcerts/:ro
   - ./gitlab/config:/etc/gitlab
   - ./gitlab/data:/var/opt/gitlab
  ports:
   - 22:22
  networks:
   - gitlab
   - ldap
   - traefik
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.gitlab.entrypoints=plainhttp'
    - 'traefik.http.services.gitlab.loadbalancer.server.port=80'
    - 'traefik.http.routers.gitlab.rule=Host("gitlab.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.gitlab-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.gitlab.middlewares=gitlab-force-secure'
    - 'traefik.http.routers.gitlab.service=gitlab'
    - 'traefik.http.routers.gitlab-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.gitlab-https.rule=Host("gitlab.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.gitlab-https.service=gitlab'
    - 'traefik.http.routers.gitlab-https.tls=true'
    - 'traefik.http.services.gitlab-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=GitLab version control software and Docker image regiastry'
   placement:
    constraints:
     - node.role == manager

 gitlab-postgres:
  image: postgres:alpine
  environment:
   - POSTGRES_USER=[[GITLABPOSTGRESUSER]]
   - POSTGRES_PASSWORD=[[GITLABPOSTGRESPASSWORD]]
   - POSTGRES_DB=gitlabhq_production
  volumes:
   - ./logs/gitlab:/var/log/postgres
   - ./gitlab/postgresql:/var/lib/postgresql:rw
  networks:
   - gitlab
 
 gitlab-redis:
  image: redis:alpine
  volumes:
# maybe wrong log location  
   - ./logs/gitlab:/var/log/redis
   - ./gitlab/redis:/data
  networks:
   - gitlab

# End GitLab Service Section

`,
}
