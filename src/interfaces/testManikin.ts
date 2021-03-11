/* eslint-disable no-unused-expressions */
/** @format */

//  testManikin.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.


import { IManikin } from './IManikin';

export const testManikin: Function = (ManikinToTest: IManikin) => {
  it(`has all necessary properties defined`, () => {
    expect(ManikinToTest.name).toBeDefined();
    expect(ManikinToTest.manikinIcon).toBeDefined();
    expect(ManikinToTest.description).toBeDefined();
    expect(ManikinToTest.isCore).toBeDefined;
    expect(ManikinToTest.isSelected).toBeDefined;
    expect(ManikinToTest.mites).toBeDefined();
    expect(ManikinToTest.ports).toBeDefined();
    expect(ManikinToTest.folder).toBeDefined();
    expect(ManikinToTest.subfolders).toBeDefined();
    expect(ManikinToTest.memories).toBeDefined();
  })
}
