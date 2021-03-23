import * as React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © Guillermo Parra '}      
      {new Date().getFullYear()}.
    </Typography>
  );
}

/*
import MuiLink from '@material-ui/core/Link';
<MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
</MuiLink>{' '}
*/