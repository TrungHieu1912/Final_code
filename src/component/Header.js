import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { logoutUser } from '../action/actionCreator'
class Header extends Component {

    logOut = () => {
        this.props.logoutUser(this.props.userToken)
    }
    render() {
        // debugger
        const { userToken } = this.props;
        return (
            <>
                <Col>
                    <h1>COVID DashBoard</h1>
                </Col>
                <Col>
                    <Button onClick={this.logOut}>{this.props.username}</Button>
                </Col>
            </>
        );
    }
}
const mapStateToProps = (state) => ({
    username: state.user.email,
    userToken: state.user.token,
});

const mapDispatchToProps = {
    logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
