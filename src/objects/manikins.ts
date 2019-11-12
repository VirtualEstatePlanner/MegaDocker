//  ManikinObjects.ts
//  MegaDocker
//  A collection of Manikin Objects definied for use by the
//  MegaDocker application
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../classes/IManikin'
import {IManikinWithPorts} from '../classes/IManikinWithPorts'
import {IManikinWithVariables} from '../classes/IManikinWithVariables'
import {IManikinWithPortsAndVariables} from '../classes/IManikinWithPortsAndVariables'

import {
  cloudFlareAPIKey,
  cloudFlareEmail,
  letsEncryptEmail,
  myLDAPAdminPassword,
  myLDAPAdminUsername,
  myLDAPConfigurationPassword,
  primaryDomain,
  secondaryDomain
} from './manikin-variables'
import {
  drupalNetworkString,
  drupalServiceString,
  ghostNetworkString,
  ghostServiceString,
  gitNetworkString,
  gitServiceString,
  myELKNetworkString,
  myELKServiceString,
  myLDAPNetworkString,
  myLDAPServiceString,
  nextcloudNetworkString,
  nginxServiceString,
  noNetworkString,
  owncloudNetworkString,
  owncloudServiceString,
  portainerServiceString,
  portalServiceString,
  rocketChatNetworkString,
  rocketChatServiceString,
  skoposServiceString,
  swarmpitNetworkString,
  swarmpitServiceString,
  traefikNetworkString,
  traefikServiceString,
  visualizerServiceString,
  webdavNetworkString,
  webdavServiceString,
  wordPressNetworkString,
  wordPressServiceString
} from './mite-strings'
/**
 * traefik Manikin
 */
export let traefikManikin: IManikinWithPortsAndVariables = {
  name: `Traefik`,
  serviceYML: traefikServiceString,
  networkYML: traefikNetworkString,
  folder: `Traefik`,
  subfolders: [`certs`, `private`, `pem`],
  manikinDescription: `Reverse Proxy Service`,
variables: [
    primaryDomain,
    secondaryDomain,
    letsEncryptEmail,
    cloudFlareEmail,
    cloudFlareAPIKey
  ],
  isSelected: true
);

/**
 * skopos Manikin
 */
export let skoposManikin: IManikinWithVariables = {
  `Skopos`,
  skoposServiceString,
  noNetworkString,
  `Skopos`,
  [],
  `Continuous Integraion/Continuous Deployment service`,
  [],
  true
);

/**
 * swarmpit Manikin
 */
export let swarmpitManikin: IManikinWithVariables = {
  `Swarmpit`,
  swarmpitServiceString,
  swarmpitNetworkString,
  `Swarmpit`,
  [`database`],
  `Docker Swarm GUI`,
  [],
  false
);

/**
 * portainer Manikin
 */
export let portainerManikin: IManikinWithVariables = {
  `Portainer`,
  portainerServiceString,
  noNetworkString,
  `Portainer`,
  [],
  `Portainer Docker Host web GUI`,
  [],
  false
);

/**
 * elk Manikin
 */
export let myELKManikin: IManikinWithVariables = {
  `ELK`,
  myELKServiceString,
  myELKNetworkString,
  `ELK`,
  [`Elasticsearch`, `Logstash`, `Kibana`],
  `ElasticSearch/Logstash/Kibana Monitoring service`,
  [],
  false
);

/**
 * visualizer Manikin
 */
export let visualizerManikin: IManikin = {
  `Visualizer`,
  visualizerServiceString,
  noNetworkString,
  `Visualizer`,
  [],
  `Docker Swarm container placement visualizer`,
  [],
  false
);

/**
 * ghost Manikin
 * replace MVOs
 */
export let ghostManikin: IManikin = {
  `Ghost`,
  ghostServiceString,
  ghostNetworkString,
  `Ghost`,
  [],
  `Blogging platform`,
  [],
  false
);

/**
 * nginx Manikin
 * replace MVOs
 */
export let nginxManikin: IManikin = {
  `Nginx`,
  nginxServiceString,
  noNetworkString,
  `Nginx`,
  subfolders: [`conf`, `pages`, `log`],
  `Nginx http server`,
  [],
  false
);

/**
 * ldap Manikin
 */
export let myLDAPManikin: IManikin = {
  `LDAP`,
  myLDAPServiceString,
  myLDAPNetworkString,
  `LDAP`,
  [`conf`, `pages`, `log`],
  `Lightweight Directory Authentication Protocol Authentication server`,
  [myLDAPAdminUsername, myLDAPAdminPassword, myLDAPConfigurationPassword],
  false
);

/**
 * rocketchat Manikin
 * replace MVOs
 */
export let rocketChatManikin: IManikin = {
  `RocketChat`,
  rocketChatServiceString,
  rocketChatNetworkString,
  `RocketChat`,
  [`database`, `dump`, `hubot`, `uploads`],
  `Team text chat server`,
  [],
  false
);

/**
 * drupal Manikin
 */
export let drupalManikin: IManikin = {
  `Drupal`,
  drupalServiceString,
  drupalNetworkString,
  `Drupal`,
  [`modules`, `profiles`, `themes`, `sites`],
  `Blogging platform`,
  [],
  false
);

/**
 * owncloud Manikin
 */
export let owncloudManikin: IManikin = {
  `Owncloud`,
  owncloudServiceString,
  noNetworkString,
  `File-sharing server`,
  [`apps`, `config`, `data`, `postgres`, `redis`, `mariadb`],
  `file-sharing platform`,
  [],
  false
);

/**
 * git Manikin
 */
export let gitManikin: IManikin = {
  `GitLab`,
  gitServiceString,
  gitNetworkString,
  `GitLab version control server`,
  [],
  `version control system for developers`,
  [],
  false
);

/**
 * portal Manikin
 */
export let portalManikin: IManikin = {
  `Portal`,
  portalServiceString,
  noNetworkString,
  `Portal`,
  [`bitnami`, `html`],
  `Web portal for MegaDocker`,
  [],
  false
);

/**
 * webdav Manikin
 */
export let webdavManikin: IManikin = {
  `Webdav`,
  webdavServiceString,
  webdavNetworkString,
  `WebDAV`,
  [],
  `File-sharing server`,
  [],
  false
);

/**
 * wordpress Manikin
 */
export let wordPressManikin: IManikin = {
  `WordPress`,
  wordPressServiceString,
  wordPressNetworkString,
  `WordPress`,
  ['data', 'mariadb'],
  `Blogging platform`,
  [],
  false
)
