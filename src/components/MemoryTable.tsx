import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
} from '@material-ui/core';
import checkmarkIndicator from '../images/indicators/checkmarkIndicator.png';
import circleIndicator from '../images/indicators/circleIndicator.png';
import { MegaContext } from './MegaContext';
import { IMegaDockerState } from '../interfaces/IMegaDockerState';
import { IMemory } from '../interfaces/IMemory';
import { IUpdateMemoryValueAction } from '../interfaces/actionInterfaces/IUpdateMemoryValueAction';
import { IMegaDockerAction } from '../interfaces/IMegaDockerAction';

/**
 * generates the memories table
 * @param props the component props
 */
export const MemoryTable: React.FC<any> = (props: any): React.ReactElement => {
  const {
    state,
    dispatch,
  }: {
    state: IMegaDockerState;
    dispatch: React.Dispatch<IMegaDockerAction>;
  } = React.useContext(MegaContext);

  const fullyValidated: boolean = state.memories.every(
    (memory) => memory.isReady
  );

  const sortedMemories: IMemory[] = state.memories.sort(
    (a: IMemory, b: IMemory) => a.name.localeCompare(b.name)
  );

  /**
   *  generates the payload to reduce
   * @param memory the IMemory that will be reduced against the state
   * @param newValue the IMemory.value to reduce against
   */
  const createMemoryValueAction = (
    memoryToUpdate: IMemory,
    newValue: string
  ): IUpdateMemoryValueAction => {
    return {
      type: `UPDATE_MEMORY_VALUE`,
      payload: {
        memory: memoryToUpdate,
        value: newValue,
      },
    };
  };

  return (
    <div
      style={{
        width: '100%',
      }}>
      <Table className='MemoryTable' size='small' stickyHeader>
        <TableHead>
          <TableRow className='MemoryHeaderRow'>
            <TableCell size='small' variant='head' style={{ width: '15%' }}>
              Settings
            </TableCell>
            <TableCell size='small' variant='head' style={{ width: '80%' }} />
            <TableCell size='small' variant='head' style={{ width: '5%' }}>
              <img
                alt=''
                src={fullyValidated ? checkmarkIndicator : circleIndicator}
                height='25vh'
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          className='MemoryTableBody'
          style={{
            width: '100%',
          }}>
          {sortedMemories.map((thisMemory: IMemory) => (
            <Tooltip title={thisMemory.tooltip} key={thisMemory.memoryIndex}>
              <TableRow hover>
                <TableCell
                  style={{ width: '1%' }}
                  padding='checkbox'
                  variant='body'
                  size='small'>
                  {thisMemory.name}
                </TableCell>
                <TableCell variant='body' style={{}} size='small'>
                  <TextField
                    fullWidth
                    size='small'
                    required={true}
                    value={thisMemory.value}
                    type={thisMemory.valueType}
                    placeholder={`Please enter your ${thisMemory.name} here`}
                    autoComplete={thisMemory.shouldAutocomplete.toString()}
                    onChange={(changeEvent) =>
                      dispatch(
                        createMemoryValueAction(
                          thisMemory,
                          changeEvent.target.value
                        )
                      )
                    }
                  />
                </TableCell>
                <TableCell
                  style={{ width: '5%' }}
                  className='ManikinReadyIcon'
                  variant='body'
                  size='small'>
                  <img
                    alt='ready indicator'
                    height='25vh'
                    src={
                      thisMemory.value === ``
                        ? circleIndicator
                        : thisMemory.validator(thisMemory.value).valueOf()
                        ? checkmarkIndicator
                        : circleIndicator
                    }
                  />
                </TableCell>
              </TableRow>
            </Tooltip>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
