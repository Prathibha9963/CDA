import Button from "react-bootstrap/esm/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from 'react-bootstrap/Form';
import ColouredELogo from '../images/ColouredELogo.svg';


export function Footersection(){
return(
    <div className="container">
        <div className="row">
        <div className="col-md-3">
            <img src={ColouredELogo}></img>
        </div>
        <div className="col-md-2 me-auto">
            <h6>shop</h6>
            <p>Hair</p>
            <p>HairCare</p>
            <p>Skin & Personal use</p>
            <p>Makeup</p>
            <p>Fragrance</p>
            <p>Tools & accessories</p>
            <p>Fashion & apparel</p>
        </div>
        <div className="col-md-2 me-auto">
            <h6>Useful links</h6>
            <p>Hair</p>
            <p>HairCare</p>
            <p>Skin & Personal use</p>
            <p>Makeup</p>
            <p>Fragrance</p>
            <p>Tools & accessories</p>
            <p>Fashion & apparel</p>
        </div>
        <div className="col-md-2 me-auto">
            <h6>Useful links</h6>
            <p>Hair</p>
            <p>HairCare</p>
            <p>Skin & Personal use</p>
            <p>Makeup</p>
            <p>Fragrance</p>
            <p>Tools & accessories</p>
            <p>Fashion & apparel</p>
        </div>
        <div className="col-md-3">
            <h6>Subscribe to our newsletter</h6>
            <InputGroup className="mb-3">
             <Form.Control className="email" aria-describedby="basic-addon1"      />
      </InputGroup>
      <InputGroup className="mb-3">
             <Form.Control className="name" aria-describedby="basic-addon1"      />
      </InputGroup>
            
            <input type="checkbox"></input>I agree to all marketing communications
            <Button variant="dark" className="float-end">Submit</Button>
        </div>

        </div>
    </div>
)
}