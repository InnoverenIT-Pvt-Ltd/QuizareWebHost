import React, { Component } from "react";
import { Menu, Icon, Avatar } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";
import { base_url } from "../../Config/Auth";
import {
    StyledDropdown,
    StyledMenu,
    StyledMenuItem,
} from "../../Components/UI/Antd";
import { ApplicationWrapper, MainWrapper } from "../../Components/UI/Layout";

const ProfileMenu = ({ logout, history }) => (
    <ApplicationWrapper>
        <MainWrapper>
            <StyledMenu>
                <StyledMenuItem
                    key="0"
                    style={{
                        marginTop: 0,
                        marginBottom: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                    }}
                >
                    <a href="#" onClick={() => history.push("/profile")}>
                        Profile
                    </a>
                </StyledMenuItem>


                <StyledMenuItem
                    key="3"
                    style={{
                        marginTop: 0,
                        marginBottom: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                    }}
                >
                    <a href="#" onClick={() => history.push("/changepassword")}>
                        Change Password
                    </a>
                </StyledMenuItem>
                <StyledMenuItem
                    key="4"
                    style={{
                        marginTop: 0,
                        marginBottom: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                    }}
                >
                    <a onClick={() => history.push("/")}>Logout</a>
                </StyledMenuItem>
            </StyledMenu>
        </MainWrapper>
    </ApplicationWrapper>
);
class ProfileDropdown extends Component {
    render() {
        const {
            userDetails: { name, imageId },
        } = this.props;
        return (
            <StyledDropdown
                overlay={
                    <ProfileMenu
                        logout={this.props.logout}
                        history={this.props.history}
                    />
                }
            >
                {imageId ? (
                    <img
                        src={`${base_url}/image/${imageId}`}
                        style={{ width: 32, height: 32, borderRadius: "50%", lineHeight: "30px", fontSize: "1.2em" }}
                    />
                ) : (
                    <Avatar
                        style={{
                            backgroundColor: "rgb(148, 179, 228)",
                            verticalAlign: "middle",
                            color: "white",
                            width: "2.1rem",
                            height: "2.1rem",
                        }}
                        size="large"
                    >
                        {name && name.split("")[0].toUpperCase()}
                    </Avatar>
                )}
            </StyledDropdown>
        );
    }
}

const mapStateToProps = ({ auth }) => ({
    userDetails: auth.userDetails,
});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators({

    }, dispatch);

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown)
);
