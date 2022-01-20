/** @format */

import { IMite } from '../../../interfaces/objectInterfaces/IMite'

export const plexNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40022,
  miteString: `

# Begin Plex Network Section

 plex:
  driver: overlay

# End Plex Network Section

`
}
