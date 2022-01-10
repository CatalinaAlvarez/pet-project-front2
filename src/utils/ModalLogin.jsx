import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export const ModalLogin = ({ open, handleClose, handleConfirm, msgModal }) =>{
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {msgModal.titulo}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{msgModal.msg}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Revisar mis datos
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Registrarme
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
