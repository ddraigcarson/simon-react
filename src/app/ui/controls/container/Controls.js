import { connect } from 'react-redux';
import { Controls } from '../presentation/Controls';
import { startGame } from '../../../redux/actions/gameConfig';


const mapStateToProps = store => {
  return {};
};

const actions = ({
  startGame
});

const ControlContainer = connect(mapStateToProps, actions)(Controls);
export default ControlContainer;