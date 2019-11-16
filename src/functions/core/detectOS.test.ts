import { detectOS } from './detectOS';

it(`should return the host operating system`, () => {
  const OSinfo = detectOS();
  expect(OSinfo.length).toStrictEqual(2);
  console.log(OSinfo[0]);
  expect(OSinfo[0]).toBeTruthy;
  console.log(OSinfo[1]);
  expect(OSinfo[1]).toBeTruthy;
});
