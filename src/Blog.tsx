import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useEffect, useState} from "react";
import { darkTheme, lightTheme } from "./components/Themes";
import { AppTheme, ThemeContext } from "./components/AppContexts";
import { Typography } from "@mui/material";

const LOCAL_STORAGE_THEME_KEY = "blog-theme"

export default function Blog() {
  
  function getTheme(): AppTheme {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ?? AppTheme.Light
    return savedTheme === AppTheme.Light ? AppTheme.Light : AppTheme.Dark
  }

  const [posts, setPosts] = useState([])
  const [theme, setTheme] = useState(getTheme())

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
  }, [theme])


  useEffect(() => {
    fetch('posts.json')
      .then((r) => r.json())
      .then((data) => {
        setPosts(data)
      })
  },[])

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <ThemeProvider theme={theme === AppTheme.Light ? lightTheme : darkTheme}>
        <CssBaseline />
        <Container maxWidth="lg" >
          <Header title="ピーターのゴミ置き場" />
          <main>
            <Typography fontWeight={'bold'} align="center">
            POSTS
            </Typography>
            <Grid container spacing={0} sx={{ mt: 3, mb: 3 }}>
              <Main posts={posts} />
            </Grid>
          </main>
        </Container>
        <Footer
          title="No more stuff here! You've seen all of it!"
          description=""
        />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
