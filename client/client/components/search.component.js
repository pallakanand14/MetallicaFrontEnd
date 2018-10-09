import React ,{Component} from 'react';


class SearchComponent extends Component{

    
    searchTrade(){
        const method = "POST";
        const body = newFormData(this.form);
        fetch('http://localhost:8080/trade/search', {method,body})
            .then(res => res.json())
            .then(data => alert(JSON.stringify(data, null, "\t")));


    // validate date input
    const start = document.getElementsByName('startDate').value;
    const end = document.getElementsByName('endDate').value;
 
    var currentDate = new Date();
    var checkDate = (currentDate.getMonth()+1)+'/'+currentDate.getDate()+'/'+currentDate.getFullYear();

    var errorMsg = "";
    

    if(start > checkDate) {
        errorMsg = "Cannot search in the future!";
    }else if (end > checkDate){
        errorMsg = "Cannot search in the future!"; 
    } 
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
                        <select name = "commodity">
                            <option value = "commodity1">Commodity 1 </option>
                            <option value = "commodity2">Commodity 2 </option>
                            <option value = "commodity3">Commodity 3</option>
                        
                        </select>
                    </div>
                    
                     <div className = "col-sm-2">
                         <label id = "side" for="side">Side</label><br/>
                         <input type = "checkbox" name = "buy"/>Buy
                         <input type = "checkbox" name = "sell"/>Sell
                    </div>
                    
                    <div className = "col-sm-2">
                        <label id = "counter" for = "counterparty">Counterparty</label><br/>
                        <select name = "counterParty">
                            <option value = "option1">Option 1 </option>
                            <option value = "option2">Option 2 </option>
                            <option value = "option3">Option 3 </option>
                        
                        </select>
                    </div>
                   
                    <div className = "col-sm-2">
                        <label id = "loc" for = "location">Location</label><br/>
                        <select name = "Location">
                            <option value = "location1">Location 1 </option>
                            <option value = "location2">Location 2 </option>
                            <option value = "location3">Location 3</option>
                        
                        </select>
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