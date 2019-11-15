import { IManikin } from '../classes/IManikin';
// import manikins
import { drupalManikin } from '../mobparts/manikins/drupal';
import { ghostManikin } from '../mobparts/manikins/ghost';
import { gitlabManikin } from '../mobparts/manikins/gitlab';
import { elkManikin } from '../mobparts/manikins/elk';
import { ldapManikin } from '../mobparts/manikins/ldap';
import { nginxManikin } from '../mobparts/manikins/nginx';
import { owncloudManikin } from '../mobparts/manikins/owncloud';
import { portainerManikin } from '../mobparts/manikins/portainer';
import { portalManikin } from '../mobparts/manikins/portal';
import { rocketchatManikin } from '../mobparts/manikins/rocketchat';
import { skoposManikin } from '../mobparts/manikins/skopos';
import { swarmpitManikin } from '../mobparts/manikins/swarmpit';
import { traefikManikin } from '../mobparts/manikins/traefik';
import { visualizerManikin } from '../mobparts/manikins/visualizer';
import { webdavManikin } from '../mobparts/manikins/webdav';
import { wordpressManikin } from '../mobparts/manikins/wordpress';
export const allManikins: IManikin[] = [
  traefikManikin,
  skoposManikin,
  swarmpitManikin,
  portainerManikin,
  elkManikin,
  visualizerManikin,
  ghostManikin,
  nginxManikin,
  ldapManikin,
  rocketchatManikin,
  drupalManikin,
  owncloudManikin,
  gitlabManikin,
  portalManikin,
  webdavManikin,
  wordpressManikin
];
