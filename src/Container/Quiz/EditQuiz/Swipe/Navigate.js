
// import React, { useState } from 'react';
// import { withRouter } from 'react-router-dom';
// import HowtoUse from '../../../../Components/Quizs/HowtoUse';
// import QuizName from '../../QuizName';
// import QuizinLibrary from '../SwipeIn/QuizinLibrary';
// import ProfileView from '../../../../Components/Quizs/profileView';
// import LibrayHome from '../../../../Components/Quizs/LibrayHome';


// const Navigate = ({ cardIndex, history,cardName }) => {
//     console.log("CardIndex",cardIndex)
//   const [currentCard, setCurrentCard] = useState(cardIndex);

//   const goToNextCard = () => {
//     const nextCard = currentCard === 4 ? 1 : currentCard + 1;
//     setCurrentCard(nextCard);
//     history.push(`/how${nextCard}`);
//   };

//   const goToPreviousCard = () => {
//     const previousCard = currentCard === 1 ? 4 : currentCard - 1;
//     setCurrentCard(previousCard);
//     history.push(`/how${previousCard}`);
//   };

//   const renderCurrentCard = () => {
//     switch (currentCard) {
//       case 1:
//         case 1:
//             return <HowtoUse />;
//             case 2:
//                 return <QuizName />;
//                 case 3:
//                     return <LibrayHome />;
//                     case 4:
//                         return <ProfileView />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div class="flex justify-center flex-col">
//       <div className="swiper-content">{renderCurrentCard()}</div>
//       <div class="justify-between flex w-96 -mt-80">
//      <div> <button style={{fontSize:"5rem"}} onClick={goToPreviousCard}>&lt; </button></div>
//      <div> <button style={{fontSize:"5rem"}} onClick={goToNextCard}> &gt;</button></div>
//       </div>
//     </div>
//   );
// };

// export default withRouter(Navigate);

// Swiper.js
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import QuizName from '../../QuizName';
import HowtoUse from '../../../../Components/Quizs/HowtoUse';
 import ProfileView from '../../../../Components/Quizs/profileView';
  import LibrayHome from '../../../../Components/Quizs/LibrayHome';

const Navigate = ({ cardIndex, history }) => {
  const [currentCard, setCurrentCard] = useState(cardIndex);

  const goToNextCard = () => {
    const nextCard = currentCard === 4 ? 1 : currentCard + 1;
    setCurrentCard(nextCard);
    history.push(`/how${nextCard}`);
  };

  const goToPreviousCard = () => {
    const previousCard = currentCard === 1 ? 4 : currentCard - 1;
    setCurrentCard(previousCard);
    history.push(`/how${previousCard}`);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => goToNextCard(),
    onSwipedRight: () => goToPreviousCard(),
  });


  const renderCurrentCard = () => {
  switch (currentCard) {
      case 1:
        case 1:
            return <HowtoUse 
            goToNextCard={goToNextCard}
            goToPreviousCard={goToPreviousCard}
            />;
            case 2:
                return <QuizName
                goToNextCard={goToNextCard}
                goToPreviousCard={goToPreviousCard}
                />;
                case 3:
                    return <LibrayHome 
                    goToNextCard={goToNextCard}
                    goToPreviousCard={goToPreviousCard}
                    />;
                    case 4:
                        return <ProfileView 
                        goToNextCard={goToNextCard}
                        goToPreviousCard={goToPreviousCard}
                        />;
      default:
        return null;
    }
  };

  return (
   
    <div className="swiper" {...handlers}>
        <div className="swiper-content">{renderCurrentCard()}</div>
      
      </div>
    
  );
};

export default withRouter(Navigate);

