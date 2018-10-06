 import React, { Component } from "react";
// import {Nav, Navbar, NavDropdown, Dropdown, DropdownButton, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';

export default class CreateOrder extends Component{





render(){
//     return <div class="container">
//     <form class="form-horizontal">
//     <div class="form-group">
//     <div class="row">
//     <label class="control-label col-sm-2" for="tdate">Trade Date: </label>
//         <div class="col-sm-6">
//             <input type="text" class="form-control" ref="tdate"/><br/>
//         </div>
//         </div>
//         <div class="row">
//         <label class="control-group col-sm-2" for="symbol">Commodity: </label>
//         <div class="dropdown col-lg-10">
//     <select id="symbol"/><br/>
//         </div>
//         </div>

//         <div class="custom-control custom-radio custom-control-inline col-sm-3">
//             <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
//             <label class="custom-control-label" for="customRadioInline1">Buy</label>
//         </div>
//         <div class="custom-control custom-radio custom-control-inline col-sm-3">
//             <input type="radio" id="customRadioInline2" class="custom-control-input"/>
//             <label class="custom-control-label" for="customRadioInline2">Sell</label>
//         </div>
//         {/*<div class="row custom-control custom-radio custom-control-inline">
//         <label class="control-label col-sm-2" for="side">Side: </label>
//             <input type="radio" class="custom-control-input col-sm-3" name="side" ref="side" value="1"/><label class="custom-control-label col-sm-1" for="side">Buy </label>
//             <input type="radio" class="custom-control-input col-sm-3" name="side" ref="side" value="0"/><label class="custom-control-label col-sm-1" for="side">Sell: </label>
//         </div>
//          <div class="col-lg-2">
//             Counterparty: <select ref="counterparty_id"/><br/>
//         </div> */}
//         </div>
//         </form>
//     </div>
// }
// }


return <form style={{padding:"1%"}}>
    <div className="form-group row">
        <label for="tdate" className="col-sm-2 col-form-label" style={{paddingTop:"8px"}}>Trade Date</label>
        <div className="col-sm-2">
            <input type="date" className="form-control" id="tdate"/>
        </div>
    </div>
    <br/>
    <div className="row">
        <label className="control-group col-sm-2" for="symbol" style={{paddingTop:"8px"}}>Commodity: </label>
        <div className="col-sm-2">
        <select id="symbol" className="btn">
            <option class="hidden" value="">Metal</option>
            <option value="1">Aluminium</option>
            <option value="2">Aluminium2asdhajks</option>
            <option value="3">asjkdhajrhqwerioqwjesdk</option>
        </select>
        </div>
    </div>
    <br/>
  
    <fieldset className="form-group row">
        <label className="form-check-label col-sm-2">Side: </label>
        <div className="form-check form-check-inline col-sm-1">
            <input className="form-check-input" type="radio" name="side" id="buy_side" value="1"/>
            <label className="form-check-label" for="buy_side">Buy</label>
        </div>
        <div className="form-check form-check-inline col-sm-1">
  <input class="form-check-input" type="radio" name="side" id="sell_side" value="0"/>
  <label class="form-check-label" for="sell_side">Sell</label>
</div>
    </fieldset>
  
    <div className="row">
        <label className="control-group col-sm-2" for="party" style={{paddingTop:"8px"}}>Counterparty: </label>
        <div className="col-sm-2">
        <select id="party" className="btn">
            <option className="hidden" eventKey="">Metal</option>
            <option className="item" eventKey="1">Aluminium</option>
            <option className="item" eventKey="2">Aluminium2asdhajks</option>
            <option className="item" eventKey="3">asjkdhajrhqwerioqwjesdk</option>
        </select>
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
        <label for="price" className="col-sm-2 col-form-label" style={{paddingTop:"8px"}}>Price: </label>
        <div className="col-sm-2">
            <input type="text" className="form-control" id="price"/>
        </div>
        <label for="price" className="col-sm-1" style={{paddingTop:"8px"}}>USD</label>
    </div>
    <br/>
    <div className="form-group row">
        <label for="qty" className="col-sm-2 col-form-label" style={{paddingTop:"8px"}}>Quantity: </label>
        <div className="col-sm-2">
            <input type="text" className="form-control" id="qty"/>
        </div>
    </div>
    <br/>

    <div className="row">
        <label className="control-group col-sm-2" for="location" style={{paddingTop:"8px"}}>Location: </label>
        <div className="col-sm-2">
        <select id="location" className="btn">
            <option className="hidden">Metal</option>
            <option className="item">Aluminium</option>
            <option className="item">Aluminium2asdhajks</option>
            <option className="item">asjkdhajrhqwerioqwjesdk</option>
        </select>
        </div>
    </div>
    <br/>
  <div className="form-group row col-sm-12">
  <div className="col-xs-1"></div>
  <div className="col-xs-5">
      <button type="reset" className="btn btn-default" style={{margin:"5%"}}>Cancel</button>
      <button type="submit" className="btn btn-default">Save</button>
    </div>
  </div>
</form>

}
}