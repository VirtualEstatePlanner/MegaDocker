/** @format */

//  ledgerServiceMite.ts
//  MEGADocker
//  Service Mite for Ledger
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [`ledger`]

export const ledgerServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30013,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin Ledger Section

 ledger:
  image: ledgersmb/ledgersmb
  networks:
   - ledger
   - traefik
  environment:
   - DEFAULT_DB=ledger
   - POSTGRES_HOST=[[MOBNAME]]_ledger-postgres
   - POSTGRES_USER=[[LEDGERUSER]]
   - POSTGRES_PASSWORD=[[LEDGERPOSTGRESPASSWORD]]
  deploy:
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.ledger.entrypoints=plainhttp'
    - 'traefik.http.services.ledger.loadbalancer.server.port=5762'
    - 'traefik.http.routers.ledger.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.ledger-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.ledger.middlewares=ledger-force-secure'
    - 'traefik.http.routers.ledger.service=ledger'
    - 'traefik.http.routers.ledger-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.ledger-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.ledger-https.service=ledger'
    - 'traefik.http.routers.ledger-https.tls=true'
    - 'traefik.http.services.ledger-https.loadbalancer.server.port=5762'
    - 'com.MegaDocker.description=LedgerSMB - Bookkeeping application'

 ledger-postgres:
  image: postgres
  networks:
   - ledger
  environment:
   - POSTGRES_USER=[[LEDGERPOSTGRESUSER]]
   - POSTGRES_PASSWORD=[[LEDGERPOSTGRESPASSWORD]]
   - PGDATA=/var/lib/postgresql/data/pgdata
  volumes:
   - \${PWD}/ledger:/var/lib/postgresql/data

# End Ledger Section

`,
}
