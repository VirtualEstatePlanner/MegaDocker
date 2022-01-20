/** @format */

import { workingManikins } from '../../globals/workingManikins'

describe(`tests that all Manikins are present in the workingManikins array`, () => {
  it(`has every optional Manikin that is complete`, () => {
    expect(workingManikins.find(manikin => manikin.name === `Books`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `Comics`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `Drupal`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `ELK`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `E-mail`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `FileBrowser`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `Ghost`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `Grocy`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `Heimdall`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `Kanboard`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `Ledger`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `Mealie`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `Movies`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `Music`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `Nextcloud`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `Nginx`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `osPOS`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `Pihole`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `Portainer`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `RocketChat`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `Styleguidist`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `Syncthing`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `TV`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `Visualizer`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `WordPress`)).toBeTruthy()
  })
  it(`has every core Manikin that is complete`, () => {
    expect(workingManikins.find(manikin => manikin.name === `LDAP`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `Traefik`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `n8n`)).toBeTruthy()
    expect(workingManikins.find(manikin => manikin.name === `Swarmpit`)).toBeTruthy()
  })
})
