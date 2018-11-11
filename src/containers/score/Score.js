import Score from "../../components/score/Score";
import { connect } from "react-redux";
import { makeScore } from "../../selectors/score";

import Actions from "../../actions/simon";

const mapStateToProps = store => {
  return makeScore(store);
};

const ScoreContainer = connect(mapStateToProps)(Score);

export default ScoreContainer;
