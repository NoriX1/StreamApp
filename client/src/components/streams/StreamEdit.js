import React from 'react';
import { connect } from 'react-redux';

const StreamEdit = (props) => {
    console.log(props)
    return <div>StreamEdit</div>;
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
        // With React-Router each component needs to be designed
        // to work in isolation (fetch its own data!)
        // So now, if we will open link directly
        // We can`t receive this stream data
        // Because StreamList component don`t loaded it yet
    }
}

export default connect(mapStateToProps)(StreamEdit);