import React from 'react'
import ReportBugs from './ReportBugs'
import ReportBugList from './ReportBugList'

function Report(props) {
  return (
    <div class="w-11/12 m-margin5 absolute bottom-48">
        <div><ReportBugs /></div>   
     <div><ReportBugList /></div>
    </div>
  )
}

export default Report