import React from 'react'
import { ActionIcon } from "../../../Components/Utils";
import { FlexContainer } from '../../../Components/UI/Layout'

import { ShoppingCartOutlined ,TableOutlined} from '@ant-design/icons';

// import { FormattedMessage } from "react-intl";
// import PlannerShareForm from "./PlannerShareForm"
const CoursesActionRight = (props) => {
    return (
        <>
        <FlexContainer alignItems='center'>
            {/* <CalendarOutlined 
            // onClick={() => props.setPlannerViewType("dashboard")}
             style={{
                marginRight: "0.5rem",
              
                fontSize: "1.0625em",
                cursor: "pointer",
              }}
            /> */}
           
        
        
        
             <ShoppingCartOutlined 
               onClick={() => props.setCoursesViewType("cart")}
               style={{
                  marginRight: "0.5rem",
                  
                  fontSize: "1.0625em",
                  cursor: "pointer",
                }}
            /> 
           
        </FlexContainer>
       
   
    </>
    )
}

export default CoursesActionRight