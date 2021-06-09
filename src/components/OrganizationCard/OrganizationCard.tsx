import * as React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Tooltip,
  Typography
} from '@material-ui/core'
import IOrbOrganizationAccount from '../../interfaces/account-types/IOrbOrganizationAccount'
import IOrbPersonalAccount from '../../interfaces/account-types/IOrbPersonalAccount'

const OrganizationCard: React.FC<IOrbOrganizationAccount> = (
  props: IOrbOrganizationAccount
): JSX.Element => {
  props.org.accounts = [
    props.org.owner,
    ...props.org.admins,
    ...props.org.users
  ]

  return (
    <Card style={{ width: 250, height: 440 }}>
      <CardActionArea>
        <CardMedia
          style={{
            borderRadius: `50%`,
            objectFit: `contain`
          }}
          component='img'
          alt={`${props.org.orgName} thumbnail`}
          src={props.org.orgIcon}
        />
        <Typography
          gutterBottom
          variant='h5'
          component='h2'
          style={{ textAlign: `center`, paddingTop: `5px` }}>
          {props.org.orgName}
        </Typography>
      </CardActionArea>
      <CardContent>
        <Grid container direction='row' spacing={3}>
          <Grid item xs>
            {props.org.accounts && props.org.accounts.length > 0
              ? props.org.accounts.map((eachAccount: IOrbPersonalAccount) => (
                  <Tooltip
                    title={`Name: ${eachAccount.user.firstName.fixed} ${eachAccount.user.lastName.fixed} 
Title: ${eachAccount.user.title}`}>
                    <img
                      style={{
                        borderRadius: `50%`,
                        objectFit: `contain`,
                        padding: `1px`
                      }}
                      alt={`${eachAccount.user.firstName} thumbnail`}
                      width={25}
                      height={25}
                      src={eachAccount.user.userIcon}
                    />
                  </Tooltip>
                ))
              : null}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
export default OrganizationCard
