import { run } from './run';

it(`should return ls for this directory`, () => {
  expect(run('ls', ['-la'])).toReturn;
});
