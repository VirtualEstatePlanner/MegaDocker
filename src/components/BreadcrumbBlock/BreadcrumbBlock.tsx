/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import { Breadcrumbs, Link, Typography } from '@material-ui/core'

const handleClick: Function = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {}

const BreadcrumbBlock: React.FC = (): JSX.Element => {
  return (
    <Breadcrumbs maxItems={2} aria-label='breadcrumb'>
      <Link color='inherit' href='#' onClick={handleClick()}>
        orb.run
      </Link>
      <Link color='inherit' href='#' onClick={handleClick()}>
        to
      </Link>
      <Link color='inherit' href='#' onClick={handleClick()}>
        amazon
      </Link>
      <Link color='inherit' href='#' onClick={handleClick()}>
        doomsday
      </Link>
      <Typography color='textPrimary'>us.run</Typography>
    </Breadcrumbs>
  )
}

export default BreadcrumbBlock
