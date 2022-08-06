import React from "react";
import Experience from "./Experience";
import { connect } from "react-redux";

const ExperienceContainer = (props) => {
    return (
       <Experience ></Experience>
    );
}

const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceContainer);