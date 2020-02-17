import { mobName } from '../../memories/mobName';
import { mobFolderPath } from '../../memories/mobFolderPath';

export const mobFileHeaderString: string = `
# MegaDocker YML File
version: '3.7'

# Created by MegaDocker
# Data is stored at: ${mobFolderPath}
# Mob is named: ${mobName}

#Begin Services Section

services:
`;
