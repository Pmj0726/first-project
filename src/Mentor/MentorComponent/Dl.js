import boy from "../Card/card_img2.jpeg";
import girl from "../Card/card_img1.jpeg";
import mentorList from '../mentorList.json' ;
import Card from '../Card/Card' ;

const DeepLearning = () => {
  return (
    <div className="mentorList">
      <h1>DEEP LEARNING</h1>
      <div class="row justify-content-md-center">
        {mentorList.map(
          (mentor) =>
            mentor.Interest.Web && (
              <Card
                imgSrc={girl}
                name={mentor.name}
                description={mentor.description}
              />
            )
        )}
      </div>
    </div>
  );
};
export default DeepLearning;