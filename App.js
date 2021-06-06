import React,{Component} from 'react';
import './App.css';
import PDF from './component/pdf';
import './styles.css'
class App extends Component {
  constructor(){
   super();  
  this.state ={
    monsters:[
      {
        name:'rohith'
      },

    ]
  }
}


render(){
  return (
    
  <div className='App'>
   
   <PDF>
     
      <p>robin     </p>
      </PDF>
   {
     this.state.monsters.map(monsters=>(<h1>{monsters.name}</h1>))
   }
  
  </div>
  )
}}
export default App;
