import React from "react";
import Skills from "./Skills";
import { connect } from "react-redux";

const SkillsContainer = (props) => {
    return (
       <Skills ></Skills>
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

export default connect(mapStateToProps, mapDispatchToProps)(SkillsContainer);