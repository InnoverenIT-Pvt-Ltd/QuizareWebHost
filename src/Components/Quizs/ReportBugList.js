import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import StyledTable from "../UI/Antd/Table1";
import { getBugsList } from "../../Container/Quiz/QuizAction";
import { useEffect } from "react";

function ReportBugList(props) {
  useEffect(() => {
    props.getBugsList("QH4472404666122022");
  }, []);

  const columns = [
    {
      title: "Status",
      dataIndex: "resolved",
      //  key: "name",
    },
    {
      title: "Subject",
      dataIndex: "score",
      // key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      // key: "name",
    },
   
  ];
  return (
    <>
      <StyledTable
        columns={columns}
        dataSource={props.bugs}
        loading={props.fetchingBugs}
        pagination={false}
        scroll={{ y: 320 }}
      />
    </>
  );
}

const mapStateToProps = ({ auth, quiz }) => ({
  bugs: quiz.bugs,
  fetchingBugs: quiz.fetchingBugs,
  fetchingBugsError: quiz.fetchingBugsError,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getBugsList,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(ReportBugList);
