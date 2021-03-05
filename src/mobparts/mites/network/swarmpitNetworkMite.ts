/** @format */

import { IMite } from '../../../interfaces/IMite'

export const swarmpitNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40026,
  miteString: `

# Begin Swarmpit Network Section

 swarmpit:
  driver: overlay

# End Swarmpit Network Section

`,
}
