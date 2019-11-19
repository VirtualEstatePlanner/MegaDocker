import { runOrdered } from './runOrdered';

it(`should return ls for this directory`, () => {
  expect(runOrdered('ls', ['-la'])).toReturn;
});
