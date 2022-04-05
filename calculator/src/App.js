import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import JTABLE from './Partials/json.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const[operator, setOperator]= useState('+');
  const[currentValue, setCurrentValue]= useState('0');
  const[previousValue, setPreviousValue]= useState('0');
  const setNumber=(val) => {
    setCurrentValue(currentValue + val);
  }
  const assignOperator=(val)=>{
    setOperator(val);
    setPreviousValue(currentValue);
    setCurrentValue('0');
  }
  const clear=()=>{
    setPreviousValue('0');
    setCurrentValue('0');
  }

  const equal=()=>{
   
    switch(operator){
      case "+":
        setCurrentValue(Number(previousValue)+Number(currentValue));
      break;
      case "-":
        setCurrentValue(Number(previousValue)-Number(currentValue));
      break;
      case "*":
        setCurrentValue(Number(previousValue)*Number(currentValue));
      break;
      case "/":
        setCurrentValue(Number(previousValue)/Number(currentValue));
      break;
     
          
  }
  }

  return (
<>
<JTABLE />
    <div className="box"> 
 
      <div className="display"> 
      
        <input type="text" readonly size="18" id="d" value = {currentValue} autocomplete="off" />   
        </div>    
          <div className="keys">    
               <p> <input type="button" className="button gray operator" value="mrc"  onClick={()=>{assignOperator('mrc')}} /> 
               <input type="button" className="button gray operator" value="m-" onClick={()=>{assignOperator('m-')}} />  
               <input type="button" className="button gray operator"   value="m+" onClick={()=>{assignOperator('m+')}} />  
               <input type="button" className="button pink operator" value="/"  onClick={()=>{assignOperator('/')}}  />  </p>    
               <p> <input type="button" className="button black number" value="7"  onClick={()=>{setNumber('7')}}/>   
               <input type="button" className="button black number" value="8"  onClick={()=>{setNumber('8')}}/>  
               <input type="button" className="button black number" value="9" onClick={()=>{setNumber('9')}} />  
               <input type="button" className="button pink operator" value="*" onClick={()=>{assignOperator('*')}}  />  </p>    
               <p> <input type="button" className="button black number" value="4" onClick={()=>{setNumber('4')}}/>  
               <input type="button" className="button black number" value="5"  onClick={()=>{setNumber('5')}}/>  
               <input type="button" className="button black number" value="6"  onClick={()=>{setNumber('6')}}/>   
               <input type="button" className="button pink operator" value="-"  onClick={()=>{assignOperator('-')}} />  </p>    
               <p> <input type="button" className="button black number" value="1" onClick={()=>{setNumber('1')}} />   
               <input type="button" className="button black number" value="2"  onClick={()=>{setNumber('2')}}/>   
               <input type="button" className="button black number" value="3"  onClick={()=>{setNumber('3')}}/>  
               <input type="button" className="button pink operator" value="+"  onClick={()=>{assignOperator('+')}} />  </p>    
               <p> <input type="button" className="button black number" value="0"  onClick={()=>{setNumber('0')}}/>    
               <input type="button" className="button black operator" value="."   onClick={()=>{assignOperator('.')}} />  
               <input type="button" className="button black clear" value="C"  onClick={()=>{clear('C')}}  />   
               <input type="button" className="button orange equal" value="="  onClick={()=>{equal('=')}}  />  </p>    
           </div>  
       </div>  
       </>
  );
}

export default App;
