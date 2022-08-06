import React from "react";
import About from "./About";
import { connect } from "react-redux";

const AboutContainer = (props) => {
    return (
       <About ></About>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);