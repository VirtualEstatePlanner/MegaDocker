import { checkForFile } from './checkForFile';
it(`should check for a file in a certain directory`, () => {
  console.log(checkForFile('./', 'checkForFile.ts'));
  expect(checkForFile('./', 'checkForFile.ts')).toBeTruthy;
});
