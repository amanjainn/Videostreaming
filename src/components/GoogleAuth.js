import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn, signOut} from '../actions/'

 class GoogleAuth extends Component {

   
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId: '48177284168-klihmahjaudknctsvp7jmiftnm1d6ard.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

 onSignInClick= ()=>{
    this.auth.signIn();
 }

 onSignOutClick= ()=>{
    this.auth.signOut();
}

 onAuthChange=(isSignedIn)=>{
     return isSignedIn ? this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut();
 }

    renderAuthButton(){
        if(this.props.isSigned === null){
            return null;
        } else if (this.props.isSigned){
            return (
                <button onClick={this.onSignOutClick}  className="ui red google button">
                    <i className="google icon"> </i>
                    Sign Out
                </button>
            )
        } else{
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon"> </i>
                    Sign In
                </button>
            )
        }
    }

    render() {
        return (
            <div style={{marginTop:"10px"}}>
               {this.renderAuthButton()}
            </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return{isSigned: state.auth.isSignedIn}
}




export default connect(mapStateToProps,{signIn, signOut})(GoogleAuth);