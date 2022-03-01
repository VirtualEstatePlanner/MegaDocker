/** @format */

import { workingManikins } from '../../globals/workingManikins'

describe(`tests that all Manikins are present in the workingManikins array`, () => {
  it(`has every optional Manikin that is complete`, () => {
    expect(workingManikins.find((manikin) => manikin.manikinName === `Books`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `Comics`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `Drupal`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `ELK`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `E-mail`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `FileBrowser`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `Ghost`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `Grocy`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `Heimdall`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `Kanboard`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `Ledger`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `Mealie`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `Movies`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `Music`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `Nextcloud`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `Nginx`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `osPOS`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `Pihole`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `Portainer`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `RocketChat`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `Styleguidist`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `Syncthing`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `TV`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `Visualizer`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `WordPress`)).toBeTruthy()
  })
  it(`has every core Manikin that is complete`, () => {
    expect(workingManikins.find((manikin) => manikin.manikinName === `LDAP`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `Traefik`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `n8n`)).toBeTruthy()
    expect(workingManikins.find((manikin) => manikin.manikinName === `Swarmpit`)).toBeTruthy()
  })
})
