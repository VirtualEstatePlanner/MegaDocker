import * as React from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  Divider,
  List,
  Typography
} from '@material-ui/core'
import IOrbBundle from '../../interfaces/orbs/IOrbBundle'
import IOrbService from '../../interfaces/orbs/IOrbService'

const OrbBundleCard: React.FC<IOrbBundle> = (
  props: IOrbBundle
): JSX.Element => (
  <Card sx={{ display: `flex`, justifyContent: `center`, width: `250px` }}>
    <Box sx={{ display: `flex`, flexDirection: `column` }}>
      <Typography
        component='h2'
        variant='h4'
        align='center'
        paddingTop='5%'
        paddingBottom='5%'>
        {props.orb.title}
      </Typography>
      <Divider variant='middle' />
      <Typography
        color='text.secondary'
        component='h3'
        variant='h3'
        align='center'
        paddingLeft='5%'
        paddingRight='5%'
        paddingTop='5%'>
        {' '}
        ${props.orb.pricePerUserBilledAnnually}
      </Typography>
      <Typography
        color='text.secondary'
        variant='caption'
        align='center'
        padding='1%'>
        /user /mo billed annually
      </Typography>
      <Typography
        color='text.secondary'
        component='h3'
        variant='caption'
        align='center'
        padding='1%'
        paddingBottom='5%'>
        or ${props.orb.pricePerUserBilledMonthly}{' '}
        <Typography variant='caption'>/user billed monthly</Typography>
      </Typography>
      <Divider variant='middle' />
      <Typography color='text.secondary' variant='body1' align='center'>
        {props.orb.serviceBundle && props.orb.serviceBundle.length > 0
          ? props.orb.serviceBundle.map((serviceBundle: IOrbService) => [
              <List>{serviceBundle.name}</List>
            ])
          : null}
      </Typography>
      <Divider variant='middle' />
      <Typography variant='body1' align='center' paddingTop='5%'>
        Try {props.orb.freeTrialDays} days on us
      </Typography>
      <CardActions style={{ alignItems: `center`, justifyContent: `center` }}>
        <Button variant='contained' color='secondary' size='large'>
          Go{' '}
        </Button>
      </CardActions>
    </Box>
  </Card>
)

export default OrbBundleCard
