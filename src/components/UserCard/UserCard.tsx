import * as React from 'react'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'
import IOrbPersonalAccount from '../../interfaces/account-types/IOrbPersonalAccount'

const UserCard: React.FC<IOrbPersonalAccount> = (
  props: IOrbPersonalAccount
): JSX.Element => (
  <Card
    sx={{
      display: `flex`,
      width: 250,
      minHeight: 100,
      maxHeight: 150
    }}>
    <CardActionArea
      sx={{
        display: `flex`
      }}
      style={{ overflow: `hidden` }}>
      <CardMedia
        sx={{ width: 100, height: 100, borderRadius: `50%` }}
        component='img'
        alt={`${props.user.firstName.fixed} thumbnail`}
        src={props.user.userIcon}
        title={`${props.user.firstName.fixed}`}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='div' variant='subtitle1'>
            {`${
              props.user.prefix.altForms
                ? props.user.prefix.fixed
                : props.user.prefix.fixed
            }
          ${props.user.firstName.fixed} ${props.user.lastName.fixed}
          ${props.user.suffix.fixed ? props.user.suffix.fixed : ``}`}{' '}
          </Typography>
          <Typography color='text.secondary' component='div' variant='overline'>
            {props.user.title ? `${props.user.title}` : null}{' '}
          </Typography>
        </CardContent>
      </Box>
    </CardActionArea>
  </Card>
)

export default UserCard
