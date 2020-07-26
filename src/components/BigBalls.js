import React from "react";
import {Card} from "react-bootstrap";
function BigBalls({counter={}}){
    console.log(counter);
    return(<>
          <span style={{background:counter.BigBallColor1}}className="btn btn-circle btn-sm">01</span> 
    
    </>)
}

export default BigBalls;
