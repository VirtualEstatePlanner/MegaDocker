#!/usr/bin/env ts-node-script
/** @format */

import * as fs from 'fs'
import readline from 'readline'

interface ILDIFMiteInput {
  serviceName: string
}

let runtimeLdifMiteAnswers: ILDIFMiteInput = {
  serviceName: ``,
}

const getLdifMiteData = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const makeLdifMiteFileString: Function = (input: ILDIFMiteInput): string => {
  const date: Date = new Date()
  const shortDate = date.toLocaleString().split(',')[0]
  const year: number = date.getFullYear()
  const template: string = `/** @format */

//  ${input.serviceName}LdifMite.ts
//  MEGADocker
//  LDIF Mite for ${input.serviceName}
//  Created by George Georgulas IV on ${shortDate}.
//  Copyright © ${year} The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const ${input.serviceName}LdifMite: ILDIFMite = {
  type: \`LDIF\`,
  miteIndex: 99999,
  miteString: \`# Begin ${input.serviceName} Section

dn: ou=${input.serviceName}Users,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=${input.serviceName}Admins,ou=${input.serviceName}Users,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=${input.serviceName}Moderators,ou=${input.serviceName}Users,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=${input.serviceName}Admins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: ${input.serviceName}Admins
aliasedObjectName: ou=${input.serviceName}ITAdmins,ou=${input.serviceName}Admins,ou=${input.serviceName}Users,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=${runtimeLdifMiteAnswers.serviceName}Moderators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: ${input.serviceName}Moderators
aliasedObjectName: ou=${input.serviceName}ITModerators,ou=${input.serviceName}Moderators,ou=${input.serviceName}Users,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

# End ${input.serviceName} Section
\`}`

  return template
}

getLdifMiteData.question(`What is the name of this LDIF-secured service? (PascalCase):`, function (serviceName: string) {
  runtimeLdifMiteAnswers.serviceName = serviceName
  getLdifMiteData.close()

  const lowercaseName: string = runtimeLdifMiteAnswers.serviceName.toLowerCase()

  const outputNewLdifMiteString: string = makeLdifMiteFileString(runtimeLdifMiteAnswers)

  fs.writeFileSync(`src/mobparts/mites/ldif/${lowercaseName}LdifMite.ts`, outputNewLdifMiteString)
})
