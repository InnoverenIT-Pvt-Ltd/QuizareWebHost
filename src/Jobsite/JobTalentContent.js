import React, { useEffect,Suspense} from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";
import { BundleLoader } from '../Components/Placeholder';
import { Button } from "antd";
import { MainWrapper } from "../Components/UI/Elements";
import { FlexContainer } from "../Components/UI/Layout";


function JobTalentContent(props) {
  useEffect(() => {
    
  }, [])
  const {
    setJobViewType,
    viewType,
  } = props;

  return (
    <React.Fragment>

<div class=" flex flex-col mt-margin60 justify-end flex-wrap items-center max-sm:mt-0">
<div class=" flex flex-col w-8/12 justify-center mt-28 ">
<h2 class=" max-sm: text-3xl md:text-5xl  ">
  {/* Why join us? */}
  <FormattedMessage
                  id="app.whyjoinus"
                  defaultMessage="whyjoinus"
                />
  </h2>
        <p>
          {/* Networking is the most important link to getting opportunities, now and in the future. 
          With Selection to Work we offer companies and professionals the opportunity to come together in one place. 
          We match the suitable vacancy for you and all you have to do is fill in our form and wait until a suitable employer comes along.
           Registering with Selection To Work is completely free and efficient. We keep you up to date with the latest workplaces so you can decide if something suits you.
           Try it for free and see the benefits!  */}
            <FormattedMessage
                  id="app.networkingisthemostimportantlinktogettingopportunitiesnowandinthefuturewithselectiontoworkweoffercompaniesandprofessionalstheopportunitytocometogetherinoneplacewematchthesuitablevacancyforyouandallyouhavetodoisfillinourformandwaituntilasuitableemployeecomesalongregisteringwithselectiontoworkiscompletelyfreeandefficientwekeepyouuptodatewiththelatestworkplacessoyoucandecideifsomethingsuitsyoutryitforfreeandseethebenefits"
                  defaultMessage="networkingisthemostimportantlinktogettingopportunitiesnowandinthefuturewithselectiontoworkweoffercompaniesandprofessionalstheopportunitytocometogetherinoneplacewematchthesuitablevacancyforyouandallyouhavetodoisfillinourformandwaituntilasuitableemployeecomesalongregisteringwithselectiontoworkiscompletelyfreeandefficientwekeepyouuptodatewiththelatestworkplacessoyoucandecideifsomethingsuitsyoutryitforfreeandseethebenefits"
                />
           </p>
           </div>
           <div class="w-8/12 mt-12">
           <h2 class=" max-sm: text-3xl md:text-5xl ">
            {/* What we offer! */}
            <FormattedMessage
                  id="app.whatweoffer"
                  defaultMessage="whatweoffer"
                />
            </h2>
        <p>
          {/* Are you currently without a job, have spare time and want to put it to good use or are you looking for an additional income stream? Through Selection to Work, we offer these opportunities! So you can easily find new jobs, extra work or internships with us.
           In recent years we have built up a large network of partners and clients who often find themselves with too much work and too few staff. 

          Here our talents get the chance to put their expertise to good use. */}
           <FormattedMessage
                  id="app.areyoucurrentlywithoutajobhavesparetimeandwanttoputittogooduseorareyoulookingforanadditionalincomestreamthroughselectiontoworkweoffertheseopportunitiessoyoucaneasilyfindnewjobsextraworkorinternshipswithusinrecentyearswehavebuiltupalargenetworkofpartnersandclientswhooftenfindthemselveswithtoomuchworkandtoofewstaffhereourtalentsgetthechancetoputtheirexpertisetogooduse"
                  defaultMessage="areyoucurrentlywithoutajobhavesparetimeandwanttoputittogooduseorareyoulookingforanadditionalincomestreamthroughselectiontoworkweoffertheseopportunitiessoyoucaneasilyfindnewjobsextraworkorinternshipswithusinrecentyearswehavebuiltupalargenetworkofpartnersandclientswhooftenfindthemselveswithtoomuchworkandtoofewstaffhereourtalentsgetthechancetoputtheirexpertisetogooduse"
                />
          </p>
          </div>
          <div class="mt-12 max-sm:w-8/12 md:flex flex-col items-center ">
          <h2 class=" max-sm: text-3xl md:text-5xl ">
            {/* Have any questions? */}
            <FormattedMessage
                  id="app.haveanyquestions"
                  defaultMessage="haveanyquestions"
                />
            </h2>
        <p class="md:w-9/12">
        <FormattedMessage
                  id="app.wewillhelpyouwithallyourquestionstoclearupanyconfusionorambiguity"
                  defaultMessage="wewillhelpyouwithallyourquestionstoclearupanyconfusionorambiguity"
                />
          {/* We will help you with all your questions to clear up any confusion or ambiguity! */}
          </p>
      </div>
      </div>
      <div class="w-w72 mt-4 ml-24 ">
        <Button 
        className="abtnn text-white "
                >
                  <a href="https://selectiontowork.com/contact/" target="_blank">Contact us</a>
               
                </Button>
                </div>
    </React.Fragment>
  )
}
const mapStateToProps = ({job }) => ({
  
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {
       
      },
      dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(JobTalentContent);