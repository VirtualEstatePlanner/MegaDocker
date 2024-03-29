/** @format */

import { ICustomMite } from '../../../interfaces/miteTypeInterfaces/ICustomMite'

export const ldapBootstrapMegaDockerDotLdifMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 60009,
  miteFile: {
    path: `ldap/openldap-ldif-files`,
    name: `51-bootstrap-megadocker`,
    extension: `ldif`,
    permissions: `644`,
    contents: `# MegaDocker 51-bootstrap-megadocker.ldif file for [[MOBNAME]]
# base domain name '[[LDAPDOMAINASDCS]]' was automatically generated from [[PRIMARYDOMAIN]]

version: 1

# Begin Customers Section
    
dn: ou=Customers,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Businesses,ou=Customers,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Domestic,ou=Businesses,ou=Customers,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=International,ou=Businesses,ou=Customers,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Individuals,ou=Customers,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Domestic,ou=Individuals,ou=Customers,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=International,ou=Individuals,ou=Customers,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

# End Customers Section

# Begin Employees Section

dn: ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Staff,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Managers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Executives,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: uid=supermod,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: person
objectclass: organizationalPerson
objectclass: inetOrgPerson
cn: Super Moderator Account
sn: Moderator
givenname: Super
uid: supermod
ou: Moderators
ou: people
description: universal service moderator

dn: uid=superadmin,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: person
objectclass: organizationalPerson
objectclass: inetOrgPerson
cn: Super Administrator Account
sn: Admin
givenname: Super
uid: superadmin
ou: Administrators
ou: people
description: universal service administrator

# End Employees Section

# Begin Groups Section

dn: ou=Groups,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: cn=SuperModerators,ou=Groups,[[LDAPDOMAINASDCS]]
objectclass: groupOfUniqueNames
description: Technicians who can moderate every service
uniqueMember: uid=supermod,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]

dn: cn=SuperAdmins,ou=Groups,[[LDAPDOMAINASDCS]]
objectclass: groupOfUniqueNames
description: Technicians who can administrate every service
uniqueMember: uid=superadmin,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]

dn: cn=Employees,ou=Groups,[[LDAPDOMAINASDCS]]
objectclass: groupOfUniqueNames
description: People who are employed directly by [[LDAPORGANISATION]]

dn: cn=Vendors,ou=Groups,[[LDAPDOMAINASDCS]]
objectclass: groupOfUniqueNames
description: People or Businesses that [[LDAPORGANISATION]] pays for goods or services

dn: cn=Customers,ou=Groups,[[LDAPDOMAINASDCS]]
objectclass: groupOfUniqueNames
description: People or Businesses that pay [[LDAPORGANISATION]] for goods or services

dn: cn=Devices,ou=Groups,[[LDAPDOMAINASDCS]]
objectclass: groupOfUniqueNames
description: Devices that are part of the [[LDAPORGANISATION]] technology pool

# End Groups Section

# Begin Hardware Section

dn: ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Batteries,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Linux,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=AMD64,ou=Linux,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Desktops,ou=AMD64,ou=Linux,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Laptops,ou=AMD64,ou=Linux,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Servers,ou=AMD64,ou=Linux,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=ARM64,ou=Linux,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Desktops,ou=ARM64,ou=Linux,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Laptops,ou=ARM64,ou=Linux,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Servers,ou=ARM64,ou=Linux,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=MacOS,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=AMD64,ou=MacOS,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Desktops,ou=AMD64,ou=MacOS,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Laptops,ou=AMD64,ou=MacOS,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Servers,ou=AMD64,ou=MacOS,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=ARM64,ou=MacOS,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Desktops,ou=ARM64,ou=MacOS,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Laptops,ou=ARM64,ou=MacOS,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Servers,ou=ARM64,ou=MacOS,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Windows,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=AMD64,ou=Windows,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Desktops,ou=AMD64,ou=Windows,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Laptops,ou=AMD64,ou=Windows,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Servers,ou=AMD64,ou=Windows,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=ARM64,ou=Windows,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Desktops,ou=ARM64,ou=Windows,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Laptops,ou=ARM64,ou=Windows,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Servers,ou=ARM64,ou=Windows,ou=Computers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=MobileDevices,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=AndroidDevices,ou=MobileDevices,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Phones,ou=AndroidDevices,ou=MobileDevices,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Tablets,ou=AndroidDevices,ou=MobileDevices,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Wearables,ou=AndroidDevices,ou=MobileDevices,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=AppleDevices,ou=MobileDevices,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Phones,ou=AppleDevices,ou=MobileDevices,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Tablets,ou=AppleDevices,ou=MobileDevices,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Wearables,ou=AppleDevices,ou=MobileDevices,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=NetworkGear,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Firewalls,ou=NetworkGear,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Routers,ou=NetworkGear,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Switches,ou=NetworkGear,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=WirelessAccessPoints,ou=NetworkGear,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Printers,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=VOIPPhones,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Security,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Cameras,ou=Security,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Doorbells,ou=Security,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Sensors,ou=Security,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=CarbonMonoxideDetectors,ou=Sensors,ou=Security,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=DoorSensors,ou=Sensors,ou=Security,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=GlassBreakSensors,ou=Sensors,ou=Security,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=SmokeDetectors,ou=Sensors,ou=Security,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=WindowSensors,ou=Sensors,ou=Security,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=SettopBoxes,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=AppleTVs,ou=SettopBoxes,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=FireTVSticks,ou=SettopBoxes,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Rokus,ou=SettopBoxes,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=SmartTVs,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=RokuTVs,ou=SmartTVs,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=FireTVs,ou=SmartTVs,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LGTVs,ou=SmartTVs,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=SamsungTVs,ou=SmartTVs,ou=Hardware,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

# End Hardwware Section

# Begin Users Section

dn: ou=Users,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=BotUsers,ou=Users,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=ExternalUsers,ou=BotUsers,ou=Users,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=InternalUsers,ou=BotUsers,ou=Users,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=HumanUsers,ou=Users,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=ExternalUsers,ou=HumanUsers,ou=Users,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=InternalUsers,ou=HumanUsers,ou=Users,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=ServiceUsers,ou=InternalUsers,ou=HumanUsers,ou=Users,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: InternalUsers
aliasedObjectName: ou=InternalUsers,ou=Employees

# End Users Section

# Begin Vendors Section

# Vendors ou
dn: ou=Vendors,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

## Domestic-Vendors
dn: ou=Domestic,ou=Vendors,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

## International-Vendors
dn: ou=International,ou=Vendors,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

# End Vendors Section


`
  }
}
