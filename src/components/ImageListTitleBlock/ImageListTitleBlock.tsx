import * as React from 'react'
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  makeStyles
} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import LaunchDay from '../../images/GridListImageBlockExamples/undraw_launch_day_4e04.png'
import RelaunchDay from '../../images/GridListImageBlockExamples/undraw_relaunch_day_902d.png'
import Remotely from '../../images/GridListImageBlockExamples/undraw_remotely_2j6y.png'
import ServerCluster from '../../images/GridListImageBlockExamples/undraw_server_cluster_jwwq.png'
import ServerDown from '../../images/GridListImageBlockExamples/undraw_server_down_s4lk.png'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import SoftwareEngineer from '../../images/GridListImageBlockExamples/undraw_software_engineer_lvl5.png'
import ToTheMoon from '../../images/GridListImageBlockExamples/undraw_to_the_moon_v1mv.png'
import Unicorn from '../../images/GridListImageBlockExamples/undraw_unicorn_dp2f.png'
import Upgrade from '../../images/GridListImageBlockExamples/undraw_upgrade_06a0.png'
import WorkTime from '../../images/GridListImageBlockExamples/undraw_Work_time_re_hdyv.png'
import WorkingFromAnywhere from '../../images/GridListImageBlockExamples/undraw_working_from_anywhere_ub67.png'

const useStyles = makeStyles({
  root: {
    width: 500,
    height: 450,
    // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  icon: {
    color: 'white'
  }
})

const srcset: Function = (
  image: string,
  width: number,
  height: number,
  rows = 1,
  cols = 1
): String =>
  `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format 1x,
  ${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format&dpr=2 2x`

const itemData = [
  {
    img: RelaunchDay,
    title: 'Relaunch Day',
    author: 'Undraw',
    featured: 'true'
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
    featured: 'true'
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
    author: 'Undraw',
    featured: 'true'
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
    author: 'Undraw',
    featured: 'true'
  },
  {
    img: WorkingFromAnywhere,
    title: 'Working From Anywhere',
    author: 'Undraw'
  }
]

const ImageListTitleBlock: React.FC = (): JSX.Element => {
  const classes = useStyles()

  return (
    <ImageList rowHeight={200} gap={1} className={classes.root}>
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1
        const rows = item.featured ? 2 : 1

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              srcSet={srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
            />
            <ImageListItemBar
              title={item.title}
              position='top'
              actionIcon={
                <IconButton
                  aria-label={`star ${item.title}`}
                  className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition='left'
              className={classes.titleBar}
            />
          </ImageListItem>
        )
      })}
    </ImageList>
  )
}

export default ImageListTitleBlock
