import React, { useEffect, useState, useMemo, lazy ,Component} from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import moment from "moment";

import { StyledTable } from "../../../Components/UI/Antd";
import {getDateWiseList,} from "../Planner/PlannerAction";



class PlannerTable extends Component {

    constructor() {
        super();
        var today = new Date(),
        date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
    
      this.state = {
        date: date,
      };
    }

    componentDidMount() {
       
       const { getDateWiseList, candidateId, startDate, endDate } = this.props;
       getDateWiseList(candidateId,  startDate, endDate);
      
     }


     componentWillReceiveProps(nextProps) {
        if (
          this.props.startDate !== nextProps.startDate ||
          this.props.endDate !== nextProps.endDate
        ) {
             
          const { getDateWiseList, candidateId, startDate, endDate } = nextProps;
          getDateWiseList(candidateId, startDate, endDate);
             
        }
      }
  


//   const {
//     fetchingCustomers,
//     customerByUserId,
//     handleUpdateCustomerModal,
//     updateCustomerModal,
//     fetchingCustomersError,
//     fetchingAllCustomers,
//     user,
//     IconShowhover,
//   } = props;
  // if (fetchingCustomers) {
  //   return <BundleLoader />;
  // }
  render() {
    
  const columns = [
  

    {
        title:"Project",
        width: "15%",
        dataIndex: "projectName",
      },

      {
        title:"Hours",
        width: "15%",
        dataIndex: "hour",
      },

      {
        title:"Date",
        width: "15%",
        dataIndex: "startDate",
        render: (text, item) => {
         // const availableDate = moment(item.startDate).format("ll");
          return (
            <>
              {item.startDate === null ? (
                "No Data"
              ) : (
                <span>{moment(item.startDate).format("l")}</span>
              )}
            </>
          );
        },
      },
      {
        title:"Billing Rate",
        width: "15%", 
        dataIndex: "billingAmount",
      },
      {
        title:"Billed",
        width: "15%",
        dataIndex: "finalBillableAmount",
      },
   
    
   
  

   
   
 
   


  ];
    
//   if (fetchingCustomersError) {
//     return <APIFailed />;
//   }
  const tab = document.querySelector(".ant-layout-sider-children");
  const tableHeight = tab && tab.offsetHeight * 0.75;
  return (
    <>
  
        
      <StyledTable
        // rowKey="accountId"
        // rowSelection={rowSelection}
       // rowKey={(record) => record.customerId}
        columns={columns}
        dataSource={this.props.showDatelist}
       // loading={fetchingCustomers || fetchingCustomersError || fetchingAllCustomers}
        // scroll={{ y: 500 }}
        // pagination={false
        //scroll={{ y: tableHeight }}

        pagination={false}
      

      />
     
         

    
     
    </>
  );
    
  
}
}
const mapStateToProps = ({ auth, customer,planner, sector, opportunity,employee }) => ({
    candidateId:auth.userDetails.candidateId,
    endDate: planner.endDate,
    startDate: planner.startDate,
    showDatelist:planner.showDatelist
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
        getDateWiseList
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(PlannerTable);
