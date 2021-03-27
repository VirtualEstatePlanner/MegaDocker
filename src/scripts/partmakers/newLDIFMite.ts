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

const makeNetworkMiteFileString: Function = (): string => {
  const date: Date = new Date()
  const shortDate = date.toLocaleString().split(',')[0]
  const year: number = date.getFullYear()
  const template: string = `/** @format */

//  ${runtimeLdifMiteAnswers.serviceName}LdifMite.ts
//  MEGADocker
//  LDIF Mite for ${runtimeLdifMiteAnswers.serviceName}
//  Created by George Georgulas IV on ${shortDate}.
//  Copyright © ${year} The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const ${runtimeLdifMiteAnswers.serviceName}LdifMite: ILDIFMite = {
  type: \`LDIF\`,
  miteIndex: 99999,
  miteString: \`# Begin ${runtimeLdifMiteAnswers.serviceName} Section

dn: ou=${runtimeLdifMiteAnswers.serviceName}Users,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=${runtimeLdifMiteAnswers.serviceName}Admins,ou=${runtimeLdifMiteAnswers.serviceName}Users,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=${runtimeLdifMiteAnswers.serviceName}Moderators,ou=${runtimeLdifMiteAnswers.serviceName}Users,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=${runtimeLdifMiteAnswers.serviceName}Admins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: ${runtimeLdifMiteAnswers.serviceName}Admins
aliasedObjectName: ou=${runtimeLdifMiteAnswers.serviceName}ITAdmins,ou=${runtimeLdifMiteAnswers.serviceName}Admins,ou=${runtimeLdifMiteAnswers.serviceName}Users,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=${runtimeLdifMiteAnswers.serviceName}Moderators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: ${runtimeLdifMiteAnswers.serviceName}Moderators
aliasedObjectName: ou=${runtimeLdifMiteAnswers.serviceName}ITModerators,ou=${runtimeLdifMiteAnswers.serviceName}Moderators,ou=${runtimeLdifMiteAnswers.serviceName}Users,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

# End ${runtimeLdifMiteAnswers.serviceName} Section
\`}`

  return template
}

getLdifMiteData.question(`What is the name of this service? (PascalCase):`, function (serviceName: string) {
  runtimeLdifMiteAnswers.serviceName = serviceName
  getLdifMiteData.close()

  const outputNewManikinString: string = makeNetworkMiteFileString(runtimeLdifMiteAnswers)

  fs.writeFileSync(`src/mobparts/mites/ldif/${runtimeLdifMiteAnswers.serviceName}LdifMite.ts`, outputNewManikinString)
})
