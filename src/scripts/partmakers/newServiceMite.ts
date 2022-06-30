#!/usr/bin/env ts-node-script
/** @format */

import * as fs from 'fs'
import readline from 'readline'

interface IServiceMiteInput {
  fileName: string
  serviceName: string
  displayName: string
  hostName: string
  description: string
  dockerImageWithTag: string
}

const input: IServiceMiteInput = {
  fileName: ``,
  serviceName: ``,
  displayName: ``,
  hostName: ``,
  description: ``,
  dockerImageWithTag: ``
}

const getServiceMiteData = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

getServiceMiteData.question(`What is the file name for this mite file? (camelCase):`, function (fileName: string) {
  input.fileName = fileName
  getServiceMiteData.question(`What will the service name be in the docker-compose.yml file? (lowercase): `, function (serviceName: string) {
    input.serviceName = serviceName
    getServiceMiteData.question(`What is the display name of this service?: `, function (displayName: string) {
      input.displayName = displayName
      getServiceMiteData.question(`What is the host name that will be used to access this service's UI?: `, function (hostName: string) {
        input.hostName = hostName
        getServiceMiteData.question(`What is the docker image, including tag?: `, function (dockerImageWithTag: string) {
          input.dockerImageWithTag = dockerImageWithTag
          getServiceMiteData.question(`Enter a short description for it (one line of text or less)?: `, function (description: string) {
            input.description = description
            getServiceMiteData.close()

            const outputNewServiceMiteString: string = makeServiceMiteFileString(input)

            fs.writeFileSync(`src/mobparts/mites/service/${input.fileName}.ts`, outputNewServiceMiteString)
          })
        })
      })
    })
  })
})

const makeServiceMiteFileString: (input: IServiceMiteInput) => string = (input: IServiceMiteInput): string => {
  const date: Date = new Date()
  const shortDate = date.toLocaleString().split(',')[0]
  const year: number = date.getFullYear()
  const lowercaseName = input.serviceName.toLowerCase()
  const template = `/** @format */

//  ${input.fileName}.ts
//  MEGADocker
//  ${input.description}
//  Created by George Georgulas IV on ${shortDate}.
//  Copyright © ${year} The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [\`${input.hostName}\`]

export const ${input.fileName}ServiceMite: ITraefikedServiceMite = {
  type: \`DockerSwarmService\`,
  miteIndex: 99999,
  webInterfaceHostnames: hostnames,
  miteString: \`

# Begin ${input.displayName} section

 filebrowser:
  image: ${input.dockerImageWithTag}
  volumes:
   - \\\${PWD}/${lowercaseName}/data:/srv
   - \\\${PWD}/${lowercaseName}/database.db:/database.db
  networks:
   - traefik
  deploy:
   replicas: 1
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.${lowercaseName}.entrypoints=plainhttp'
    - 'traefik.http.services.${lowercaseName}.loadbalancer.server.port=80'
    - 'traefik.http.routers.${lowercaseName}.rule=Host("\${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.${lowercaseName}-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.${lowercaseName}.middlewares=${lowercaseName}-force-secure'
    - 'traefik.http.routers.${lowercaseName}.service=${lowercaseName}'
    - 'traefik.http.routers.${lowercaseName}-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.${lowercaseName}-https.rule=Host("\${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.${lowercaseName}-https.service=rainloop'
    - 'traefik.http.routers.${lowercaseName}-https.tls=true'
    - 'traefik.http.services.${lowercaseName}-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=${input.displayName} - ${input.description}'
   placement:
    constraints:
     - node.role == manager

# End ${input.displayName} Service Section

\`,
}`

  return template
}
