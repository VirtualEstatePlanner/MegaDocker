import { IManikin } from '../interfaces/IManikin';
// import manikins
import { backupManikin } from '../mobparts/manikins/backup';
import { drupalManikin } from '../mobparts/manikins/drupal';
import { ghostManikin } from '../mobparts/manikins/ghost';
import { gitlabManikin } from '../mobparts/manikins/gitlab';
import { elkManikin } from '../mobparts/manikins/elk';
import { ldapManikin } from '../mobparts/manikins/ldap';
import { nextcloudManikin } from '../mobparts/manikins/nextcloud';
import { nginxManikin } from '../mobparts/manikins/nginx';
import { owncloudManikin } from '../mobparts/manikins/owncloud';
import { piholeManikin } from '../mobparts/manikins/pihole';
import { portainerManikin } from '../mobparts/manikins/portainer';
import { portalManikin } from '../mobparts/manikins/portal';
import { rocketchatManikin } from '../mobparts/manikins/rocketchat';
import { skoposManikin } from '../mobparts/manikins/skopos';
import { swarmpitManikin } from '../mobparts/manikins/swarmpit';
import { traefikManikin } from '../mobparts/manikins/traefik';
import { visualizerManikin } from '../mobparts/manikins/visualizer';
import { webdavManikin } from '../mobparts/manikins/webdav';
import { wordpressManikin } from '../mobparts/manikins/wordpress';

/**
 * an array containing all Manikins available in MEGADocker
 */
export const allManikins: IManikin[] = [
  backupManikin,
  drupalManikin,
  elkManikin,
  ghostManikin,
  gitlabManikin,
  ldapManikin,
  nextcloudManikin,
  nginxManikin,
  owncloudManikin,
  piholeManikin,
  portainerManikin,
  portalManikin,
  rocketchatManikin,
  skoposManikin,
  swarmpitManikin,
  traefikManikin,
  visualizerManikin,
  webdavManikin,
  wordpressManikin
];
