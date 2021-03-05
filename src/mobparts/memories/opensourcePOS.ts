//  opensourcePOS.ts
  //  MegaDocker
  //  A point-of-sale system with inventory tracking and other common features
  //  Created by George Georgulas IV on 3/5/2021.
  //  Copyright © 2021 The MegaDocker Group. All rights reserved.
  
  import { IManikin } from '../../interfaces/IManikin';
  
  import { opensourcePOSServiceMite } from '../mites/service/opensourcePOSServiceMite';
  //import { opensourcePOSNetworkMite } from '../mites/network/opensourcePOSNetworkMite';
  import opensourcePOSIcon from '../../images/manikin-icons/opensourcePOSIcon.png';
  
  /**
   * opensourcePOS Manikin
   */
  export const opensourcePOSManikin: IManikin = {
    description: "A point-of-sale system with inventory tracking and other common features",
    folder: "opensourcepos",
    isCore: false,
    isSelected: false,
    manikinGroups: [],
    manikinIcon: "opensourcePOSIcon",
    manikinIndex: 99999,
    memories: [],
    mites: [],
    name: "opensourcePOS",
    ports: [],
    subfolders: [],
  };