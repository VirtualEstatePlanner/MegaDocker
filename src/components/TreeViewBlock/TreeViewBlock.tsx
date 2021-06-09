import * as React from 'react'
import { Button, Theme, createStyles, makeStyles } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TreeView from '@material-ui/lab/TreeView'
import TreeItem from '@material-ui/lab/TreeItem'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 270,
      flexGrow: 1,
      maxWidth: 400
    },
    actions: {
      marginBottom: theme.spacing(1)
    }
  })
)

const TreeViewBlock: React.FC = (): JSX.Element => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState<string[]>([])
  const [selected, setSelected] = React.useState<string[]>([])

  // what is this event used for?
  const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds)
  }

  // what is this event used for?
  const handleSelect = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setSelected(nodeIds)
  }

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? ['1', '5', '6', '7'] : []
    )
  }

  const handleSelectClick = () => {
    setSelected((oldSelected) =>
      oldSelected.length === 0
        ? ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        : []
    )
  }

  return (
    <div className={classes.root}>
      <div className={classes.actions}>
        <Button variant='contained' onClick={handleExpandClick}>
          {expanded.length === 0 ? 'Expand all' : 'Collapse all'}
        </Button>
        <Button variant='contained' onClick={handleSelectClick}>
          {selected.length === 0 ? 'Select all' : 'Unselect all'}
        </Button>
      </div>
      <TreeView
        aria-label='controlled'
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
        multiSelect>
        <TreeItem nodeId='1' label='Applications'>
          <TreeItem nodeId='2' label='Calendar' />
          <TreeItem nodeId='3' label='Chrome' />
          <TreeItem nodeId='4' label='Webstorm' />
        </TreeItem>
        <TreeItem nodeId='5' label='Documents'>
          <TreeItem nodeId='6' label='Material-UI'>
            <TreeItem nodeId='7' label='src'>
              <TreeItem nodeId='8' label='index.js' />
              <TreeItem nodeId='9' label='tree-view.js' />
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeView>
    </div>
  )
}

export default TreeViewBlock
