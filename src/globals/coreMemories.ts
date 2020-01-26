import { IMemory } from '../interfaces/IMemory';
import { mobName } from '../mobparts/memories/mobName';
import { cloudflareAPIKey } from '../mobparts/memories/cloudflareAPIKey';
import { cloudflareEmail } from '../mobparts/memories/cloudflareEmail';
import { letsEncryptEmail } from '../mobparts/memories/letsEncryptEmail';
import { primaryDomain } from '../mobparts/memories/primaryDomain';
import { secondaryDomain } from '../mobparts/memories/secondaryDomain';

export const coreMemories: IMemory[] = [
  mobName,
  cloudflareAPIKey,
  cloudflareEmail,
  letsEncryptEmail,
  primaryDomain,
  secondaryDomain
];
