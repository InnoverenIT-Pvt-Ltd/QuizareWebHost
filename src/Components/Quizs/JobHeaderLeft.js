import { Button, Tooltip } from 'antd'
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Link } from 'react-router-dom';
const JobHeaderLeft = (props) => {
const [open, setOpen] =useState(false);
    return (
       <div class=" flex flex-row items-center  max-sm:leading-3 justify-evenly " >
          <Link to="/">
          <Button className='yourshop ' 
          style={{height:"1.7rem"}}
          type="primary">
            <h4 class="text-white">Home</h4>
          </Button>
        </Link>
        <div class=" max-sm:ml-12 md:ml-margin39.5">
          <h3 class="font-extrabold">QUIZMAKER</h3>
            </div>
    </div>
        );
}
const mapStateToProps = ({ }) => ({
 
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      
      
    },
    dispatch
  );
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(JobHeaderLeft);