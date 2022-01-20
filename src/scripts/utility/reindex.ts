#!/usr/bin/env ts-node-script
/** @format */

import * as fs from 'fs'

interface IindexerOptions {
  start: number
  directory: string
  regex: RegExp
  replace: string
}

const sourcePath: string = process.cwd() + `/src/mobparts/`
const manikinIndexRegExp: RegExp = / {2}manikinIndex: [0-9]{5},/
const miteIndexRegExp: RegExp = / {2}miteIndex: [0-9]{5},/
const memoryIndexRegExp: RegExp = / {2}memoryIndex: [0-9]{5},/
const manikinIndex: string = `  manikinIndex: `
const memoryIndex: string = `  memoryIndex: `
const miteIndex: string = `  miteIndex: `

const manikinOptions: IindexerOptions = {
  start: 10000,
  directory: `manikins`,
  regex: manikinIndexRegExp,
  replace: manikinIndex,
}

const memoryOptions: IindexerOptions = {
  start: 20000,
  directory: `memories`,
  regex: memoryIndexRegExp,
  replace: memoryIndex,
}

const serviceMiteOptions: IindexerOptions = {
  start: 30000,
  directory: `mites/service`,
  regex: miteIndexRegExp,
  replace: miteIndex,
}

const networkMiteOptions: IindexerOptions = {
  start: 40000,
  directory: `mites/network`,
  regex: miteIndexRegExp,
  replace: miteIndex,
}

const ldifMiteOptions: IindexerOptions = {
  start: 50000,
  directory: `mites/ldif`,
  regex: miteIndexRegExp,
  replace: miteIndex,
}

const customMiteOptions: IindexerOptions = {
  start: 60000,
  directory: `mites/custom`,
  regex: miteIndexRegExp,
  replace: miteIndex,
}

const reindexFiles: Function = (options: IindexerOptions): void => {
  let indexCount: number = options.start
  let directory = fs.readdirSync(`${sourcePath}/${options.directory}`)
  directory.forEach((file: string) => {
    if (!file.includes(`.test.`)) {
      let indexString: string = indexCount.toString()
      let fileContents: string = fs.readFileSync(`${sourcePath}/${options.directory}/${file}`).toString()
      let fullReplacement: string = `${options.replace}${indexString},`
      const newFileContents: string = fileContents.replace(options.regex, fullReplacement)
      indexCount++
      fs.writeFileSync(`${sourcePath}/${options.directory}/${file}`, newFileContents)
    }
  })
  indexCount--
}

const reindexProject: Function = (): void => {
  reindexFiles(manikinOptions)
  reindexFiles(memoryOptions)
  reindexFiles(serviceMiteOptions)
  reindexFiles(networkMiteOptions)
  reindexFiles(ldifMiteOptions)
  reindexFiles(customMiteOptions)
}

reindexProject()
