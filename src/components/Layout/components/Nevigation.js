import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export const Navigation = (props) => {

  return (
    <Drawer variant="permanent">
      <List>
        <ListItem>Animal</ListItem>
      </List>
    </Drawer>
  );
};

export default Navigation;
