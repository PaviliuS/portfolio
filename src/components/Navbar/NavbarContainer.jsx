import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";

const NavbarContainer = (props) => {
    return (
       <Navbar {...props}></Navbar>
    );
}

const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);