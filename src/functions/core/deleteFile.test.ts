import { deleteFile } from './deleteFile';
import { saveFile } from './saveFile';
import { checkForFile } from './checkForFile';

it(`should delete a file`, () => {
  console.log(checkForFile(`./`, `sometestfile.txt`));
  expect(checkForFile(`./`, `sometestfile.txt`)).toBeFalsy;
  saveFile(`./`, `sometestfile`, `txt`, `sometestfile needs contents`);
  console.log(checkForFile(`./`, `sometestfile.txt`));
  expect(checkForFile(`./`, `sometestfile.txt`)).toBeTruthy;
  deleteFile(`./`, `./sometestfile.txt`);
  console.log(checkForFile(`./`, `sometestfile.txt`));
  expect(checkForFile(`./`, `sometestfile.txt`)).toBeFalsy;
});
