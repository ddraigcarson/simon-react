import {connect} from 'react-redux';
import {Table} from '../presentation/Table';

import {selectPlayers} from '../../../redux/selectors/players';

const mapStateToProps = store => ({
  players: selectPlayers(store),
});

const actions = {

};

const TableContainer = connect(mapStateToProps, actions)(Table);
export default TableContainer;
