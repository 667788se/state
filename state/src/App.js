import React, {Component} from "react"
import {Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import bamboo from "./bamboo.jpg";
import "./App.css";



export class App extends Component {
constructor() {
  super();
  this.state = {
    counter:5,
  };
}

increment =()=> {
  this.setState({
    counter: this.state.counter + 1
    });
};

decrement =()=> {
  if (this.state.counter >5){ 
  this.setState({
    counter: this.state.counter - 1
    });
}
};

reset = () => {
  this.setState({
    counter: 5
  });
};

render (){
  return(
    <div className="soma">
<h1> مشتل نسائي مصــراته </h1>
     <h2>  ساق البامبو سعر 25 دينار</h2>
<img src={bamboo} alt="img in src" />
<br/>

<br/>
<Button className="decrement-btn" style={{marginRight:"100px"}} onClick={this.decrement} >
  -
  </Button>
  <span>{this.state.counter}</span>


  <Button className="increment-btn" style={{marginLeft:"100px"}} onClick={this.increment} >
+
</Button>
<br/>

<br/>
<Button className="reset-btn"  onClick={this.reset} >
Reset
</Button>
    </div>
  )
}
}



export default App;
