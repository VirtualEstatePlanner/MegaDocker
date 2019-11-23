import { userInfo } from 'os';
import { hostUsername } from './hostUsername';

const testString: string = userInfo().username;
it(`should be the username`, () => {
  expect(testString === hostUsername).toBeTruthy;
});
