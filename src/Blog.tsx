import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import FeaturedPost from "./components/FeaturedPost";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Post } from "./models/post";

const featuredPosts: Post[] = [
  {
    title: "iOS App - COMING SOON",
    date: "2023/8/1",
    description: "An iOS app to read this website's content more comfortably!",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
  // {
  //   title: 'Post title',
  //   date: 'Nov 11',
  //   description:
  //     'This is a wider card with supporting text below as a natural lead-in to additional content.',
  //   image: 'https://source.unsplash.com/random?wallpapers',
  //   imageLabel: 'Image Text',
  // },
];

console.log("PUBLIC URL: ", process.env.PUBLIC_URL);

const posts = [
  "/posts/blog-post.1.md",
  "/posts/blog-post.2.md",
  "/posts/blog-post.3.md",
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
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
