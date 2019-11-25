import React from 'react';
import Aux from '../../HOC/Aux';
import classes from './layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
  <Aux>
    <Toolbar />
    <main className={classes.content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;
