/** @format */

import { IMite } from '../../../interfaces/IMite'

export const swarmpitNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40053,
  miteString: `

# Begin Swarmpit Network Section

 swarmpit:
  driver: overlay

# End Swarmpit Network Section

`,
}
