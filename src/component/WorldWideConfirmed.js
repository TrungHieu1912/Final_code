import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
class WorldWideConfirmed extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const {dataLocal} = this.props;
        return (
            <div id="WorldWideConfirmed">

                <div>
                <i class="fa fa-user" aria-hidden="true"></i> WorldWideConfirmed
                </div>
                <div>
                    {this.props.dataLocal? this.props.dataLocal.brief.confirmed:''}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(WorldWideConfirmed);
