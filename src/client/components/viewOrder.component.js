import React, { Component } from "react";

export default class ViewOrder extends Component{


    render(){

    return <div style={{padding:"1%"}}>
                <div className="form-group row">
                    <span for="tdate" className="col-sm-2 col-form-label" style={{paddingTop:"0.1em"}}>Trade Date: </span>
                    <div className="col-sm-2">
                    <span id="tdate">DD/MM/YYYY</span>
                </div>
            </div>
            <br/>
            <div className="row">
                <span className="control-group col-sm-2" for="symbol" style={{paddingTop:"0.1em"}}>Commodity: </span>
                <div className="col-sm-2">
                    {/* <select id="symbol" className="btn">
                        <option class="hidden" value="">Metal</option>
                        <option value="1">Aluminium</option>
                        <option value="2">Aluminium2asdhajks</option>
                        <option value="3">asjkdhajrhqwerioqwjesdk</option>
                    </select> */}
                    <span>Arsenic</span>
                </div>
            </div>
            <br/>
  
            <fieldset className="form-group row">
                <span className="form-check-label col-sm-2">Side: </span>
                {/* 
                <div className="form-check form-check-inline col-sm-1">
                    <input className="form-check-input" type="radio" name="side" id="buy_side" value="1"/>
                    <label className="form-check-label" for="buy_side">Buy</label>
                </div>
                <div className="form-check form-check-inline col-sm-1">
                    <input class="form-check-input" type="radio" name="side" id="sell_side" value="0"/>
                    <label class="form-check-label" for="sell_side">Sell</label>
                </div> */} 
                <span id="side" className="col-sm-2">Buy</span>
            </fieldset>
  
            <div className="row">
                <span className="control-group col-sm-2" for="party" style={{paddingTop:"0.1em"}}>Counterparty: </span>
                <div className="col-sm-2">
                    {/* <select id="party" className="btn">
                        <option className="hidden" eventKey="">Metal</option>
                        <option className="item" eventKey="1">Aluminium</option>
                        <option className="item" eventKey="2">Aluminium2asdhajks</option>
                        <option className="item" eventKey="3">asjkdhajrhqwerioqwjesdk</option>
                    </select> */}
                    <span id="party">Satyam</span>
         {/* <ButtonToolbar>
        <DropdownButton bsSize="default" title="Metals" id="symbol">

            <MenuItem eventKey="1">Aluminium</MenuItem>
            <MenuItem eventKey="2">Aluminium2asdhajks</MenuItem>
            <MenuItem eventKey="3">asjkdhajrhqwerioqwjesdk</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
        </DropdownButton>
        </ButtonToolbar>  */}
                </div>
            </div>
            <br/>
            <div className="form-group row">
                <span for="price" className="col-sm-2 col-form-label" style={{paddingTop:"0.1em"}}>Price: </span>
                <div className="col-sm-2">
                    <span id="price"><span>$</span>10002</span>
                </div>
            </div>
            <br/>
    <div className="form-group row">
        <span for="qty" className="col-sm-2 col-form-label" style={{paddingTop:"0.1em"}}>Quantity: </span>
        <div className="col-sm-2">
            <span id="qty">120</span>
        </div>
    </div>
    <br/>

    <div className="row">
        <label className="col-sm-2" for="location" style={{paddingTop:"0.1em"}}>Location: </label>
        <div className="col-sm-2">
        {/* <select id="location" className="btn">
            <option className="hidden">Metal</option>
            <option className="item">Aluminium</option>
            <option className="item">Aluminium2asdhajks</option>
            <option className="item">asjkdhajrhqwerioqwjesdk</option>
        </select> */}
        <span id="location">Amsterdam</span>
        </div>
    </div>
    <br/>
  {/* <div className="form-group row col-sm-12">
  <div className="col-xs-1"></div>
  <div className="col-xs-5">
      <button type="reset" className="btn btn-default" style={{margin:"5%"}}>Cancel</button>
      <button type="submit" className="btn btn-default">Save</button>
    </div>
  </div> */}
</div>
    }

}
