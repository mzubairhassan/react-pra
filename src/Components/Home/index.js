import React from 'react';
import { connect } from 'react-redux';

const Home = (props) => {
    return(
        <div>
            It is home page; {props.name}
        </div>
    );
}

const mapStateToProps = state => {
    return state.home;
}



export default Home;