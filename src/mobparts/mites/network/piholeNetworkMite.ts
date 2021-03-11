/** @format */

import { IMite } from '../../../interfaces/IMite'

export const piholeNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40043,
  miteString: `

# Begin pihole Network Section

 pihole:
  driver: overlay

# End pihole Network Section

`,
}
