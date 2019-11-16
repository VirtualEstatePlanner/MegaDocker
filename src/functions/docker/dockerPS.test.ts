import { dockerPS } from './dockerPS';

it(`should show running containers on this host`, () => {
  expect(dockerPS).toHaveReturned;
});
