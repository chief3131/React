import { React, Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


class MatrixInverse extends Component {
    constructor() {
        super();
        console.log("constructor called");
    }
    componentDidMount() {
        console.log("componentDidmout called");
        this.createinputbox();
    }
    
    createinputbox =()=>{
        var Size = document.getElementById("Matsize").value;
        console.log(Size)
        var MatString = '';
        for(var i=0;i<Size;i++){
          for(var j=0;j<Size;j++){
            MatString +="<input id='Mat"+i+j+"' type='float' style='width:50px;margin:1px'/>";
          }
          MatString +=" | <input id='Matans"+i+"0' type='float' style='width:50px;margin:1px'/>";
          MatString +="<br>";
        }
        // console.log(MatString);
        document.getElementById("MatInput").innerHTML=MatString;
    }
    MatrixInverse=()=>{
        var Size = document.getElementById("Matsize").value;
        var mat=[];
        var matans=[];
        console.log("CramersRule");
        for(let i=0;i<Size;i++){
            mat.push([]);
            for(let j=0;j<Size;j++){
                //console.log("mat"+i+j);
                mat[i].push(document.getElementById("Mat"+i+j).value);
               
            }
            matans.push([]);
            matans[i].push(document.getElementById("Matans"+i+"0").value);
            
        }
      
        
          
     


        //document.getElementById("show").innerHTML=ans;
    }
    render() {
        
        return (
            <Container style={{ margin: "auto"}}>
            <Row style={{textalign: "center"}}>
                <Col md={3}></Col>
                <Col md={6}>
                <h3 style={{marginTop:"20px",marginBottom:"20px"}}>Matrix Inverse</h3>
                </Col>
                <Col md={3}></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col >
                    <Form.Group  as={Row} className="mb-2">
                        <Form.Label column sm="7">Matrix dimension:</Form.Label>
                        <Col sm="3"><Form.Select onChange={this.createinputbox} id="Matsize" aria-label="Default select example">
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        </Form.Select></Col>
                        </Form.Group>
                </Col>
                <Col></Col>
            </Row>
           
            <div id="MatInput"></div>
            <Row>
                <Col></Col>
                <Col><Button style={{margin:"10px"}} onClick={this.MatrixInverse}  variant="primary">Execute</Button>
                </Col>
                <Col></Col>  
            </Row>
            <div id='show'>

            </div>
            </Container>
            
        );
    }
}
export default MatrixInverse;