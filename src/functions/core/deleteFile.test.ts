import { deleteFile } from './deleteFile';
import { saveFile } from './saveFile';
import { checkForFile } from './checkForFile';

it(`should delete a file`, () => {
  console.log(`checking for 'sometestfile.txt' in ${process.env.PWD}`);
  console.log(checkForFile(`${process.env.PWD}`, `sometestfile.txt`));
  expect(checkForFile(`${process.env.PWD}`, `sometestfile.txt`)).toBeFalsy;
  console.log(`saving 'sometestfile.txt' in ${process.env.PWD}`);
  saveFile(
    `${process.env.PWD}`,
    `sometestfile`,
    `txt`,
    `sometestfile needs contents`
  );
  console.log(`checking for 'sometestfile.txt' in ${process.env.PWD}`);
  console.log(checkForFile(`${process.env.PWD}`, `sometestfile.txt`));
  expect(checkForFile(`${process.env.PWD}`, `sometestfile.txt`)).toBeTruthy;
  console.log(`deleting 'sometestfile.txt' from ${process.env.PWD}`);
  deleteFile(`${process.env.PWD}`, `./sometestfile.txt`);
  console.log(`checking for 'sometestfile.txt' in ${process.env.PWD}`);
  console.log(checkForFile(`${process.env.PWD}`, `sometestfile.txt`));
  expect(checkForFile(`${process.env.PWD}`, `sometestfile.txt`)).toBeFalsy;
});
