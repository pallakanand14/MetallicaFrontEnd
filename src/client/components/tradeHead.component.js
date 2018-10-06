import React ,{Component} from 'react';
import {Link} from 'react-router';
import CreateOrder from "./createOrder.component";
import ViewOrder from "./viewOrder.component";

export default class MainComponent extends Component{
    render(){        
        return <div>           
        

            <CreateOrder/>
                {React.cloneElement(this.props.children)} {/* For Dynamic Children*/}
        </div> 
    }
}