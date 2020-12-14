import React, { Component } from 'react';
import { connect } from 'react-redux';
class WorldWideDeaths extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const {dataLocal} = this.props;
        return (
            <div id="WorldWideDeaths">

                <div>
                    <i class="fa fa-times-circle-o" aria-hidden="true"></i> WorldWideDeaths</div>
                <div>
                    {this.props.dataLocal ?this.props.dataLocal.brief.deaths:''}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};


export default connect(mapStateToProps, mapDispatchToProps)(WorldWideDeaths);
