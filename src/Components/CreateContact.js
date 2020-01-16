import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import UserContext from './UserContext';
import isEmpty from 'lodash/isEmpty'

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

export default function CreateContact() {
  const classes = useStyles();
  const { addContact, state } = useContext(UserContext)
  const [user, setUser] = useState({})
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmpty(user)) {
      alert('Please fill out the fields')
    } else {
      if (user.name === "" || isEmpty(user.name)) {
        alert('The name cannot be empty')
      } else {
        if (user.email === "" || isEmpty(user.email)) {
          alert('The email cannot be empty')
        } else {
          if (user.phone === "" || isEmpty(user.phone)) {
            alert('The phone cannot be empty')
          } else {
            addContact({ ...user, id: state[state.length - 1].id + 1 });
            setUser(null)
            setOpen(false);
            return;
          }
        }
      }

    }
  }

  return (
    <div style={{ margin: '10px' }}>
      <Button variant="contained" color="primary" aria-label="add" startIcon={<AddIcon />} onClick={handleOpen}>
        Create contact
      </Button>
      <Modal
        aria-labelledby="create-contact"
        aria-describedby="A-form-to-create-contacts"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Create Contact</h2>
          <p id="simple-modal-description">
            To create a new contact please fill the following field with name, email and phone number respectively.
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
              <Button variant="contained" color="primary" aria-label="add" startIcon={<SaveIcon />} onClick={handleSubmit}>
                Save
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
