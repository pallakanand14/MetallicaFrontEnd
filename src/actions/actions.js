import axios from 'axios';

export function FetchTradeDetails(){
    var request= axios.get('https://api.myjson.com/bins/11rzo4');

    return(dispatch)=>{
        request.then(
            (response)=>{
                dispatch({
                    type: 'FETCH_TRADE_DETAILS',
                    response: response.data
                })
            }
        );
    }
}

export function DeleteTrade(index){
  fetch('addressOfTheServer/' + index, {
     method: 'delete'
   })
   .then(res => {
     console.log(res.status);
   });

  return{
    type: 'DELETE_TRADE',
    index:index
  }
}
