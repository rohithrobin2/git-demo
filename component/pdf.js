import React from 'react';
import Pdf from 'react-to-pdf';

const ref =React.createRef();
const PDF =>{
    return(
        <>
    <div className="App" ref={ref}> 
    <h1>hello</h1>
    </div>
    <Pdf targetRef={ref} filename="app.pdf"> 
    {({toPdf})=><button onClick={toPdf}>save as pdf</button>}
    </Pdf>
  </>
    );
} 
export default PDF;