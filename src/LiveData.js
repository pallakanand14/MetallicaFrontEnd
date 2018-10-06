import React, { Component } from 'react';
import './styles/livedata.css';


class LiveData extends Component{

    constructor(props) {
        super(props);
        this.state = {
            stocks: []
        };
        // this.scrolling = this.scrolling.bind(this);

    }

    componentWillMount() {
        this.getStockObj();
    }

    getSymbols() {
        let stockSymbols = [
            'AAPL', 'GOOGL', 'GOOG', 'MSFT', 'FB',
            'TSM', 'INTC', 'ORCL', 'CSCO', 'NVDA',
            'IBM', 'SAP', 'TXN', 'QCOM', 'ADBE',
            'AVGO', 'DCM', 'CRM', 'AABA', 'BIDU',
            'ITW', 'ATVI', 'AMAT', 'ADP', 'MU',
            'VMW', 'CTSH', 'INTU', 'NXPI', 'INFY',
            'EA', 'ETN', 'HPQ', 'ADI', 'NOK',
            'FISV', 'DXC', 'LRCX', 'NOW', 'HPE',
            'WDC', 'WDAY', 'WIT', 'TWTR', 'ADSK',
            'SNAP', 'WPP', 'RHT', 'KYO', 'CERN',
        ]
        return stockSymbols;
    }


    async getStockObj() {
        let symbols = this.getSymbols();
        let url = 'https://api.iextrading.com/1.0/stock/market/batch?types=price,company&symbols=';
        for (let ctr = 0; ctr < symbols.length; ctr++) {
            url += symbols[ctr] + ',';
        }
        //alert(url);
        try {
            let fetchResponse = await fetch(url);
            let json = await fetchResponse.json();
            //console.log(JSON.stringify(json));
            let stocksArray = [];
            Object.keys(json).map((key, index) => {
                stocksArray.push(json[key]);
            });
            this.setState({ stocks: stocksArray });
        }
        catch (err) {
            console.log(err);
        }
    }



    render(){
        if (this.state.stocks.length > 1) {
            return(
                <div className="ticker-wrap">
                    <div className="ticker">
                    {this.state.stocks.map((item, index) => (
                        <div className="ticker__item"  key={index}>
                            <p>{item.company.companyName}</p>
                            <p>{item.company.symbol}</p>
                            <p>${item.price}</p>
                        </div>
                    
                ))}
                </div>
                </div>
            );
        }

        else {
            return (
                <div>
                    <div>
                        <p>Loading...</p>
                    </div>
                </div>
            );
}
    }
}

export default LiveData;