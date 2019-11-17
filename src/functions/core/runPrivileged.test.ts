import { runPrivileged } from './runPrivileged';
import { run } from './run';

it(`should return ls for /root`, () => {
  expect(run('ls', ['-la', '/root'])).toThrowError;
  expect(runPrivileged('ls', ['-la', '/root'])).toReturn;
});
