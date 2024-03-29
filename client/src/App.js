import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import Amber from '@material-ui/core/colors/amber';
import Cyan from '@material-ui/core/colors/cyan';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Appbar from './components/layout/Appbar';
import Home from './components/home/Home';
import Shop from './components/Shop/Shop';
import Cats from './components/categories/Categories';
import Post from './components/post/Post';
import About from './components/about/About';
import Login from './components/auth/Login';
import Footer from './components/layout/Footer';

const theme = createMuiTheme({
  palette:{
    primary: {main: Cyan['700'], dark: Cyan['900'], light: Cyan['50']},
    secondary: Amber,
  },
  direction: 'rtl',
  typography:{
    fontFamily: [
      'Parastoo',
      'Titrbold',
      'Nunito',
    ],
    h1: {
      fontSize: '3rem',
      '@media (min-width:600px)': {
        fontSize: '6rem',
      },
    }
  },
  direction: 'rtl',
});

const style = {
  fixed:{
    position: 'fixed',
    zIndex: 1000
  },
}

function App(props) {
  const { classes } = props;
  const [pageIndex, setPageIndex] = useState(-1);

  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column" justify="flex-start" alignItems="center">
        <Router>
          <Appbar className={classes.fixed} pageIndex={pageIndex} setPageIndex={setPageIndex}/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/about" exact component={About} />
            <Route path="/shop/categories" exact component={Cats} />
            <Route path="/shop/categories/:cat" exact component={Cats} />
            <Route path="/shop/post/:id" exact component={Post} />
            <Route path="/auth" exact component={Login} />
          </Switch>
        </Router>
        <Footer />
      </Grid>
    </ThemeProvider>
  );
}

export default withStyles(style)(App);
