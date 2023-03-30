import { createSelector } from "reselect";
import moment from "moment";


const hourList = (auth) => auth.hourListByUserId;






export const hoursSelector = createSelector([hourList], (hours) => {
  console.log("inside event selector");
  return hours.map((hour) => {
    console.log(hour)
    console.log(hour.projectName)
    var d = new Date();
    console.log(`local sysytem date ${d}`);
    var eventDate = moment(hour.startDate);
    var eventendDate = moment(hour.endDate);
    console.log(`event start date ${eventDate}`);
    console.log(`event end date ${eventendDate}`);

    if (moment().isBetween(eventDate, eventendDate)) {
      var value = "orange";
    } else {
      var value = "white";
    }

    return {
      title: hour.projectName,
      start: hour.startDate,
    end: hour.endDate,
 color: "#3174ad",
     
  fontColor: value,
      // animation: value,
      type: "event",

      data: hour,
    };
  });
});



