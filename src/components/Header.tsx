import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { DarkMode, GitHub, LightMode } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { ThemeContext } from './AppContexts';
import { darkTheme, lightTheme } from './Themes';


interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const { title } = props;

  const {theme, setTheme} = useContext(ThemeContext)

  function themeButtonClicked() {
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
  }

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', gap: 2 }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <Button color='primary' href='https://github.com/sedlakp' variant='outlined' target="_blank">
          <GitHub></GitHub>
        </Button>
        <Button color='primary' variant='outlined' onClick={themeButtonClicked}>
          {theme === darkTheme ? <DarkMode/> : <LightMode/>}
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
      </Toolbar>
    </React.Fragment>
  );
}
