import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import FeaturedPost from "./components/FeaturedPost";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Post } from "./models/post";
import { useEffect, useState } from "react";

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


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('posts.json')
      .then((r) => r.json())
      .then((data) => {
        setPosts(data.map((item: Post) => item.postUrl))
      })
  },[])

  return (
    <ThemeProvider theme={defaultTheme}>
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
  );
}
