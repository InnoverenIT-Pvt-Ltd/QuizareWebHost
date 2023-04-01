import React, { useEffect, useState,useMemo,lazy } from 'react'
import { StyledTable } from '../../../Components/UI/Antd';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { base_url } from "../../../Config/Auth";
import { BundleLoader } from '../../../Components/Placeholder';
import { Link } from 'react-router-dom';

function QuizDetailsPlayerTable (props)  {
    
    useEffect(() => {
        //   props.getCourse();  
    }, [])

    const [rowdata, setrowData] = useState({});
    
    const handleRowData = (data) => {
      setrowData(data);
    };
    
    const columns = [
        {
            title: "UserName",
            dataIndex: "playerName",
            width:"2%",
        },
        {
          title: "Score",
          dataIndex: "score",
          width:"10%",
      },
      {
        title: "Status",
        dataIndex: "status",
        width:"2%",
    },

     
    ]
    return (
        <>        
            <StyledTable
                columns={columns}
            //    dataSource={props.courseById}
                pagination={false}
            />
        </>
    )
}

const mapStateToProps = ({  }) => ({

});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
   
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(QuizDetailsPlayerTable);