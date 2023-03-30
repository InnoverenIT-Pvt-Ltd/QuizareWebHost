import styled from "styled-components";

const TabsWrapper = styled.div`
width: '100%'
border-radius: 0.3rem;
box-shadow: 0px 0px 0px 0px ${props => props.theme.boxShadowColor};
border: 0.0625em solid white;
background-color: ${props => props.theme.backgroundColor};
color: ${props => props.theme.color};
margin: 0.3rem;
padding: 0.3rem;
height:"300px";
/* overflow: auto; */
`;
export default TabsWrapper;
