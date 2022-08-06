import React from "react";
import Projects from "./Projects";
import { connect } from "react-redux";

const ProjectsContainer = (props) => {
    return (
       <Projects ></Projects>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);