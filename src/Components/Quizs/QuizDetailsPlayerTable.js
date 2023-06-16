import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import StyledTable from '../UI/Antd/Table1';

function QuizDetailsPlayerTable(props) {
const playersList = props.data.playerViewDTOs
 
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
   scroll={{ y: 100 }}
   />
   </>
  );
}


const mapStateToProps = ({auth, quiz}) => ({      
  quizNameDetails: quiz.quizNameDetails,
  fetchingQuizNameDetails: quiz.fetchingQuizNameDetails,
    fetchingQuizNameDetailsError: quiz.fetchingQuizNameDetailsError,
  });
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {        
      },
      dispatch,
    );  
  export default connect(mapStateToProps, mapDispatchToProps)(QuizDetailsPlayerTable);