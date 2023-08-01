import * as React from 'react';
import Grid from '@mui/material/Grid';
import MarkdownContent from './MarkdownContent';

interface MainProps {
  posts: ReadonlyArray<string>;
}

export default function Main(props: MainProps) {
  const { posts} = props;

  return (
    <Grid
      container
      item
      spacing={6}
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      {posts.map((post) => (
        <Grid item key={post.substring(0, 40)}>
          <MarkdownContent className="markdown">
            {post}
          </MarkdownContent>
        </Grid>
      ))}
    </Grid>
  );
}
