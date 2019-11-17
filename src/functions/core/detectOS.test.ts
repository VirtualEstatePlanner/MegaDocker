import { detectOS } from './detectOS';

it(`should return the host operating system`, () => {
  console.log(`checking OS information`);
  const OSinfo = detectOS();
  expect(OSinfo.length).toStrictEqual(2);
  console.log(`value of OS type: ${OSinfo[0]}`);
  expect(OSinfo[0]).toBeTruthy;
  console.log(`value of OS architecture: ${OSinfo[1]}`);
  expect(OSinfo[1]).toBeTruthy;
});
