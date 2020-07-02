import { IManikin } from '../interfaces/IManikin';
// import manikins
import { duplicatiManikin } from '../mobparts/manikins/duplicati';
import { drupalManikin } from '../mobparts/manikins/drupal';
import { elkManikin } from '../mobparts/manikins/elk';
import { emailManikin } from '../mobparts/manikins/email';
import { ghostManikin } from '../mobparts/manikins/ghost';
// import { gitlabManikin } from '../mobparts/manikins/gitlab';
import { grocyManikin } from '../mobparts/manikins/grocy';
import { heimdallManikin } from '../mobparts/manikins/heimdall';
import { kanboardManikin } from '../mobparts/manikins/kanboard';
import { ldapManikin } from '../mobparts/manikins/ldap';
import { ledgerManikin } from '../mobparts/manikins/ledger';
import { nextcloudManikin } from '../mobparts/manikins/nextcloud';
import { nginxManikin } from '../mobparts/manikins/nginx';
// import { owncloudManikin } from '../mobparts/manikins/owncloud';
import { piholeManikin } from '../mobparts/manikins/pihole';
import { portainerManikin } from '../mobparts/manikins/portainer';
import { rocketchatManikin } from '../mobparts/manikins/rocketchat';
import { swarmpitManikin } from '../mobparts/manikins/swarmpit';
import { traefikManikin } from '../mobparts/manikins/traefik';
import { visualizerManikin } from '../mobparts/manikins/visualizer';
// import { vsCodeManikin } from '../mobparts/manikins/vscode';
// import { webdavManikin } from '../mobparts/manikins/webdav';
import { wordpressManikin } from '../mobparts/manikins/wordpress';
import { moviesManikin } from '../mobparts/manikins/movies';
import { musicManikin } from '../mobparts/manikins/music';
import { tvManikin } from '../mobparts/manikins/tv';
import { booksManikin } from '../mobparts/manikins/books';
import { comicsManikin } from '../mobparts/manikins/comics';

/**
 * an array containing all Manikins available in MEGADocker
 */
export const workingManikins: IManikin[] = [
  booksManikin,
  comicsManikin,
  duplicatiManikin,
  drupalManikin,
  elkManikin,
  emailManikin,
  ghostManikin,
  // gitlabManikin,
  grocyManikin,
  heimdallManikin,
  kanboardManikin,
  ldapManikin,
  ledgerManikin,
  moviesManikin,
  musicManikin,
  nextcloudManikin,
  nginxManikin,
  // owncloudManikin,
  piholeManikin,
  portainerManikin,
  rocketchatManikin,
  swarmpitManikin,
  traefikManikin,
  tvManikin,
  visualizerManikin,
  // vsCodeManikin,
  // webdavManikin,
  wordpressManikin,
];
