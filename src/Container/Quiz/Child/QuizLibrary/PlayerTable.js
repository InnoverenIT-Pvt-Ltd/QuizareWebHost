import React, { useEffect } from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPlayersDetails} from "../../QuizAction"
import StyledTable from "../../../../Components/UI/Antd/Table1";

function PlayerTable(props) {

useEffect(() => {
  props.getPlayersDetails(props.data.quizId);
}, []);
const playersList = props.playersDetails.player
const columns = [
    {
      title: "Player",
      dataIndex: "playerName",
    //  key: "name",
    },
    {
      title: "Score",
      dataIndex: "score",
     // key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
     // key: "name",
    },
  
  ];
  return (
   <>
   <StyledTable
   columns={columns}
     dataSource={playersList}
  loading={props.fetchingQuizNameDetails}
   pagination={false}
  //  scroll={{ y: 100 }}
   />
   </>
  );
}


const mapStateToProps = ({auth, quiz}) => ({      
  quizNameDetails: quiz.quizNameDetails,
  playersDetails:quiz.playersDetails,
  fetchingQuizNameDetails: quiz.fetchingQuizNameDetails,
    fetchingQuizNameDetailsError: quiz.fetchingQuizNameDetailsError,
  });
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {    
        getPlayersDetails    
      },
      dispatch,
    );  
  export default connect(mapStateToProps, mapDispatchToProps)(PlayerTable);