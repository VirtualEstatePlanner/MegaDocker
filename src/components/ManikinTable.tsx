import React from "react";
import Switch from "@material-ui/core/Switch";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import { megaReducer } from "../functions/reducers/megaReducer";
import { IMegaDockerState } from "../interfaces/IMegaDockerState";
import { Store } from "../components/Store";
import { Tooltip } from "@material-ui/core";

interface IColumn {
    name: string,
    label: string,
}
export const ManikinTable: React.FC = (props: any): React.ReactElement => {
    const columns: IColumn[] = [
        { name: "name", label: "Manikin" },
        { name: "icon", label: "" },
        { name: "isSelected", label: "Choose" }
    ]
    const store: IMegaDockerState = React.useContext(Store)

    const handleCheckboxChange = (firstValue: boolean): boolean => {
        let outputValue: boolean = !firstValue
        return outputValue
    }
    return (
        <Store.Provider value={store}>{props.children}
            <React.Suspense fallback={<div>...loading</div>}>
                <Table className="ManikinTable" size="small" stickyHeader>
                    <TableHead className="ManikinTableHeader">
                        <TableRow>
                            {columns.map(column => (
                                <TableCell
                                    key={column.name}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody className="ManikinTableBody">
                        {store.manikinTableContents.map(eachManikin => (
                            <TableRow
                                key={eachManikin.name}
                                className={eachManikin.isCore ? "CoreManikinRow" : "ManikinRow"}
                                hover={eachManikin.isCore ? false : true}>
                                <Tooltip title={eachManikin.description}>
                                    <TableCell key={eachManikin.name}>
                                        {eachManikin.name}</TableCell>
                                </Tooltip>
                                <TableCell key={eachManikin.manikinIcon}>
                                    <img alt={eachManikin.name}
                                        src={eachManikin.manikinIcon}
                                        height="20"
                                        width="20" />
                                </TableCell>
                                <TableCell key={`${eachManikin.name} checkbox`}><Switch
                                    checked={eachManikin.isSelected}
                                    disabled={eachManikin.isCore ? true : false}
                                    onChange={(): boolean => handleCheckboxChange(eachManikin.isSelected)} />
                                </TableCell>
                            </TableRow>))}
                    </TableBody>
                </Table>
            </React.Suspense >
        </Store.Provider >
    )
}
// contentEditable={eachManikin.isCore ? false : true}