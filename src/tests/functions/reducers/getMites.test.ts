/** @format */

//  getMites.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { forEach } from 'jszip'
import { getCustomMites } from '../../../functions/reducers/getCustomMites'
import { getDNetworkMites } from '../../../functions/reducers/getDNetworkMites'
import { getDServiceMites } from '../../../functions/reducers/getDServiceMites'
import { getMites } from '../../../functions/reducers/getMites'
import { workingManikins } from '../../../globals/workingManikins'
import { ICustomMite } from '../../../interfaces/ICustomMite'
import { IMite } from '../../../interfaces/IMite'

const testingMites: IMite[] = getMites(workingManikins)
const testingCustomMites: ICustomMite[][] = getCustomMites(testingMites) as ICustomMite[][]
const testingNetworkMites: IMite[] = getDNetworkMites(testingMites)
const testingServiceMites: IMite[] = getDServiceMites(testingMites)

const getCustomMiteCount = (): number => {
  let customMiteCount: number = 0
  testingCustomMites.forEach((customMiteArray) => {
    customMiteCount += customMiteArray.length
  })
  return customMiteCount
}
const getNetworkMiteCount = (): number => {
  return testingNetworkMites.length
}
const getServiceMiteCount = (): number => {
  return testingServiceMites.length
}

const getTotalMiteCount = (): number => {
  let totalMiteCount: number = 0
  totalMiteCount += getServiceMiteCount()
  totalMiteCount += getNetworkMiteCount()
  totalMiteCount += getCustomMiteCount()
  return totalMiteCount
}

it('the correct number of mites are present', () => {
  expect(getTotalMiteCount()).toStrictEqual(102)
})
testingCustomMites.forEach((miteArray) => {
  miteArray.forEach((mite) => {
    console.log(mite.miteIndex)
    it('every mite string is at least 10 characters', () => {
      expect(mite.miteFile.contents.length).toBeGreaterThanOrEqual(10)
    })
    it('every mite has an index in the appropriate range', () => {
      expect(mite.miteIndex).toBeGreaterThanOrEqual(10000)
      expect(mite.miteIndex).toBeLessThanOrEqual(69999)
    })
  })
  testingNetworkMites.forEach((mite) => {
    console.log(mite.miteIndex)
    it('every mite string is at least 10 characters', () => {
      expect(mite.miteString.length).toBeGreaterThanOrEqual(10)
    })
    it('every mite has an index in the appropriate range', () => {
      expect(mite.miteIndex).toBeGreaterThanOrEqual(10000)
      expect(mite.miteIndex).toBeLessThanOrEqual(69999)
    })
  })
  testingServiceMites.forEach((mite) => {
    console.log(mite.miteIndex)
    it('every mite string is at least 10 characters', () => {
      expect(mite.miteString.length).toBeGreaterThanOrEqual(10)
    })
    it('every mite has an index in the appropriate range', () => {
      expect(mite.miteIndex).toBeGreaterThanOrEqual(10000)
      expect(mite.miteIndex).toBeLessThanOrEqual(69999)
    })
  })
})
