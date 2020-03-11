import { IManikin } from '../interfaces/IManikin';
// import manikins
// import { backupManikin } from '../mobparts/manikins/backup';
import { drupalManikin } from '../mobparts/manikins/drupal';
import { elkManikin } from '../mobparts/manikins/elk';
import { emailManikin } from '../mobparts/manikins/email';
import { ghostManikin } from '../mobparts/manikins/ghost';
// import { gitlabManikin } from '../mobparts/manikins/gitlab';
import { heimdallManikin } from '../mobparts/manikins/heimdall';
import { kanboardManikin } from '../mobparts/manikins/kanboard';
import { ldapManikin } from '../mobparts/manikins/ldap';
// import { nextcloudManikin } from '../mobparts/manikins/nextcloud';
import { nginxManikin } from '../mobparts/manikins/nginx';
// import { owncloudManikin } from '../mobparts/manikins/owncloud';
import { piholeManikin } from '../mobparts/manikins/pihole';
import { portainerManikin } from '../mobparts/manikins/portainer';
import { rocketchatManikin } from '../mobparts/manikins/rocketchat';
import { skoposManikin } from '../mobparts/manikins/skopos';
import { swarmpitManikin } from '../mobparts/manikins/swarmpit';
import { traefikManikin } from '../mobparts/manikins/traefik';
import { visualizerManikin } from '../mobparts/manikins/visualizer';
// import { vsCodeManikin } from '../mobparts/manikins/vscode';
// import { webdavManikin } from '../mobparts/manikins/webdav';
import { wordpressManikin } from '../mobparts/manikins/wordpress';

/**
 * an array containing all Manikins available in MEGADocker
 */
export const workingManikins: IManikin[] = [
  // backupManikin,
  drupalManikin,
  elkManikin,
  emailManikin,
  ghostManikin,
  // gitlabManikin,
  heimdallManikin,
  kanboardManikin,
  ldapManikin,
  // nextcloudManikin,
  nginxManikin,
  // owncloudManikin,
  piholeManikin,
  portainerManikin,
  rocketchatManikin,
  skoposManikin,
  swarmpitManikin,
  traefikManikin,
  visualizerManikin,
  // vsCodeManikin,
  // webdavManikin,
  wordpressManikin
];
