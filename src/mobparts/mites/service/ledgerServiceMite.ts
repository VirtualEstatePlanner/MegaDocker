/** @format */

//  ledgererviceMite.ts
//  MegaDocker
//  Service Mite for Ledger
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite'

export const ledgerServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 30012,
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
    - 'traefik.http.routers.ledger.rule=Host("ledger.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.ledger-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.ledger.middlewares=ledger-force-secure'
    - 'traefik.http.routers.ledger.service=ledger'
    - 'traefik.http.routers.ledger-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.ledger-https.rule=Host("ledger.[[PRIMARYDOMAIN]]")'
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
   - ./ledger:/var/lib/postgresql/data

# End Ledger Section

`,
}
