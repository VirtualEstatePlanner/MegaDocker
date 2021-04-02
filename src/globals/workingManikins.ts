/** @format */

import { IManikin } from '../interfaces/objectInterfaces/IManikin'
// import manikins
import { booksManikin } from '../mobparts/manikins/books'
import { comicsManikin } from '../mobparts/manikins/comics'
import { duplicatiManikin } from '../mobparts/manikins/duplicati'
import { drupalManikin } from '../mobparts/manikins/drupal'
import { elkManikin } from '../mobparts/manikins/elk'
import { emailManikin } from '../mobparts/manikins/email'
import { filebrowserManikin } from '../mobparts/manikins/filebrowser'
import { ghostManikin } from '../mobparts/manikins/ghost'
// import { gitlabManikin } from '../mobparts/manikins/gitlab';
import { grocyManikin } from '../mobparts/manikins/grocy'
import { heimdallManikin } from '../mobparts/manikins/heimdall'
import { kanboardManikin } from '../mobparts/manikins/kanboard'
import { ldapManikin } from '../mobparts/manikins/ldap'
import { ledgerManikin } from '../mobparts/manikins/ledger'
import { mealieManikin } from '../mobparts/manikins/mealie'
import { n8nManikin } from '../mobparts/manikins/n8n'
import { nextcloudManikin } from '../mobparts/manikins/nextcloud'
import { nginxManikin } from '../mobparts/manikins/nginx'
import { opensourceposManikin } from '../mobparts/manikins/opensourcepos'
// import { owncloudManikin } from '../mobparts/manikins/owncloud';
import { piholeManikin } from '../mobparts/manikins/pihole'
import { portainerManikin } from '../mobparts/manikins/portainer'
import { rocketchatManikin } from '../mobparts/manikins/rocketchat'
import { styleguidistManikin } from '../mobparts/manikins/styleguidist'
import { swarmpitManikin } from '../mobparts/manikins/swarmpit'
import { syncthingManikin } from '../mobparts/manikins/syncthing'
import { traefikManikin } from '../mobparts/manikins/traefik'
import { tvManikin } from '../mobparts/manikins/tv'
import { visualizerManikin } from '../mobparts/manikins/visualizer'
// import { vsCodeManikin } from '../mobparts/manikins/vscode';
// import { webdavManikin } from '../mobparts/manikins/webdav';
import { wordpressManikin } from '../mobparts/manikins/wordpress'
import { moviesManikin } from '../mobparts/manikins/movies'
import { musicManikin } from '../mobparts/manikins/music'

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
  filebrowserManikin,
  ghostManikin,
  // gitlabManikin,
  grocyManikin,
  heimdallManikin,
  kanboardManikin,
  ldapManikin,
  ledgerManikin,
  mealieManikin,
  moviesManikin,
  musicManikin,
  n8nManikin,
  nextcloudManikin,
  nginxManikin,
  // owncloudManikin,
  opensourceposManikin,
  piholeManikin,
  portainerManikin,
  rocketchatManikin,
  styleguidistManikin,
  syncthingManikin,
  swarmpitManikin,
  traefikManikin,
  tvManikin,
  visualizerManikin,
  // vsCodeManikin,
  // webdavManikin,
  wordpressManikin,
]
