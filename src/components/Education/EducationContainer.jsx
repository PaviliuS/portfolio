import React from "react";
import Education from "./Education";
import { connect } from "react-redux";

const EducationContainer = (props) => {
    return (
       <Education ></Education>
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

export default connect(mapStateToProps, mapDispatchToProps)(EducationContainer);