/** @format */

//  IManikinPort.ts
//  MEGADocker
//  an interface that represents a port used by a Manikin - a network port a manikin requires
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

// NOTE
// NOTE By default, the 1st networking priority should be handled in the container orchestrator
// NOTE             the 2nd networking priority should be given to Docker-in-Docker or Docker-in-Kubernetes
// NOTE             the 3rd networking priority should be given to Traefik <-> Authelia and internal traffic for authentication
// NOTE             the 4th networking priority should be given to Traefik to handle reverse proxying of UDP data
// NOTE             the 5th networking priority should be given to Traefik to handle reverse proxying of TCP data
// NOTE             the 6th networking priority should be given to Traefik to handle reverse proxying of HTTPS data
// NOTE             the 7th networking priority should be given to Traefik to handle reverse proxying of HTTP data
// NOTE             the 8th networking priority should be given to the orchestrator's backend connections that serve front-facing service// NOTE
// NOTE             the 9th networking priority should be given to the orchestrator's backend connections that serve resources for front-facing services
// NOTE
// NOTE By default, any network usage cases which have a priority outside of this default case are given lower priority.
// NOTE
export interface IManikinPort {
  externalPort: number
  internalPort?: number
  isUDP: boolean
}
