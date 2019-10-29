import { combineReducers } from 'redux';
import tabularDataReducer from './tabularDataReducer';
import chartDataReducer from './chartDataReducer'

export default combineReducers({
    tableData: tabularDataReducer,
    chartData: chartDataReducer
});
