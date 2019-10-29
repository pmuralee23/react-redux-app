export default (state = [], action) => {
    switch (action.type) {
      case 'FETCH_TABLE_DATA':
        return action.payload.tableData;
      default:
        return state;
    }
  };