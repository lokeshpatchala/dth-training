
import './App.css';
import LifeCycleMethods from './components/Example';
import React from 'react'
function App() {
   let [propValue, changePropValue] = React.useState(false);

   function changeValue(){
       changePropValue(state=>{
         if(state){
           return false
         }
         return true;
       })
   }

  return (
    <div className="App">
      <button onClick={changeValue}>change state</button>
      <LifeCycleMethods parentValue = {propValue}></LifeCycleMethods>
    </div>
  );
}

export default App;
