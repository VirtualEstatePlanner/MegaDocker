//  IMemory.ts
//  MegaDocker
//  an interface that represents a variable used by a Manikin
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

/**
 * interface for IMemory
 * @fromManikins manikinIndexes from IManikins this IMemory appears in
 * @isReady returns true if value passes validator
 * @memoryIndex the unique identifier of this IMemory
 * @memoryMarker the string in a mite to be replaced with this memory's value
 * @name the human-readable name of this IMemory
 * @shouldAutocomplete if true, value will autocomplete in browser
 * @tooltip mouseover hint text
 * @validator function to check if value is valid for this IMemory
 * @value the variable stored in this IMemory
 * @valueType input type in browser, one of: password | email \ text
 */
export interface IMemory {
  isReady: boolean;
  memoryIndex: number;
  memoryMarker:
    | `[[AUTHELIAMARIADBPASSWORD]]`
    | `[[AUTHELIAMARIADBROOTPASSWORD]]`
    | `[[AUTHELIAMARIADBUSER]]`
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
    | `[[MOBFOLDERPATH]]`
    | `[[MOBNAME]]`
    | `[[NEXTCLOUDMARIADBPASSWORD]]`
    | `[[NEXTCLOUDMARIADBROOTPASSWORD]]`
    | `[[NEXTCLOUDMARIADBUSER]]`
    | `[[NEXTCLOUDPOSTGRESPASSWORD]]`
    | `[[NEXTCLOUDPOSTGRESUSER]]`
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
    | `[[WORDPRESSMARIADBUSER]]`;
  name: string;
  shouldAutocomplete: boolean;
  tooltip: string;
  validator(value: string): boolean;
  value: string;
  valueType: 'password' | 'email' | 'text';
}
