import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {Container, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
import Header from '../../components/Header';
import MainFeatured from '../../components/MainFeatured';
import Featured from '../../components/Featured';
import Main from '../../components/Main';
import 'fontsource-roboto';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © KashTracker 2020'}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Home() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: "white"
    },
    link: {
      textDecoration: 'none'
    },
    mainGrid: {
      marginTop: theme.spacing(3),
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
  }));

  const classes = useStyles();
 
  const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
  ]

  const mainFeaturedPost = {
    title: 'What is KashTracker, and how does it work?',
    description:
      "When you’re on top of your money, life is good. We help you effortlessly manage your finances in one place. The more   accounts you link, the more we can do for you.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
  }

  const featuredPosts = [
    {
      title: 'See everything in one place',
      date: 'July 10th 2020',
      description:
        'We bring together everything from balances and bills to your credit score and more. It’s your financial life, in one place that’s easy to understand',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      title: 'Simple and free to set up',
      date: 'Nov 11',
      description:
        'It’s free and easy to get started, and we connect to almost every US financial institution connected to the internet.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
  ];

  return (
    <Container maxWidth="lg">
      <main>
        <Header title="Blog" sections={sections} />
        <Main/>
        <MainFeatured post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <Featured key={post.title} post={post} />
          ))}
        </Grid>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          KashTracker
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          By accessing and using this page you agree to the Terms and Conditions.
        </Typography>
        <Copyright />
      </footer>
    </Container>
  );
}

export default Home;
