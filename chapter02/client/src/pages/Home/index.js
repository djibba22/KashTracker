import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Switcher from '@material-ui/core/Switch';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from '../../components/Header';
import MainFeaturedPost from '../../components/MainFeaturedPost';
import FeaturedPost from '../../components/FeaturedPost';
import Main from '../../components/Main';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

import 'fontsource-roboto';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import post1 from '../../blog-post.1.md';
import post2 from '../../blog-post.2.md';
import post3 from '../../blog-post.3.md';




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
      color:"white"
    },
    link:{
      textDecoration:'none'
    },
    mainGrid: {
      marginTop: theme.spacing(3),
    },
  }));
  
  
  
  
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleClick = () => {
      //Todo Make this thing do something
    };
    const [value, setValue] = React.useState(0);
  
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
        title: 'Featured post',
        date: 'Nov 12',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
      },
      {
        title: 'Post title',
        date: 'Nov 11',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
      },
    ];
  
    const posts = [post1, post2, post3];
  
    const sidebar = {
      title: 'About',
      description:
        'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
      archives: [
        { title: 'March 2020', url: '#' },
        { title: 'February 2020', url: '#' },
        { title: 'January 2020', url: '#' },
        { title: 'November 1999', url: '#' },
        { title: 'October 1999', url: '#' },
        { title: 'September 1999', url: '#' },
        { title: 'August 1999', url: '#' },
        { title: 'July 1999', url: '#' },
        { title: 'June 1999', url: '#' },
        { title: 'May 1999', url: '#' },
        { title: 'April 1999', url: '#' },
      ],
      social: [
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'Twitter', icon: TwitterIcon },
        { name: 'Facebook', icon: FacebookIcon },
      ],
    };

  return (
    <Container maxWidth="lg">
      <main>
        <Header title="Blog" sections={sections} />
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Main title="From the firehose" posts={posts} />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
            key={sidebar.title}
          />
        </Grid>
      </main>
    </Container>
  );
}

export default Home;
