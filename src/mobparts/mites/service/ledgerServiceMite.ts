//  ledgererviceMite.ts
//  MegaDocker
//  Service Mite for Ledger
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const ledgerServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2007,
  miteString: `

# Begin Ledger Service Section

 ledger-postgres:
  image: postgres:9.6-alpine
  environment:
   - POSTGRES_PASSWORD: [[LEDGERPOSTGRESPASSWORD]]
   - PGDATA: /var/lib/postgresql/data/pgdata
  networks:
   - internal
  volumes:
   - "./ledger/postgres:/var/lib/postgresql/data"

 ledger-smb:
  depends_on:
   - ledger-postgres
  image: ledgersmb/ledgersmb
  networks:
   - internal
   - default
  environment:
   - LSMB_WORKERS: 2
#   - SSMTP_ROOT:
#   - SSMTP_HOSTNAME:
#   - SSMTP_MAILHUB:
#   - SSMTP_AUTH_USER:
#   - SSMTP_AUTH_PASS:
#   - SSMTP_AUTH_METHOD:
#   - SSMTP_USE_STARTTLS:
#   - SSMTP_FROMLINE_OVERRIDE:

# End Ledger Service Section

`
};
