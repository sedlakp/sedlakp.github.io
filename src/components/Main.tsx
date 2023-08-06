import * as React from 'react';
import MarkdownContent from './MarkdownContent';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Post } from '../models/post';
import { Grid } from '@mui/material';

interface MainProps {
  posts: ReadonlyArray<Post>;
}

export default function Main(props: MainProps) {
  const { posts} = props;

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {posts.map((post) => (
        <Accordion key={post.postUrl!.substring(0, 40)} expanded={expanded === post.postUrl!.substring(0, 40)} onChange={handleChange(post.postUrl!.substring(0, 40))}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              {post.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container justifyContent={'center'}>
              <Grid item xs={12} md={8} >
                <MarkdownContent>
                  {post.postUrl}
                </MarkdownContent>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
