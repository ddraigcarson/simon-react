import {connect} from 'react-redux';
import {Stages} from '../presentation/Stages';
import {STAGES} from '../../../constants/stages';
import {selectCurrentStage} from '../../../redux/selectors/round';

const mapStateToProps = store => ({
  currentStage: selectCurrentStage(store),
  stages: STAGES,
});

const actions = ({});

const StagesContainer = connect(mapStateToProps, actions)(Stages);
export default StagesContainer;
