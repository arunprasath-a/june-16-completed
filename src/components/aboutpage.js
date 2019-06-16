import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Prompt } from "react-router-dom";

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';
import * as actionCreators from "../store/actions/actions";




class AboutUsPageComponent extends React.Component {

 componentDidMount(){
    this.props.loadAgGridData();
}

render() {
   
        return (

            <React.Fragment >


                <Prompt when={true} message={"Are you sure want to redirect ?"} ></Prompt>

                <Navbar color="light" light expand="md">
                    <NavbarBrand href="#">Welcome {sessionStorage.getItem("name")} !</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/" onClick={this.props.onLogOut} onClickCapture={() => sessionStorage.removeItem("name")} >LogOut</NavLink>
                        </NavItem>
                        {/* <NavItem>
                            |
                        </NavItem>
                        <NavItem>
                            <NavLink to="/TestPage/">TestPage</NavLink>
                        </NavItem> */}
                    </Nav>
                </Navbar>


                <hr />
                <div className="ag-theme-balham" style={{ height: "600px", width: '100%' }}>
                    <AgGridReact
                        columnDefs={this.props.columnDefs}
                        rowData={this.props.rowData}>
                    </AgGridReact>
                </div>
                             
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        username: state.mainReducer.userName,
        columnDefs: state.mainReducer.headerData,
        rowData: state.mainReducer.rowData,
        
    }
}


//instead of this we can simple use import action creators and adding it to connect as below

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         onLogOut: onLogOut,
//     }, dispatch)
// }




export default connect(mapStateToProps, actionCreators)(AboutUsPageComponent);