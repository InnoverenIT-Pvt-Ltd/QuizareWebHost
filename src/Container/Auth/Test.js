import React, { useCallback, useState } from 'react'
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login"
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons'
import { facebookLogin, googleLogin } from "../Auth/AuthAction";
import { bindActionCreators } from 'redux';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

const Test = (props) => {
    const [facebookResponse, setfacebookResponse] = useState({})
    const [googleResponse, setgoogleResponse] = useState({})

    const onLoginStart = useCallback(() => {
        console.log(facebookResponse)
        props.facebookLogin(facebookResponse.accessToken)
    }, [])
    const onLoginToGoogleStart = useCallback(() => {
        console.log(googleResponse)
        props.googleLogin(googleResponse.tokenId)
    }, [])

    return (
        <div style={{
            width: "40%",
            textAlign: "center", alignItems: "center", display: "flex",
            flexDirection: "column"
        }}>
            <LoginSocialFacebook
                appId="1216755315881273"
                onResolve={(response) => {
                    setfacebookResponse(response)
                    console.log(response)
                }}
                onLoginStart={onLoginStart}
                onReject={(err) => {
                    console.log(err)
                }}
            >
                <FacebookLoginButton />
            </LoginSocialFacebook>
            <LoginSocialGoogle
                client_id="748641779898-e7jjaer4u1mf9kq0u7tcti1iv0i70bq6.apps.googleusercontent.com"
                onLoginStart={onLoginToGoogleStart}
                onResolve={(response) => {
                    setgoogleResponse(response)
                    console.log(response)
                }}
                onReject={(err) => {
                    console.log(err)
                }}
            >
                <GoogleLoginButton />
            </LoginSocialGoogle>
        </div>
    )
}

const mapStateToProps = ({ auth, job }) => ({

});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            facebookLogin,
            googleLogin
        },
        dispatch
    );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Test));

