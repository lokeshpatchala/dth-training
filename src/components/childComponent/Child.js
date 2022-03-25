import React from 'react';
// import classes from './Child.module.css';
import classes from './child.module.css';

// class Child extends React.Component{

//     constructor(props){
//         // super(props);
//         super(props);
//     }

//     onInputChange(event){
//         console.log("callled");
//        this.props.changeMessage(event);
//     }
     
//     render(){
//         return (<div>
//             {this.props.message}
//             <input type = "text" onChange = {(event)=>{
//                 this.onInputChange(event);
//             }}>
//             </input>
//         </div>)
//     }
// }


function Child(props){
    function onInputChange(event){
                console.log("callled");
               props.changeMessage(event);
            }
    return (<div className={`${classes.childdiv}`}>
        {props.message}
        <input type = "text" onChange = {(event)=>{
                onInputChange(event);
            }}></input>
    </div>)
}

function prepareMessage(message){
   return message+"prepare message"
}
// export  {Child};
// export [Child];
export default Child;
export {prepareMessage};
