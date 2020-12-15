import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import Header from './Header';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import '../style/loading.css'

class DashBoard extends Component {
    render() {
        return (
            <div className="screen">
                <a href="http://www.thismanslife.co.uk" target="_blank">Project<span style={{color:'red'}}>X</span></a>
            </div >
        );
    }
}


export default DashBoard;
