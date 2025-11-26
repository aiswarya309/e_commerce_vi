import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {AddressContext} from '../context/AddressProvider'


function MyVerticallyCenteredModal(props) {
  const {address} = useContext(AddressContext)
  React
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Select Delevery Address
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {address.length > 0? address.map((val,i)=>(
          < React.Fragment key={i}>
       <input type="radio" id="address" value='address'/>
       <label htmlFor="address"><b>{val.name} {val.pincode}</b>{val.type}</label>
       <p>{val.address}{val.locality}</p>
       <hr />
          </React.Fragment>
        )) :''}
       <h5>Use pincode to check delivery info</h5>
       <input type="number" name="" id="" />
       <button>Submit</button>
      </Modal.Body>
      <Modal.Footer>
       <p>Use my current location</p>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
