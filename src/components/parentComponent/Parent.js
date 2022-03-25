
//functional based component
import Child from '../childComponent/Child';
import {prepareMessage} from '../childComponent/Child';
import React from 'react';
import './Parent.css';
function Parent(){
    // let message = "message from parent";
    let [message, setMessage]=React.useState("message from parent");

     function changeMessage(event){
         console.log(event.target.value);
         let message = prepareMessage(event.target.value);
        setMessage(message);
     }

    return (<div className="outerdiv">
        This is parent component
        <Child message={message}  changeMessage = {changeMessage} />
    </div>)
}

export default Parent