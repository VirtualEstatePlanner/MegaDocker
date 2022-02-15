/** @format */

//  IMemoryMarker.ts
//  MEGADocker
//  a union type of string literals that represents the location of a memory value in the mites
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

export type IMemoryMarker =
  | `[[AUTHELIAMARIADBPASSWORD]]`
  | `[[AUTHELIAMARIADBROOTPASSWORD]]`
  | `[[AUTHELIAMARIADBUSER]]`
  | `[[AUTHELIAREDISPASSWORD]]`
  | `[[AUTHELIAREDISUSER]]`
  | `[[CLOUDFLAREAPIKEY]]`
  | `[[CLOUDFLAREAPITOKEN]]`
  | `[[CLOUDFLAREEMAIL]]`
  | `[[DRUPALPOSTGRESPASSWORD]]`
  | `[[DRUPALPOSTGRESUSER]]`
  | `[[GHOSTMARIADBROOTPASSWORD]]`
  | `[[GITLABPOSTGRESPASSWORD]]`
  | `[[GITLABPOSTGRESUSER]]`
  | `[[GITLABROOTEMAIL]]`
  | `[[GITLABROOTPASSWORD]]`
  | `[[KANBOARDMARIADBUSER]]`
  | `[[KANBOARDMARIADBPASSWORD]]`
  | `[[KANBOARDMARIADBROOTPASSWORD]]`
  | `[[KIBANAPASSWORD]]`
  | `[[KIBANAUSER]]`
  | `[[LDAPADMINPASSWORD]]`
  | `[[LDAPADMINUSERNAME]]`
  | `[[LDAPDOMAINASDCS]]` // NOTE only used in ldif and conf files
  | `[[LDAPAUTHELIASESSIONSECRET]]`
  | `[[LDAPCONFIGURATIONPASSWORD]]`
  | `[[LDAPJWTSECRET]]`
  | `[[LDAPMAILUSERNAME]]`
  | `[[LDAPMAILDOMAIN]]`
  | `[[LDAPORGANISATION]]`
  | `[[LDAPSMTPHOST]]`
  | `[[LDAPSMTPASSWORD]]`
  | `[[LEDGERPOSTGRESPASSWORD]]`
  | `[[LEDGERPOSTGRESUSER]]`
  | `[[LETSENCRYPTEMAIL]]`
  | `[[LUADNSAPITOKEN]]`
  | `[[LUADNSEMAILADDRESS]]`
  | `[[MOBFOLDERPATH]]`
  | `[[MOBNAME]]`
  | `[[N8NUSERNAME]]`
  | `[[N8NPASSWORD]]`
  | `[[NEXTCLOUDMARIADBPASSWORD]]`
  | `[[NEXTCLOUDMARIADBROOTPASSWORD]]`
  | `[[NEXTCLOUDMARIADBUSER]]`
  | `[[NEXTCLOUDPOSTGRESPASSWORD]]`
  | `[[NEXTCLOUDPOSTGRESUSER]]`
  | `[[OPENSOURCEPOSMARIADBPASSWORD]]`
  | `[[OPENSOURCEPOSMARIADBUSER]]`
  | `[[OPENSOURCEPOSMARIADBROOTPASSWORD]]`
  | `[[PIHOLEPASSWORD]]`
  | `[[PRIMARYDOMAIN]]`
  | `[[ROCKETCHATBOTPASSWORD]]`
  | `[[ROCKETCHATBOTUSERNAME]]`
  | `[[SWARMPITCOUCHBASEPASSWORD]]`
  | `[[VSCODEPASSWORD]]`
  | `[[WEBDAVUSER]]`
  | `[[WEBDAVPASSWORD]]`
  | `[[WORDPRESSMARIADBPASSWORD]]`
  | `[[WORDPRESSMARIADBROOTPASSWORD]]`
  | `[[WORDPRESSMARIADBUSER]]`
