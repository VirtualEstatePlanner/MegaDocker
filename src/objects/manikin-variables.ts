//  ManikinVariableObjects.ts
//  MegaDocker
//  Stores ManikinVariable objects which represent user settings
//  for network services
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

// new ManikinVariable template:
/*

let SomeManikinVariable: Manikin =
{'UndefinedVariableDescription',
    'UndefinedVariableHelp', 'OptionalUndefinedPrePopulatedValue')

*/

import { IManikinVariable } from '../classes/IManikinVariable';

// Mob variables
export let mobName: string = 'Choose a Mob name for your MEGADocker Mob.';
export let mobFolderPath: string = `The file path to your Mob's folder.`;

// traefik variables
export let primaryDomain: IManikinVariable = {
  name: 'First Domain',
  tooltip: 'Your first domain name.',
  value: ''
};
export let secondaryDomain: IManikinVariable = {
  name: 'Second Domain',
  tooltip: 'Your second domain name.',
  value: ''
};
export let letsEncryptEmail: IManikinVariable = {
  name: "Let's Encrypt Email Address",
  tooltip: 'The email used to register your domains',
  value: ''
};
export let cloudFlareEmail: IManikinVariable = {
  name: 'CloudFlare Email Address',
  tooltip: 'The email address of your CloudFlare account',
  value: ''
};
export let cloudFlareAPIKey: IManikinVariable = {
  name: 'CloudFlare API Key',
  tooltip: 'Your CloudFlare API Key',
  value: ''
};

// LDAP Variables
export let myLDAPAdminUsername: IManikinVariable = {
  name: 'LDAP Administrator account user name',
  tooltip: 'You must choose this user name.',
  value: ''
};
export let myLDAPAdminPassword: IManikinVariable = {
  name: 'LDAP Administrator account password',
  tooltip: 'The password for LDAP administrative user, above',
  value: ''
};
export let myLDAPConfigurationPassword: IManikinVariable = {
  name: 'LDAP Configuration Password',
  tooltip: 'The LDAP configuration password',
  value: ''
};

// RocketChat Variables
export let rocketChatBotUsername: IManikinVariable = {
  name: 'LDAP Administrator account user name',
  tooltip: 'You must choose this user name.',
  value: ''
};
export let rocketChatBotPassword: IManikinVariable = {
  name: 'LDAP Administrator account user name',
  tooltip: 'You must choose this user name.',
  value: ''
};

// ghost variables
export let ghostRootSQLPassword: IManikinVariable = {
  name: 'LDAP Administrator account password',
  tooltip: 'The password for LDAP administrative user, above',
  value: ''
};

// worpdress variables
export let wordpressMariaDBRootPassword: IManikinVariable = {
  name: 'The root user password for the WordPress MariaDB instance',
  tooltip: 'You must choose this password.',
  value: ''
};
export let wordpressMariaDBUser: IManikinVariable = {
  name: "The user name that WordPress will use to access it's MariaDB database",
  tooltip: 'You must choose this user name.',
  value: ''
};
export let wordpressMariaDBPassword: IManikinVariable = {
  name: "The password WordPress will use to access it'sMariaDB database",
  tooltip: 'You must choose this password.',
  value: ''
};

// drupal variables
export let drupalPostgresUser: IManikinVariable = {
  name: 'User for the Drupal Postgres database',
  tooltip: 'You must choose this username.',
  value: ''
};
export let drupalPostgresPassword: IManikinVariable = {
  name: 'Password for the Drupal Postgres user',
  tooltip: 'You must choose this password',
  value: ''
};
