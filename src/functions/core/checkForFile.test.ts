import { checkForFile } from './checkForFile';
it(`should check for a file in a certain directory`, () => {
  console.log(`checking for 'package.json' file in ${process.env.PWD}`);
  console.log(checkForFile(`${process.env.PWD}`, 'package.json'));
  expect(checkForFile(`${process.env.PWD}`, 'package.json')).toBeTruthy;
});
