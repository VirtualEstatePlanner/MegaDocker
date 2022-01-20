/** @format */

//  getMites.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { getCustomMites } from '../../../functions/reducers/getCustomMites'
import { getDNetworkMites } from '../../../functions/reducers/getDNetworkMites'
import { getDServiceMites } from '../../../functions/reducers/getDServiceMites'
import { getMites } from '../../../functions/reducers/getMites'
import { workingManikins } from '../../../globals/workingManikins'
import { ICustomMite } from '../../../interfaces/miteTypeInterfaces/ICustomMite'
import { IMite } from '../../../interfaces/objectInterfaces/IMite'

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
  expect(getCustomMiteCount()).toStrictEqual(16)
  expect(getNetworkMiteCount()).toStrictEqual(52)
  expect(getServiceMiteCount()).toStrictEqual(39)
  expect(getTotalMiteCount()).toStrictEqual(107)
})
testingCustomMites.forEach((miteArray) => {
  miteArray.forEach((mite) => {
    expect(mite.miteIndex).toBeGreaterThanOrEqual(10000)
    expect(mite.miteIndex).toBeLessThanOrEqual(69999)
  })
})
testingNetworkMites.forEach((mite) => {
  it('every network mite string is at least 10 characters', () => {
    expect(mite.miteString.length).toBeGreaterThanOrEqual(10)
  })
  it('every network mite has an index in the appropriate range', () => {
    expect(mite.miteIndex).toBeGreaterThanOrEqual(10000)
    expect(mite.miteIndex).toBeLessThanOrEqual(69999)
  })
})
testingServiceMites.forEach((mite) => {
  it('every service mite string is at least 10 characters', () => {
    expect(mite.miteString.length).toBeGreaterThanOrEqual(10)
  })
  it('every service mite has an index in the appropriate range', () => {
    expect(mite.miteIndex).toBeGreaterThanOrEqual(10000)
    expect(mite.miteIndex).toBeLessThanOrEqual(69999)
  })
})
