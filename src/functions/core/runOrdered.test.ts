import { runOrdered } from './runOrdered';

it(`should return ls for this directory`, () => {
  // eslint-disable-next-line no-unused-expressions
  expect(runOrdered('ls', ['-la'])).toReturn;
});
