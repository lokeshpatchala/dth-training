import logo from './logo.svg';
import './App.css';
import React from 'react';
import Parent  from './components/parentComponent/Parent';
function App() {
 
  // let [counter,setCounter] = React.useState(0);
  // let message =  <div>Count value {counter}</div>
  // React.useEffect(() => {
  //   setInterval(() => {
  //     setCounter((counter) => {
  //       counter+=1;
  //       return counter;
  //     });
  //   }, 2000);
  //   return clearTimeout();
  // },[]);
  return (
        <React.Fragment>
            <Parent/>
        </React.Fragment>
  );
}

export default App;
