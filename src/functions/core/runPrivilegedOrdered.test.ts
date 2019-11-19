import { runOrdered } from './runOrdered';
import { runPrivilegedOrdered } from './runPrivilegedOrdered';

expect(runOrdered('ls', ['-la', '/root'])).toThrowError;
expect(runPrivilegedOrdered('ls', ['-la', '/root'])).toReturn;
