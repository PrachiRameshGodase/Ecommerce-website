import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import aiImage from "../../assests/Band Members1.png";
import classes from "../Products/AvailableProducts.module.css"
import "./About.css"


const About = () => {
  return (
    <>
    <h1 className={classes.Label}>The Generics</h1>
    <Container className="text-center">
      <h1 className='h1-label'>About</h1>
      <div  className='Div1'>
      <Row>
        <Col>
          <Image  fluid alt="About" className='shadow-lg' style={{ width: '200px', height: '200px', float:"left",borderRadius:"50%",margin:"20px 50px"}}/>
        </Col>
      </Row>
      <Row>
        <Col>
        <br></br>
          <p style={{fontSize:"17px"
}}>Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors will unfold in the enduring of which were born in it? Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure, accepted explain up to now. , The things we are accusing of these in the explication of the truth receives from the flattery of her will never be the trouble and they are refused to the pleasures and the pleasures of the pain, explain the treatment of excepturi of the blessed sufferings. I never said will unfold in him receives at another time he may please the one that those works, we are less than they, this refused to the pleasures of deleniti? Those are! Will unfold in times of pleasure, this pain will be a right enjoyed by corrupt, are accusing him of all pleasures, and seek his own, or, to the needs of the agony of the choice. We hate the fellow.
Lorem ipsum dolor, sit amet consectetur rebates. The distinction, that arise from or to. The greater, therefore, an obstacle to the duties of the debts receives the very great importance to us that these are consequent to that question is answered, which was selected for the fault, it is often one of us, however, have any! Moreover, this is often not at once take the hardships of the life of harsh condemn, we are accusing him? Him whom something large</p>
        </Col>
      </Row>
      </div>
    </Container>
    <h1 className={classes.bottom}>The Generics</h1>
    </>
  );
};

export default About;