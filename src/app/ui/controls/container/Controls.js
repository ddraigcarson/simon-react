import { connect } from 'react-redux';
import { Controls } from '../presentation/Controls';
import { startGame } from '../../../redux/actions/game';
import { beginBlinds } from '../../../redux/actions/round';


const mapStateToProps = store => {
  return {};
};

const actions = ({
  startGame,
  beginBlinds
});

const ControlContainer = connect(mapStateToProps, actions)(Controls);
export default ControlContainer;
