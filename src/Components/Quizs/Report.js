import React from 'react'
import ReportBugs from './ReportBugs'
import ReportBugList from './ReportBugList'

function Report(props) {
  return (
    <div>
        <div><ReportBugs /></div>   
     <div><ReportBugList /></div>
    </div>
  )
}

export default Report