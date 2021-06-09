import * as React from 'react'
import { ImageList, ImageListItem, makeStyles } from '@material-ui/core'
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

const itemData = [
  {
    img: RelaunchDay,
    title: 'Relaunch Day',
    author: 'Undraw'
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
    author: 'Undraw'
  },
  {
    img: ServerDown,
    title: 'Server Down',
    author: 'Undraw'
  },
  {
    img: SoftwareEngineer,
    title: 'Software Engineer',
    author: 'Undraw'
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
    author: 'Undraw'
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

const ImageListStandardBlock: React.FC = (): JSX.Element => {
  const classes = useStyles()

  return (
    <ImageList cols={3} rowHeight={164} className={classes.root}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format 1x,
                ${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default ImageListStandardBlock
