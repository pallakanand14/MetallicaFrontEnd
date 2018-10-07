import React ,{Component} from 'react';
import {Link} from 'react-router';
import TradeDetails from './tradeDetails.component';

export default class MainComponent extends Component{

    componentDidMount(){
        this.props.FetchTradeDetails();
    }

    render(){
        // console.log("hello"+this.props.myTrades);
        var TradesToBeShown= this.props.myTrades.map(
            (tradeDetails, i)=>{
                return <TradeDetails trade={tradeDetails} key={tradeDetails.id} index={i} {...this.props} />
            }
        );

        return <div className="container-fluid">
            <table className="table table-hover">
              <thead>
                <tr>
                <th scope="row">Trade Date</th>
                <th scope="row">Commodity</th>
                <th scope="row">Side</th>
                <th scope="row">Qty(MT)</th>
                <th scope="row">Price(MT)</th>
                <th scope="row">Counter Party</th>
                <th scope="row">Location</th>
                </tr>
              </thead>
            </table>
            {TradesToBeShown}
          </div>
    }
}
