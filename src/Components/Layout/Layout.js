import React from 'react';
import Aux from '../../HOC/Aux';
import classes from './layout.css';

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;
