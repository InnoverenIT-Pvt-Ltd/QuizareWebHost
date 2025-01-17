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
  const fullName = (props.user.name || '') + ' ' + (props.user.lastName || '') || 'No Data';
  return (
   <>
 <div className="flex items-center  my-6">
      <p className="text-sm font-bold  text-gray-600 mr-2">Hosted By:</p>
      <h2 className="text-lg font-bold text-gray-500">{fullName}</h2>
    </div>
   <StyledTable
   columns={columns}
     dataSource={playersList}
  loading={props.fetchingQuizNameDetails}
   pagination={false}
   />
   </>
  );
}


const mapStateToProps = ({auth, quiz}) => ({      
  quizNameDetails: quiz.quizNameDetails,
  playersDetails:quiz.playersDetails,
  fetchingQuizNameDetails: quiz.fetchingQuizNameDetails,
    fetchingQuizNameDetailsError: quiz.fetchingQuizNameDetailsError,
    user: auth.userDetails,
  });
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {    
        getPlayersDetails    
      },
      dispatch,
    );  
  export default connect(mapStateToProps, mapDispatchToProps)(PlayerTable);