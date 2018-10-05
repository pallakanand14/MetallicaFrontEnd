import React, { Component } from "react";


export default class CreateOrder extends Component{





render(){
    return <div className="container">
    <form class="form-horizontal">
    <div class="form-group">
    <div className="row">
    <label class="control-label col-sm-2" for="tdate">Trade Date: </label>
        <div className="col-sm-6">
            <input type="text" className="form-control" ref="tdate"/><br/>
        </div>
        </div>
        <div className="row">
        <label class="control-group col-sm-2" for="symbol">Commodity: </label>
        <div className="dropdown col-lg-10">
    <select id="symbol"/><br/>
        </div>
        </div>

        <div class="custom-control custom-radio custom-control-inline col-sm-3">
            <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
            <label class="custom-control-label" for="customRadioInline1">Buy</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline col-sm-3">
            <input type="radio" id="customRadioInline2" class="custom-control-input"/>
            <label class="custom-control-label" for="customRadioInline2">Sell</label>
        </div>
        {/*<div className="row custom-control custom-radio custom-control-inline">
        <label class="control-label col-sm-2" for="side">Side: </label>
            <input type="radio" className="custom-control-input col-sm-3" name="side" ref="side" value="1"/><label class="custom-control-label col-sm-1" for="side">Buy </label>
            <input type="radio" className="custom-control-input col-sm-3" name="side" ref="side" value="0"/><label class="custom-control-label col-sm-1" for="side">Sell: </label>
        </div>
         <div className="col-lg-2">
            Counterparty: <select ref="counterparty_id"/><br/>
        </div> */}
        </div>
        </form>
    </div>
}
}
