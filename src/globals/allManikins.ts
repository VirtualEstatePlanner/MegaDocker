import { IManikin } from '../interfaces/IManikin';
// import manikins
import { booksManikin } from '../mobparts/manikins/books';
import { comicsManikin } from '../mobparts/manikins/comics';
import { duplicatiManikin } from '../mobparts/manikins/duplicati';
import { drupalManikin } from '../mobparts/manikins/drupal';
import { elkManikin } from '../mobparts/manikins/elk';
import { emailManikin } from '../mobparts/manikins/email';
import { ghostManikin } from '../mobparts/manikins/ghost';
import { grocyManikin } from '../mobparts/manikins/grocy';
import { gitlabManikin } from '../mobparts/manikins/gitlab';
import { heimdallManikin } from '../mobparts/manikins/heimdall';
import { kanboardManikin } from '../mobparts/manikins/kanboard';
import { ldapManikin } from '../mobparts/manikins/ldap';
import { ledgerManikin } from '../mobparts/manikins/ledger';
import { moviesManikin } from '../mobparts/manikins/movies';
import { musicManikin } from '../mobparts/manikins/music';
import { n8nManikin } from '../mobparts/manikins/n8n';
import { nextcloudManikin } from '../mobparts/manikins/nextcloud';
import { nginxManikin } from '../mobparts/manikins/nginx';
import { owncloudManikin } from '../mobparts/manikins/owncloud';
import { piholeManikin } from '../mobparts/manikins/pihole';
import { portainerManikin } from '../mobparts/manikins/portainer';
import { rocketchatManikin } from '../mobparts/manikins/rocketchat';
import { styleguidistManikin } from '../mobparts/manikins/styleguidist';
import { swarmpitManikin } from '../mobparts/manikins/swarmpit';
import { traefikManikin } from '../mobparts/manikins/traefik';
import { tvManikin } from '../mobparts/manikins/tv';
import { visualizerManikin } from '../mobparts/manikins/visualizer';
import { vsCodeManikin } from '../mobparts/manikins/vscode';
import { webdavManikin } from '../mobparts/manikins/webdav';
import { wordpressManikin } from '../mobparts/manikins/wordpress';

/**
 * an array containing all Manikins available in MEGADocker
 */
export const allManikins: IManikin[] = [
  booksManikin,
  comicsManikin,
  duplicatiManikin,
  drupalManikin,
  elkManikin,
  emailManikin,
  ghostManikin,
  grocyManikin,
  gitlabManikin,
  heimdallManikin,
  kanboardManikin,
  ldapManikin,
  ledgerManikin,
  moviesManikin,
  musicManikin,
  n8nManikin,
  nextcloudManikin,
  nginxManikin,
  owncloudManikin,
  piholeManikin,
  portainerManikin,
  rocketchatManikin,
  styleguidistManikin,
  swarmpitManikin,
  traefikManikin,
  tvManikin,
  visualizerManikin,
  vsCodeManikin,
  webdavManikin,
  wordpressManikin,
];
