import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { BsPlay } from 'react-icons/bs';
import classes from "./Home.module.css";


const Home = () => {
  return (
    <div>
    {/* <Container className="text-center"> */}
         <div className={classes.border}>
            <h1 className={classes.Label}>The Generics</h1>
            
            <Row> 
                <Col>
                    <Button variant="outline-primary" className="shadow-lg text-center">Get Our Latest Album</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="outline-primary" className="rounded-circle text-center"><BsPlay /></Button>
                </Col>
            </Row>
            
        </div>
        <Container className="text-center">
        <Row>
                <Col>
                    <h1>Tours</h1>
                </Col>
        </Row>
        
      <Row>
        <Col>
          <Table striped bordered hover>
      <tbody>
        <tr>
          <td>JUL16</td>
          <td>MarkDETROIT, MI</td>
          <td>DTE ENERGY MUSIC THEATRE</td>
          <td><Button variant="primary">BUY TICKETS</Button></td>
        </tr>
        <tr>
          <td>JUL19</td>
          <td>TORONTO,ON</td>
          <td>BUDWEISER STAGE</td>
          <td><Button variant="primary">BUY TICKETS</Button></td>
        </tr>
        <tr>
          <td>JUL 22</td>
          <td>BRISTOW, VA</td>
          <td>JIGGY LUBE LIVE</td>
          <td><Button variant="primary">BUY TICKETS</Button></td>
        </tr>
        <tr>
          <td>JUL 29</td>
          <td>PHOENIX, AZ</td>
          <td>AK-CHIN PAVILION</td>
          <td><Button variant="primary">BUY TICKETS</Button></td>
        </tr>
        <tr>
          <td>AUG 2</td>
          <td>LAS VEGAS, NV</td>
          <td>T-MOBILE ARENA</td>
          <td><Button variant="primary">BUY TICKETS</Button></td>
        </tr>
        <tr>
          <td>AUG 7</td>
          <td>CONCORD, CA</td>
          <td>CONCORD PAVILION</td>
          <td><Button variant="primary">BUY TICKETS</Button></td>
        </tr>
      </tbody>
    </Table>
        </Col>
      </Row>
      
    </Container>
    <h1 className={classes.bottom}>The Generics</h1>
    </div>
    
    
  );
};

export default Home;