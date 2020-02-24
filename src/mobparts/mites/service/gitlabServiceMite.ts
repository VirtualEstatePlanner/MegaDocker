//  serviceMite.ts
//  MegaDocker
//  Service Mite for GitLab
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const gitlabServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2004,
  miteString: `

#Begin GitLab Service Section

gitlab:
 image: gitlab/gitlab-ce:latest
 environment:
  - DB_ADAPTER=postgresql
  - DB_HOST=GitTest_gitlab-postgresql
  - DB_PORT=5432
  - DB_USER=[[GITLABPOSTGRESUSER]]
  - DB_PASS=[[GITLABNPOSTGRESPASSWORD]]
  - DB_NAME=[[MOBNAME]]_gitlabhq_production
  - REDIS_HOST=[[MOBNAME]]_gitlab-redis
  - REDIS_PORT=63679
  - TZ=America/New_York
  - GITLAB_TIMEZONE=New York
  - GITLAB_HTTPS=true
  - SSL_SELF_SIGNED=false
  - GITLAB_HOST=git.[[PRIMARYDOMAIN]]
  - GITLAB_REGISTRY_ENABLED=true
  - GITLAB_REGISTRY_HOST=dockerhub.[[PRIMARYDOMAIN]]
  - GITLAB_REGISTRY_API_URL=http://dockerhub.[[PRIMARYDOMAIN]]:5000
  - GITLAB_ROOT_PASSWORD=[[GITLABROOTPASSWORD]]
  - GITLAB_ROOT_EMAIL=[[GITLABROOTEMAIL]]
  - GITLAB_SSH_PORT=22
  - EXTERNAL_URL=http://gitlab.[[PRIMARYDOMAIN]]
  - LDAP_ENABLED=true
  - LDAP_HOST=[[MOBNAME]]_openldap
  - LDAP_PORT=636
  - LDAP_UID=email
  - LDAP_METHOD=start_tls
  - LDAP_VERIFY_SSL=true
  - LDAP_CA_FILE=/ldapcerts/*.[[PRIMARYDOMAIN]].pem
  - LDAP_SSL_VERSION=TLSv1_2
  - LDAP_BIND_DN=dc=megadocker,dc=com
  - LDAP_PASS=[[LDAPADMINPASSWORD]]
  - LDAP_ACTIVE_DIRECTORY=false
  - LDAP_ALLOW_USERNAME_OR_EMAIL_LOGIN=true
  - LDAP_BASE=ou=Users
#  - LDAP_USER_FILTER=
 volumes:
  - ~/Documents/MegaDocker/[[MOBNAME]]/traefik/ssl/pem/*.[[PRIMARYDOMAIN]].pem:/ldapcerts/*.[[PRIMARYDOMAIN]].pem
  - ~/Documents/MegaDocker/[[MOBNAME]]/gitlab/config:/etc/gitlab
  - ~/Documents/MegaDocker/[[MOBNAME]]/gitlab/logs:/var/log/gitlab
  - ~/Documents/MegaDocker/[[MOBNAME]]/gitlab/data:/var/opt/gitlab
 ports:
  - 22:22
 deploy:
  replicas: 1
  restart_policy:
   condition: none
  placement:
   constraints:
    - node.role == manager
  labels:
   - "traefik.enable=true"
   - "traefik.backend=git"
   - "traefik.frontend.rule=Host:gitlab.[[PRIMARYDOMAIN]],gitlab.[[SECONDARYDOMAIN]],dockerhub.[[PRIMARYDOMAIN]],dockerhub.[[SECONDARYDOMAIN]]"
   - "traefik.docker.network=[[MOBNAME]]_traefik"
   - "traefik.port=80"
  networks:
   - gitlab
   - traefik
 
 gitlab-postgresql:
  image: postgres:alpine
  environment:
   - POSTGRES_USER=[[GITLABPOSTGRESUSER]]
   - POSTGRES_PASSWORD=[[GITLABPOSTGRESPASSWORD]]
   - POSTGRES_DB=gitlabhq_production
  volumes:
   - ~/Documents/MegaDocker/[[MOBNAME]]/gitlab/postgresql:/var/lib/postgresql:rw
  networks:
   - gitlab
 
 gitlab-redis:
  image: redis:alpine
  networks:
   - gitlab

  #End Git Service Section

`
};
