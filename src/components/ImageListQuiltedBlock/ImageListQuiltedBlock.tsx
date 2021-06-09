import * as React from 'react'
import { makeStyles, ImageList, ImageListItem } from '@material-ui/core'
import LaunchDay from '../../images/GridListImageBlockExamples/undraw_launch_day_4e04.png'
import RelaunchDay from '../../images/GridListImageBlockExamples/undraw_relaunch_day_902d.png'
import Remotely from '../../images/GridListImageBlockExamples/undraw_remotely_2j6y.png'
import ServerCluster from '../../images/GridListImageBlockExamples/undraw_server_cluster_jwwq.png'
import ServerDown from '../../images/GridListImageBlockExamples/undraw_server_down_s4lk.png'
import SoftwareEngineer from '../../images/GridListImageBlockExamples/undraw_software_engineer_lvl5.png'
import ToTheMoon from '../../images/GridListImageBlockExamples/undraw_to_the_moon_v1mv.png'
import Unicorn from '../../images/GridListImageBlockExamples/undraw_unicorn_dp2f.png'
import Upgrade from '../../images/GridListImageBlockExamples/undraw_upgrade_06a0.png'
import WorkTime from '../../images/GridListImageBlockExamples/undraw_Work_time_re_hdyv.png'
import WorkingFromAnywhere from '../../images/GridListImageBlockExamples/undraw_working_from_anywhere_ub67.png'

const useStyles = makeStyles({
  root: {
    width: 500,
    height: 450
  }
})

const srcset: Function = (
  image: string,
  size: number,
  rows = 1,
  cols = 1
): String =>
  `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format 1x,
  ${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`

const itemData = [
  {
    img: RelaunchDay,
    title: 'Relaunch Day',
    author: 'Undraw',
    rows: 2,
    cols: 2
  },
  {
    img: LaunchDay,
    title: 'Launch Day',
    author: 'Undraw'
  },
  {
    img: Remotely,
    title: 'Remotely',
    author: 'Undraw'
  },
  {
    img: ServerCluster,
    title: 'Server Cluster',
    author: 'Undraw',
    cols: 2
  },
  {
    img: ServerDown,
    title: 'Server Down',
    author: 'Undraw',
    cols: 2
  },
  {
    img: SoftwareEngineer,
    title: 'Software Engineer',
    author: 'Undraw',
    rows: 2,
    cols: 2
  },
  {
    img: ToTheMoon,
    title: 'To The Moon',
    author: 'Undraw'
  },
  {
    img: Unicorn,
    title: 'Unicorn',
    author: 'Undraw'
  },
  {
    img: Upgrade,
    title: 'Upgrade',
    author: 'Undraw',
    rows: 2,
    cols: 2
  },
  {
    img: WorkTime,
    title: 'Work Time',
    author: 'Undraw'
  },
  {
    img: WorkingFromAnywhere,
    title: 'Working From Anywhere',
    author: 'Undraw'
  }
]

const ImageListQuiltedBlock: React.FC = (): JSX.Element => {
  const classes = useStyles()

  return (
    <ImageList
      variant='quilted'
      cols={4}
      rowHeight={121}
      className={classes.root}>
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}>
          <img
            srcSet={srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default ImageListQuiltedBlock
