import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { DarkMode, GitHub, LightMode } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { AppTheme, ThemeContext } from './AppContexts';
import { Grid } from '@mui/material';
import {CardActionArea} from '@mui/material';

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const { title } = props;

  const {theme, setTheme} = useContext(ThemeContext)

  function themeButtonClicked() {
    setTheme(theme === AppTheme.Light ? AppTheme.Dark : AppTheme.Light)
  }

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', gap: 2 }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          // noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <Button color='inherit' href='https://github.com/sedlakp' variant='outlined' target="_blank">
          <GitHub></GitHub>
        </Button>
        <Button color='inherit' variant='outlined' onClick={themeButtonClicked}>
          {theme === AppTheme.Dark ? <DarkMode/> : <LightMode/>}
        </Button>
      </Toolbar>
      <Toolbar
        component='nav'
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
      </Toolbar>

      <Grid container sx={{borderRadius:'4px', overflow:'hidden'}}>
        <Grid container item xs={8}>
          <CardActionArea href='https://001300.xyz'>
            <Grid item xs={12} display='flex' alignItems='center' justifyContent='center' sx={{height:"30vh", background:'#D7FFD7'}}>
              <Typography fontFamily={"monospace"} fontSize='12vw' color="#496847" align='center' style={{letterSpacing:'1vw', lineHeight:'1'}}>13</Typography>
            </Grid>
          </CardActionArea>
          <CardActionArea href='https://008300.xyz'>
            <Grid item xs={12} display='flex' alignItems='center' justifyContent='center' sx={{height:"30vh", background:'#FFECD7'}}>
              <Typography fontFamily={"monospace"} fontSize='12vw' color="#685D47" align='center' style={{letterSpacing:'1vw', lineHeight:'1'}}>83</Typography>
            </Grid>
          </CardActionArea>
        </Grid>
        <Grid container item xs={4}>
          <CardActionArea href='https://003900.xyz'>
            <Grid item xs={12} display='flex' alignItems='center' justifyContent='center' sx={{height:"100%", background:'#D7D7FF'}}>
              <Typography fontFamily={"monospace"} fontSize='12vw' color="#474768" align='center' style={{letterSpacing:'1vw', lineHeight:'1'}}>39</Typography>
            </Grid>
          </CardActionArea>
        </Grid>
      </Grid>

      <Toolbar
        component='nav'
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
      </Toolbar>
    </React.Fragment>
  );
}
