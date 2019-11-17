import { saveFile } from './saveFile';
import { checkForFile } from './checkForFile';
import { deleteFile } from './deleteFile';
it(`should save a file to disk`, () => {
  console.log(`checking for 'tesfilename.txt' in ${process.env.PWD}`);
  console.log(checkForFile(`${process.env.PWD}`, `testfilename.txt`));
  console.log(`saving 'tesfilename.txt' in ${process.env.PWD}`);
  expect(checkForFile(`${process.env.PWD}`, `testfilename.txt`)).toBeFalsy;
  saveFile(
    `${process.env.PWD}`,
    `testfilename`,
    `txt`,
    `so what the hell does this file even say?`
  );
  console.log(`checking for 'tesfilename.txt' in ${process.env.PWD}`);
  console.log(checkForFile(`${process.env.PWD}`, `testfilename.txt`));
  expect(checkForFile(`${process.env.PWD}`, `testfilename.txt`)).toBeTruthy;
  console.log(`deleting 'tesfilename.txt' from ${process.env.PWD}`);
  deleteFile(`${process.env.PWD}`, `testfilename.txt`);
  console.log(`checking for 'tesfilename.txt' in ${process.env.PWD}`);
  console.log(checkForFile(`${process.env.PWD}`, `testfilename.txt`));
  expect(checkForFile(`${process.env.PWD}`, `testfilename.txt`)).toBeFalsy;
});
