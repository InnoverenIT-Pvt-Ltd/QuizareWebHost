import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import StyledTable from "../UI/Antd/Table1";
import { getBugsList } from "../../Container/Quiz/QuizAction";
import moment from "moment";


function ReportBugList(props) {
  const [showFull, setShowFull] = React.useState(false);
  const [currentRId, setCurrentRId] = useState("");
  useEffect(() => {
    props.getBugsList(props.quizHostId);
  }, []);

  const columns = [
    {
      title: "Date",
      dataIndex: "reportedTime",
      render: (name, item, i) => {
        return <span>{` ${moment(item.reportedTime).format("DD MMM YYYY")}`}</span>;
      },
      //  key: "name",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      // key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (name, item, i) => {
        return <span> {showFull && currentRId === item.description ? (
          <>
            <div>{item.description}</div>
            <h4 class="text-sm font-bold" onClick={() => { setShowFull(false); setCurrentRId(item.description) }}>Show less</h4>
          </>
        ) : (
          <>
            {item.description.slice(0, 30)}...
            <h4 class="text-sm font-bold" onClick={() => { setShowFull(true); setCurrentRId(item.description) }}>Show more</h4>
          </>
        )}</span>;
      },
      // key: "name",
    },
    {
      title: "Status",
      dataIndex: "resolved",

      //  key: "name",
    },
  ];
  return (
    <>
      <StyledTable
        columns={columns}
        dataSource={props.bugs}
        loading={props.fetchingBugs}
        pagination={false}
        scroll={{ y: 310 }}
      />
    </>
  );
}

const mapStateToProps = ({ auth, quiz }) => ({
  bugs: quiz.bugs,
  fetchingBugs: quiz.fetchingBugs,
  fetchingBugsError: quiz.fetchingBugsError,
  quizHostId: auth.userDetails.userId
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getBugsList,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(ReportBugList);
