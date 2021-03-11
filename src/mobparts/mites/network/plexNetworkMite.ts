/** @format */

import { IMite } from '../../../interfaces/IMite'

export const plexNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40045,
  miteString: `

# Begin Plex Network Section

 plex:
  driver: overlay

# End Plex Network Section

`,
}
