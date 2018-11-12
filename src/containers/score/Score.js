import Score from '../../components/score/Score';
import { connect } from 'react-redux';
import { makeScore } from '../../selectors/score';

const mapStateToProps = store => {
  return makeScore(store);
};

const ScoreContainer = connect(mapStateToProps)(Score);

export default ScoreContainer;
