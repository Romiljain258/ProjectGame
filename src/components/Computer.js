import React, {useState} from "react";
import {Card} from "react-bootstrap";
import SmallBalls from "./SmallBalls";
import BigBalls from "./BigBalls";
let BigBallsArr=[
    {
        BigBallColor1:"red",
        id:1,
       
    },
    {
        BigBallColor2:"",
        id:2,
    },
    {
        BigBallColor3:"",
        id:3,
    },
    {
        BigBallColor4:"",
        id:4,
    },
    
   
];

let SmallBallsArr=[
    {
        SmallBallColor1:"",
       
    },
    {
        SmallBallColor2:"",
       
    },
    {
        SmallBallColor3:"",
       
    },
    {
        SmallBallColor4:"",
       
    },
   
];
function Computer(){
    let [bigBalls,setBigBalls]=useState(BigBallsArr);
    let [smallBalls,setSmallBalls]=useState(SmallBallsArr);
    
    let IncNum1=(e)=>{      
        setBigBalls([
            {BigBallColor1:e},
            {BigBallColor1:""},
            {BigBallColor1:""},
            {BigBallColor1:""},
        ]);
    }
    let IncNum2=(e)=>{      
        setBigBalls([
            {BigBallColor1:""},
            {BigBallColor1:e},
            {BigBallColor1:""},
            {BigBallColor1:""},
        ]);
    }
    let IncNum3=(e)=>{      
        setBigBalls([
            {BigBallColor1:""},
            {BigBallColor1:""},
            {BigBallColor1:e},
            {BigBallColor1:""},
        ]);
    }
    let IncNum4=(e)=>{      
        setBigBalls([
            {BigBallColor1:""},
            {BigBallColor1:""},
            {BigBallColor1:""},
            {BigBallColor1:e},
        ]);
    }
     return(
    <>
        <h1 style={{textAlign:"center"}}><b>MasterMind Game</b></h1>
    <div id="box" >
        <Card style={{width: '20rem', height:'38rem',backgroundColor:'orange'}}>
        <Card.Header style={{textAlign:"center",marginLeft:'5rem',marginRight:'5rem'}}><b>Coder</b></Card.Header>
        <Card.Body >
        <Card.Text> 

        <Card.Text>    
        <span style={{marginLeft:'4rem',marginRight:'0rem',marginTop:'0.6rem',marginBottom:'0.7rem',background:"brown"}}className="btn btn-circle btn-sm">01</span>
        <span style={{marginLeft:'0.8rem',marginRight:'0rem',marginTop:'0.6rem',marginBottom:'0.7rem',background:"brown"}}className="btn btn-circle btn-sm">01</span>
        <span style={{marginLeft:'0.8rem',marginRight:'0rem',marginTop:'0.6rem',marginBottom:'0.7rem',background:"brown"}}className="btn btn-circle btn-sm">01</span>
        <span style={{marginLeft:'0.8rem',marginRight:'0rem',marginTop:'0.6rem',marginBottom:'0.7rem',background:"brown"}}className="btn btn-circle btn-sm">01</span>
        <div style={{border: "1px solid blue"}} />
      </Card.Text>




        {bigBalls.map((counter)=>{
             return(          
             <BigBalls counter={counter}/>)
        })}
         {smallBalls.map((counter)=>{
             return <SmallBalls  color="yellow" counter={counter}/>
        })}
        </Card.Text>
        </Card.Body>
        <Card.Footer style={{textAlign:"center",marginLeft:'5rem',marginRight:'5rem'}}><b><b>breaker</b></b></Card.Footer>
        </Card>
    </div>
     <div className="changing-color">
         <button onClick={()=>{IncNum1("blue");}}>Button </button>
         <button onClick={()=>{IncNum1("yellow");}}>Button </button>
         <button onClick={()=>{IncNum1("white");}}>Button </button>
         <button onClick={()=>{IncNum1("pink");}}>Button </button>
     </div>
     <div className="changing-color">
         <button onClick={()=>{IncNum2("blue");}}>Button </button>
         <button onClick={()=>{IncNum2("yellow");}}>Button </button>
         <button onClick={()=>{IncNum2("white");}}>Button </button>
         <button onClick={()=>{IncNum2("pink");}}>Button </button>
     </div>
     <div className="changing-color">
         <button onClick={()=>{IncNum3("blue");}}>Button </button>
         <button onClick={()=>{IncNum3("yellow");}}>Button </button>
         <button onClick={()=>{IncNum3("white");}}>Button </button>
         <button onClick={()=>{IncNum3("pink");}}>Button </button>
     </div>
     <div className="changing-color">
         <button onClick={()=>{IncNum4("blue");}}>Button </button>
         <button onClick={()=>{IncNum4("yellow");}}>Button </button>
         <button onClick={()=>{IncNum4("white");}}>Button </button>
         <button onClick={()=>{IncNum4("pink");}}>Button </button>
     </div>
    </>
     )
}

export default Computer;
