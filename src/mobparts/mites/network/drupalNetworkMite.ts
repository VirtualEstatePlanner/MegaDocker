//  drupalNetworkMite.ts
//  MegaDocker
//  Network Mite for Drupal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const drupalNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1001,
  miteString: `

#Begin Drupal Network Section
 
 drupal:
  image: drupal
  ports:
  volumes:
  deploy:
  
#End Drupal Network Section
  
  `
};
