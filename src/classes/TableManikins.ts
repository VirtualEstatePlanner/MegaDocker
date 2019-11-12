// import * as react from 'react';

import { emptyManikin, IManikin } from '@renderer/components/IManikin';
import {
  emptyManikinWithPorts,
  IManikinWithPorts
} from '@renderer/components/IManikinWithPorts';
import {
  emptyManikinWithPortsAndVariables,
  IManikinWithPortsAndVariables
} from '@renderer/components/IManikinWithPortsAndVariables';
import {
  emptyManikinWithVariables,
  IManikinWithVariables
} from '@renderer/components/IManikinWithVariables';

export const tableManikins:
  | IManikin[]
  | IManikinWithPorts[]
  | IManikinWithVariables[]
  | IManikinWithPortsAndVariables[] = [
  emptyManikin,
  emptyManikinWithPorts,
  emptyManikinWithVariables,
  emptyManikinWithPortsAndVariables
];
