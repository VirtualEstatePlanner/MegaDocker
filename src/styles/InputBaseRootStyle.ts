import { CSSProperties } from '@material-ui/styles';

const InputBaseRootStyle: CSSProperties = {
  color: `black`,
  borderRadius: `24px`,
  underline: {
    '&&&:before': {
      borderBottom: 'none',
    },
    '&&:after': {
      borderBottom: 'none',
    },
  },
  boxShadow: `inset -3px -3px 7px #ffffff, inset 3px 3px 5px #D8D8DB`,
  '&:hover': {
    borderRadius: `24px`,
    boxShadow: `7px 7px 15px #c2c2c5, -3px -3px 7px white`,
  },
  '&$focused': {
    borderRadius: `24px`,
    boxShadow: `7px 7px 15px #9B9B9E, -3px -3px 7px white`,
    '&:hover': {
      borderRadius: `24px`,
      boxShadow: `7px 7px 15px #9B9B9E, -3px -3px 7px white`,
    },
  },
};

export default InputBaseRootStyle;
