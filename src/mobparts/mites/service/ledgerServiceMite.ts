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
# Replace the password below for a secure setup
   - POSTGRES_PASSWORD: abc
   - PGDATA: /var/lib/postgresql/data/pgdata
  networks:
   - internal
  volumes:
   - "pgdata:/var/lib/postgresql/data"

 ledger-smb:
  depends_on:
   - ledger-postgres
  image: ledgersmb/ledgersmb
  networks:
   - internal
   - default
# Uncomment the 'ports' section to map the LedgerSMB container port (5762)
#  to the host's port of the same number, thus making LedgerSMB
#  available on http://<host-dns-or-ip>:5762/
#     SECURITY NOTE: Do this for evaluation purposes only!
#       In production, be sure to use SSL/TLS to protect user's passwords
#       and other sensitive data
# ports:
#   - "5762:5762"
  environment:
# The LSMB_WORKERS environment variable lets you select the number
# of processes serving HTTP requests. The default number of 2 workers
# is geared toward limited-memory situations (1 GB). In order to
# improve the performance experience, increase memory and the
# number of workers
# LSMB_WORKERS: 2
# SSMTP_ROOT:
# SSMTP_HOSTNAME:
# SSMTP_MAILHUB:
# SSMTP_AUTH_USER:
# SSMTP_AUTH_PASS:
# SSMTP_AUTH_METHOD:
# SSMTP_USE_STARTTLS:
# SSMTP_FROMLINE_OVERRIDE:

# End Ledger Service Section

`
};
