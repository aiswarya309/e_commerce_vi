import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { removeItem } from '../redux/slice';

function Example({id}) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  };
  const handleRemove =()=>{
    dispatch(removeItem(id));
    setShow(false)
  }
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Remove
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove this item</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleRemove}>
           REMOVE
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;