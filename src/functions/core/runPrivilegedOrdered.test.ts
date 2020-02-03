/* eslint-disable no-unused-expressions */
import { runOrdered } from './runOrdered';
import { runPrivilegedOrdered } from './runPrivilegedOrdered';

it(`should return ls for this directory`, () => {
  expect(runOrdered('ls', ['-la', '/root'])).toThrowError;
  expect(runPrivilegedOrdered('ls', ['-la', '/root'])).toReturn;
});
