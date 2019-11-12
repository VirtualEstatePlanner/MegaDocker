// import * as react from 'react';

import { emptyManikin, IManikin } from './IManikin';
import { emptyManikinWithPorts, IManikinWithPorts } from './IManikinWithPorts';
import {
  emptyManikinWithPortsAndVariables,
  IManikinWithPortsAndVariables
} from './IManikinWithPortsAndVariables';
import {
  emptyManikinWithVariables,
  IManikinWithVariables
} from './IManikinWithVariables';

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
