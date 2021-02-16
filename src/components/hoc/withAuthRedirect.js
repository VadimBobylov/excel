import React from "react"
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        authorized: state.user.authorized
    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.authorized) return <Redirect to={"/login"}/>

            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToProps)(RedirectComponent)
}