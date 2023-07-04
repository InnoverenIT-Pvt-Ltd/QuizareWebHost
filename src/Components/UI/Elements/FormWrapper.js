import styled from "styled-components";

const FormWrapper = styled.div`
    padding: 1rem;
width: ${props => props.width}
    border-radius: 0.1rem;
    box-shadow: 0px 4px 10px -2px #444;
    border: 1px solid #ddd;
    background: #fff;
    @media only screen and (max-width: 600px) {
    
       width:89%
      
           
         }
         @media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px)
and (-webkit-min-device-pixel-ratio: 2){
 
}
         
`
export default FormWrapper;