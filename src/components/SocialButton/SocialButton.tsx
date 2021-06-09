import * as React from 'react'
import { Button } from '@material-ui/core'
import IOrbSocialButton from '../../interfaces/external-services/IOrbSocialButton'

const SocialButton: React.FC<IOrbSocialButton> = (props: IOrbSocialButton) => (
  <Button
    color={'inherit'}
    size={'small'}
    href={`${props.account.link}`}
    target={`_blank`}>
    <img
      src={
        props.buttonFill === `hollow`
          ? props.buttonShape === `circle`
            ? props.account.platform.icon.hollowCircle
            : props.account.platform.icon.hollowSquare
          : props.buttonShape === `circle`
          ? props.account.platform.icon.solidCircle
          : props.account.platform.icon.solidSquare
      }
      alt={props.account.platform.name}
    />
  </Button>
)

export default SocialButton
