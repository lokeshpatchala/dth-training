import React from "react";

class LifeCycleMethods extends React.Component{

    constructor(props){
      super(props);
      console.log("constructor is called");
      this.state= {
          counter:0
      }
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps", props, state);
        if(props.parentValue){
            console.log("state", props.parentValue)
            let count = state.counter+1;
        
            return {
    
                counter:count
            }
        }
        return null;
    }


    render(){
        return (<div>
            Life cycle methods example
        </div>)
    }

    componentDidMount(){
        console.log("component did mount called");

    }


}

export default LifeCycleMethods;


