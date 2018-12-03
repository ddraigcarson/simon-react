import {connect} from 'react-redux';
import {Table} from '../presentation/Table';

import {selectPlayers} from '../../../redux/selectors/players';
import {selectPot} from '../../../redux/selectors/round';
import {selectDeck} from "../../../redux/selectors/round";

const mapStateToProps = store => ({
    players: selectPlayers(store),
    table: {
        pot: selectPot(store),
        deck: selectDeck(store).length,
        discard: 0
    }
});

const actions = {};

const TableContainer = connect(mapStateToProps, actions)(Table);
export default TableContainer;
