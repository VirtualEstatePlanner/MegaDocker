//  .ts
//  MegaDocker
//  A Manikin to generate a  service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../classes/IManikin';

import { ldapAdminPassword } from '../memories/ldapAdminPassword';
import { ldapAdminUsername } from '../memories/ldapAdminUsername';
import { ldapConfigurationPassword } from '../memories/ldapConfigurationPassword';
import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import defaultIcon from '../images/manikin-icons/defaultIcon.png';

/**
 * ldap Manikin
 */
export let ldapManikin: IManikin = {
  name: `LDAP`,
  description: `Lightweight Directory Authentication Protocol Authentication server`,
  isCore: false,
  isSelected: false,
  mites: [serviceMite, networkMite],
  ports: [],
  folder: `LDAP`,
  subfolders: [`conf`, `pages`, `log`],
  memories: [ldapAdminUsername, ldapAdminPassword, ldapConfigurationPassword],
  manikinIcon: defaultIcon
};

/**
 * rocketchat Manikin
 * replace MVOs
 */
export let rocketChatManikin: IManikin = {
  name: `RocketChat`,
  description: `Team text chat server`,
  isCore: false,
  isSelected: false,
  mites: [serviceMite, networkMite],
  ports: [],
  folder: `RocketChat`,
  subfolders: [`database`, `dump`, `hubot`, `uploads`],
  memories: [],
  manikinIcon: defaultIcon
};

/**
 * drupal Manikin
 */
export let drupalManikin: IManikin = {
  name: `Drupal`,
  description: `Blogging platform`,
  isCore: false,
  isSelected: false,
  mites: [serviceMite, networkMite],
  ports: [],
  folder: `Drupal`,
  subfolders: [`modules`, `profiles`, `themes`, `sites`],
  memories: [],
  manikinIcon: defaultIcon
};

/**
 * owncloud Manikin
 */
export let owncloudManikin: IManikin = {
  name: `Owncloud`,
  description: `File-sharing server`,
  isCore: false,
  isSelected: false,
  mites: [serviceMite, networkMite],
  ports: [],
  folder: `Owncloud`,
  subfolders: [`apps`, `config`, `data`, `postgres`, `redis`, `mariadb`],
  memories: [],
  manikinIcon: defaultIcon
};

/**
 * git Manikin
 */
export let gitlabManikin: IManikin = {
  name: `GitLab`,
  description: `GitLab version control server`,
  isCore: false,
  isSelected: false,
  mites: [serviceMite, networkMite],
  ports: [],
  folder: `GitLab`,
  subfolders: [],
  memories: [],
  manikinIcon: defaultIcon
};

/**
 * portal Manikin
 */
export let portalManikin: IManikin = {
  name: `Portal`,
  description: `Web portal for MegaDocker services quick access`,
  isCore: false,
  isSelected: false,
  mites: [serviceMite, networkMite],
  ports: [],
  folder: `Portal`,
  subfolders: [`bitnami`, `html`],
  memories: [],
  manikinIcon: defaultIcon
};

/**
 * webdav Manikin
 */
export let webdavManikin: IManikin = {
  name: `WebDAV`,
  description: `File-sharing server`,
  isCore: false,
  isSelected: false,
  mites: [serviceMite, networkMite],
  ports: [],
  folder: `WebDAV`,
  subfolders: [],
  memories: [],
  manikinIcon: defaultIcon
};

/**
 * wordpress Manikin
 */
export let wordpressManikin: IManikin = {
  name: `WordPress`,
  description: `WordPress Blogging platform`,
  isCore: false,
  isSelected: false,
  mites: [serviceMite, networkMite],
  ports: [],
  folder: `WordPress`,
  subfolders: ['data', 'mariadb'],
  memories: [],
  manikinIcon: defaultIcon
};
