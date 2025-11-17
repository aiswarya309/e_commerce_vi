import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
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
       <input type="radio" id="address" value='address'/>
       <label htmlFor="address">XYZ 789908 ,klm house , Near kochi..</label>
       <hr />
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
