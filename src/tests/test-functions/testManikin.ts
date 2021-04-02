/* eslint-disable no-unused-expressions */
/** @format */

//  testManikin.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.


import { IManikin } from '../../interfaces/objectInterfaces/IManikin';
import { IMemory } from '../../interfaces/objectInterfaces/IMemory';

export const testManikin: Function = (manikinToTest: IManikin, memories?: IMemory[]) => {
  describe('tests a manikin for validity', () => {
    it(`has all properties defined`, () => {
    expect(manikinToTest.name).toBeDefined();
    expect(manikinToTest.manikinIcon).toBeDefined();
    expect(manikinToTest.description).toBeDefined();
    expect(manikinToTest.description.length).toBeGreaterThan(0);
    expect(manikinToTest.isCore).toBeDefined;
    expect(manikinToTest.isSelected).toBeDefined;
    expect(manikinToTest.mites).toBeDefined();
    expect(manikinToTest.mites.length).toBeGreaterThan(0);
    expect(manikinToTest.ports.length).toBeGreaterThan(-1);
    expect(manikinToTest.folder).toBeDefined();
    expect(manikinToTest.subfolders.length).toBeGreaterThan(-1);
    expect(manikinToTest.memories.length).toBeGreaterThan(-1);
  })
  })
}
