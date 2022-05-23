import {createTheme} from '@mui/material';
import createCache from '@emotion/cache';

// prepend: true moves MUI styles to the
// top of the <head> so they're loaded first.
// It allows developers to easily override MUI
// styles with other styling solutions, like CSS modules.
export const createEmotionCache = () => {
  return createCache({key: 'btd-css', prepend: true});
};

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4a6fa5',
    },
    secondary: {
      main: '#ee92c2',
    },
    error: {
      main: '#c3423f',
    },
    success: {
      main: '#337357',
    },
    background: {
      default: '#fefefe',
    },
  },
});
