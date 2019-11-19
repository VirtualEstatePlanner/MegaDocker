import { tmpdir } from 'os';

/**
 * shortcut to the "/tmp" folder or equivalent
 */
export const tempFolder: string = tmpdir.toString();
