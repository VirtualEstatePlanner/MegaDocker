import { detectOS } from './detectOS';

it(`should return the host operating system`, () => {
  const OSinfo = detectOS();
  expect(OSinfo.length).toStrictEqual(2);
  expect(OSinfo[0]).toBeTruthy;
  expect(OSinfo[1]).toBeTruthy;
});
