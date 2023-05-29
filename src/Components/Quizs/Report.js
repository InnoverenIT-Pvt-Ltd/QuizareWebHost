import React from 'react'
import ReportBugs from './ReportBugs'
import ReportBugList from './ReportBugList'

function Report(props) {
  return (
    <div class="w-11/12 m-margin5 absolute bottom-40">
        <div><ReportBugs /></div>   
     <div class="mt-2"><ReportBugList /></div>
    </div>
  )
}

export default Report