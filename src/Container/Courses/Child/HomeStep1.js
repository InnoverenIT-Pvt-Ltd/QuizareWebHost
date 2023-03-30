import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { CalendarOutlined ,TableOutlined} from '@ant-design/icons';
import { MultiAvatar } from '../../../Components/UI/Elements'
import { CurrencySymbol } from '../../../Components/Common';
// import {deleteCartData} from "../CustomerAction"

function HomeStep1(props) {



  return (
    <div className="items-info">
       <div className=" sm:h-28 w-28 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <div   className=" h-32 w-32 -mt-5 -ml-2 object-cover object-center">
        <MultiAvatar
        //   imageId={
        //     props.item.productInfo.imageUrl
        //       ? props.item.productInfo.imageUrl
        //       : ''
        //   }
          
        />
      </div>
      </div>
      <div className="title">
        <h3>HTML</h3>

 </div>
     
      <div className="add-minus-quantity">
        <span
        //   onClick={() => {
        //     props.setqn(props.item)
        //     props.handleDec(props.item)
        //   }}
        >
          <i class="fas fa-minus minus"></i>
        </span>

      

        <span
        //   onClick={() => {
        //     props.setqn(props.item)
        //     props.handleInc(props.item)
        //   }}
        >
          {/* <i class="fas fa-plus add"></i> */}
          <TableOutlined/>
        </span>
      </div>
    
      <div className="remove-item">
      <span
        //   onClick={() => {
        //     props.setqn(props.item)
        //     props.handlebackdelete(props.item)
        //   }}
        >
        <i class="fas fa-trash-alt remove"></i>
        </span>
        <hr />
      </div>
    </div>
  )
}
const mapStateToProps = ({ customer, auth }) => ({
 
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {

    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToProps)(HomeStep1)