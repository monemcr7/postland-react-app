import {React , useState} from 'react';
import { Accordion, Card, Button } from 'react-bootstrap'
const SideBar = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);


    return (
            <div className="col-lg-3 col-md-3 sidebar mt-4">
            <Accordion>
                <Card>
                    <Card.Header className={open ? 'clicked': null} >
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={() => setOpen(!open)} >
                    Top Sales
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <ul className="list-unstyled">
                            <li>Cell Phones</li>
                            <li>Cameras</li>
                            <li>Computers</li>
                            <li>Tv, Audio</li>
                            <li>Video Games</li>
                        </ul>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header className={open2 ? 'clicked': null}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1" onClick={() => setOpen2(!open2)}> 
                    Brand Focus
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    <ul className="list-unstyled">
                            <li>Cell Phones</li>
                            <li>Cameras</li>
                            <li>Computers</li>
                            <li>Tv, Audio</li>
                            <li>Video Games</li>
                        </ul>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header className={open3 ? 'clicked': null}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2" onClick={() => setOpen3(!open3)}> 
                    Hi-Tech
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                    <ul className="list-unstyled">
                            <li>Cell Phones</li>
                            <li>Cameras</li>
                            <li>Computers</li>
                            <li>Tv, Audio</li>
                            <li>Video Games</li>
                        </ul>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header className={open4 ? 'clicked': null}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3" onClick={() => setOpen4(!open4)}> 
                    Home
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                    <ul className="list-unstyled">
                            <li>Cell Phones</li>
                            <li>Cameras</li>
                            <li>Computers</li>
                            <li>Tv, Audio</li>
                            <li>Video Games</li>
                        </ul>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                <Card.Header className={open5 ? 'clicked': null}>
                <Accordion.Toggle as={Button} variant="link" eventKey="4" onClick={() => setOpen5(!open5)}> 
                Sale
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                <Card.Body>
                <ul className="list-unstyled">
                        <li>Cell Phones</li>
                        <li>Cameras</li>
                        <li>Computers</li>
                        <li>Tv, Audio</li>
                        <li>Video Games</li>
                    </ul>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
            <div className="sidebar-available">
                <ul className="list-unstyled">
                    <li className="title-sidebar">Available</li>
                    <li>
                    <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input" id="customRadio" name="example1" value="customEx" defaultChecked />
                        <label className="custom-control-label" htmlFor="customRadio">In Storage</label>
                        <span className="count">45</span>
                    </div>

                    <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input" id="customRadio2" name="example1" value="customEx" />
                        <label className="custom-control-label" htmlFor="customRadio2">In Online-Shop</label>
                        <span className="count">12</span>
                    </div>
                    </li>
                    <li className="title-sidebar">Brands <a href="#">All</a></li>


                    <li>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheckbox" name="example1" value="customEx" defaultChecked />
                        <label className="custom-control-label" htmlFor="customCheckbox">In Storage</label>
                        <span className="count">45</span>
                    </div>

                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheckbox2" name="example2" value="customEx" />
                        <label className="custom-control-label" htmlFor="customCheckbox2">In Online-Shop</label>
                        <span className="count">12</span>
                    </div>

                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheckbox3" name="example3" value="customEx" />
                        <label className="custom-control-label" htmlFor="customCheckbox3">In Storage</label>
                        <span className="count">45</span>
                    </div>

                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheckbox4" name="example4" value="customEx" />
                        <label className="custom-control-label" htmlFor="customCheckbox4">In Online-Shop</label>
                        <span className="count">12</span>
                    </div>
                    </li>
                </ul>
            </div>
            </div>
    )
}

export default SideBar;