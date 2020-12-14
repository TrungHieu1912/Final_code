import React, { Component } from 'react';
import { connect } from 'react-redux';
class WorldWideRecovered extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        const {dataLocal} = this.props;
        return (
            <div id='WorldWideRecovered'>

                <div>
                <i class="fa fa-plus" aria-hidden="true"></i>  WorldWideRecovered</div>
                <div>
                    {this.props.dataLocal? this.props.dataLocal.brief.recovered:''}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};


export default connect(mapStateToProps, mapDispatchToProps)(WorldWideRecovered);
