/** @format */

import { IHeaderMite } from '../../../interfaces/miteTypeInterfaces/IHeaderMite'

export const mobFileHeaderSectionString: IHeaderMite = {
  type: `DockerSwarmHeader`,
  miteIndex: 29999,
  miteString: `
# MegaDocker YML File
version: '3.9'

# Created by MegaDocker
# Mob is named: [[MOBNAME]]

# Begin Services Section

services:
`
}
