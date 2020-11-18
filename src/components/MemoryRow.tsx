import React from "react";
import Input from "@material-ui/core/Input"
import PropTypes from 'prop-types';
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import * as checkmarkIcon from "../images/indicators/checkmarkIcon.png"
import * as xmarkIcon from "../images/indicators/xmarkIcon.png"
import classes from "*.module.css";

const Inputs = (props: any) => {
    const { classes } = props;
    return (
      <div className={classes.container}>
        <Input
          className={classes.input}
          classes={{ focused: classes.inputFocused}}
        />
      </div>
    );
  }

Inputs.propTypes = {
    classes: PropTypes.object.isRequired,
};


export const MemoryRow: React.FC = (): React.ReactElement => {
    const [memoryValue, setMemoryValue]: [string | undefined, React.Dispatch<React.SetStateAction<string | undefined>>] = React.useState();
    return (
        <TableRow className="MemoryRow" hover>
            <TableCell>IMemory.name</TableCell>
            <TableCell><Input className={classes.input} classes={{ focused: classes.inputFocused }} value={memoryValue} placeholder="IMemory.value" onChange={changeEvent => setMemoryValue(changeEvent.target.value)} /* size={50} */ /></TableCell>
            <TableCell>IMemory.tooltip</TableCell>
            <TableCell><img alt='ready indicator' height={20} width={20} src={memoryValue ? checkmarkIcon : xmarkIcon} /></TableCell>
        </TableRow>)
}