import React ,{Component} from 'react';


class SearchComponent extends Component{
    searchTrade(){
        const method = "POST";
        const body = newFormData(this.form);
        fetch('http://localhost:8080/trade/search', {method,body})
            .then(res => res.json())
            .then(data => alert(JSON.stringify(data, null, "\t")));

    }

    render(){

        return ( 
        <div className = "container" >
            <form ref = {el => (this.form = el)} >
                
                <div className = 'row'>
                    <div className = "col-sm-4">
                        <label id = "td" for="tradeDate">Trade Date</label> <br/>
                        <input type = "date" name="startDate"/> to <input type = "date" name ="endDate"/>  
                    
                    </div>

                
                   <div className = "col-sm-2">
                        <label id = "com" for = "commodity">Commodity</label><br/>
                        <input type = "select" name = "commodity"/> 
                    </div>
                    
                     <div className = "col-sm-2">
                         <label id = "side" for="side">Side</label><br/>
                         <input type = "checkbox" name = "buy"/>Buy
                         <input type = "checkbox" name = "sell"/>Sell
                    </div>
                    
                    <div className = "col-sm-2">
                        <label id = "counter" for = "counterparty">Counterparty</label><br/>
                        <input type = "select" name = "counterParty" />
                    </div>
                   
                    <div className = "col-sm-2">
                        <label id = "loc" for = "location">Location</label><br/>
                         <input type = "select" name = "location" />
                    </div>
                    
               </div> 

                <div className = "row">
                <div className = "col-sm-12">
                    <button onClick = "#" className = "clearBtn">Clear</button>
                    <button onClick = "this.searchTrade()" className = "searchBtn">Search</button> 
                </div>
                </div> 

                </form>   
        </div>
        
        );
    }
}
export default SearchComponent;