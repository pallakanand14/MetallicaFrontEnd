import React ,{Component} from 'react';

export default class TradeDetailsComponent extends Component{

    // deleteTrade(tradeId){
    //   fetch('addressOfTheServer/' + tradeId, {
    //     method: 'delete'
    //   })
    //   .then(res => {
    //     console.log(res.status);
    //   })
    // }

    render(){
      return <table className="table table-hover">
              <tbody>
                <tr>
                  <td>{this.props.trade.date}</td>
                  <td>{this.props.trade.commodity.symbol}</td>
                  <td>{this.props.trade.side ? 'Buy' : 'Sell'}</td>
                  <td>{this.props.trade.quantity}</td>
                  <td>${this.props.trade.price}</td>
                  <td>{this.props.trade.counterParty.name}</td>
                  <td>{this.props.trade.location.cityname}</td>
                  <td><span className="glyphicon glyphicon-trash" onClick={DeleteTrade.bind(this,this.props.trade.tradeId)}></span></td>
                </tr>
              </tbody>
            </table>
    }
}
