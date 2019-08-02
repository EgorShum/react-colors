import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-5px',
    '&:hover svg': {
      color: 'white',
    }
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0',
    bottom: '0',
    padding: '10px',
    color: 'rgba(0,0,0,0.5)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  deleteIcon: {
    color: 'rgba(0,0,0,0.5)',
    transition: 'all .3s ease-out',
    '&:hover': {
      transform: 'scale(1.5)'
    }
  }
}

const DraggableColorBox = ({classes, color, name, handleDelete}) => {
  return (
    <div
      className={classes.root}
      style={{backgroundColor: color}}
    >
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={handleDelete}
        />
      </div>

    </div>
  )
}

export default withStyles(styles)(SortableElement(DraggableColorBox))