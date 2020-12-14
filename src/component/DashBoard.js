import React, { Component } from 'react';
import './style.css';
import WorldWideConfirmed from './WorldWideConfirmed';
import WorldWideDeaths from './WorldWideDeaths';
import WorldWideRecovered from './WorldWideRecovered';
import { Row, Col, Container } from 'react-bootstrap'
import Header from './Header';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataLocal: null,
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/brief', {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${this.props.userToken}`
            },
        })
            .then(response => response.json())
            .then(dataLocal => this.setState({ dataLocal }));
    }
    render() {
        console.log('dataLocal', this.state.dataLocal);
        const { dataLocal } = this.state;
        return (
            <Container>
                <Row>
                    <Header></Header>
                </Row>
                <Row>
                    <Col><WorldWideConfirmed dataLocal={dataLocal} /></Col>
                    <Col><WorldWideDeaths dataLocal={dataLocal} /></Col>
                    <Col><WorldWideRecovered dataLocal={dataLocal} /></Col>
                </Row>
                <div>
                    <Row>
                        <Col><WorldWideConfirmed dataLocal={dataLocal} /></Col>
                        <Col><WorldWideDeaths dataLocal={dataLocal} /></Col>
                        <Col><WorldWideRecovered dataLocal={dataLocal} /></Col>
                    </Row>
                    <Row>
                    <Doughnut />
                    </Row>
                </div>
            </Container>
        );
    }
}
const mapStateToProps = (state) => ({
    username: state.user.email,
    userToken: state.user.token,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
