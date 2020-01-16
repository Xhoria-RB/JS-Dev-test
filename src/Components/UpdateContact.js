import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import UserContext from './UserContext';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function UpdateContact({ id, btnClass }) {
  const classes = useStyles();
  const { updateContact } = useContext(UserContext)
  const [user, setUser] = useState({})
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateContact(id, user);

  }

  return (
    <div>
      <Button
        variant="contained"
        color="default"
        aria-label="edit"
        className={btnClass.button}
        startIcon={<EditIcon />} onClick={handleOpen}>
        Edit
      </Button>
      <Modal
        aria-labelledby="create-contact"
        aria-describedby="A-form-to-create-contacts"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Update Contact</h2>
          <p id="simple-modal-description">
            To update please fill one or all the fields with the new information.
          </p>
          <form className={classes.root} autoComplete="off">
            <div>
              <TextField
                required
                id="create-contact"
                name="name"
                type="text"
                placeholder="Name"
                onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
              <TextField
                required
                id="create-contact"
                name="email"
                type="email"
                placeholder="example@example.com"
                onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
              <TextField
                required
                id="create-contact"
                name="phone"
                type="text"
                placeholder="809-123-4567"
                onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                aria-label="add"
                startIcon={<SaveIcon />}
                onClick={handleUpdate}>
                Save
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
