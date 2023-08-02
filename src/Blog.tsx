import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import FeaturedPost from "./components/FeaturedPost";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Post } from "./models/post";
import { useEffect, useState} from "react";
import { darkTheme, lightTheme } from "./components/Themes";
import { AppTheme, ThemeContext } from "./components/AppContexts";

const LOCAL_STORAGE_THEME_KEY = "blog-theme"

const featuredPosts: Post[] = [
  {
    title: "iOS App - COMING SOON",
    date: "2023/8/1",
    description: "An iOS app to read this website's content more comfortably!",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
];

console.log("PUBLIC URL: ", process.env.PUBLIC_URL);

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
        setPosts(data.map((item: Post) => item.postUrl))
      })
  },[])

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <ThemeProvider theme={theme === AppTheme.Light ? lightTheme : darkTheme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="ピーターのゴミ置き場" />
          <main>
            <Grid container spacing={4} justifyContent={"center"}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            <Grid container justifyContent="center" spacing={5} sx={{ mt: 3 }}>
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
