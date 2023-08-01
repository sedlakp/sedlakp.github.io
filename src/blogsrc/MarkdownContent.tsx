import * as React from 'react';
import Markdown from 'markdown-to-jsx';
// import ReactMarkdown from 'react-markdown';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';

function MarkdownListItem(props: any) {
  return <Box component="li" sx={{ mt: 1, typography: 'body1' }} {...props} />;
}

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h4',
        component: 'h1',
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h6', component: 'h2' },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'subtitle1' },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'caption',
        paragraph: true,
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: Link },
    li: {
      component: MarkdownListItem,
    },
  },
};

export default function MarkdownContent(props: any) {
  let [ content, setContent] = useState({md: ""});

  useEffect(()=> {
    fetch(props.children)
        .then((res) => res.text())
        .then((md) => {
            setContent({ md })
        })
}, [])

  return <Markdown options={options} children={content.md}/>;
}
