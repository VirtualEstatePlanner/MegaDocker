import { checkForFile } from './checkForFile';
it(`should check for package.json`, () => {
  expect(checkForFile(`${process.env.PWD}`, 'package.json')).toBeTruthy;
});
