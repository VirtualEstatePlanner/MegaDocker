/** @format */

import { IMite } from '../../../interfaces/objectInterfaces/IMite'

export const piholeNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40021,
  miteString: `

# Begin pihole Network Section

 pihole:
  driver: overlay

# End pihole Network Section

`
}
