export default (state = [], action) => {
    switch (action.type) {
      case 'FETCH_CHART_DATA':
        return action.payload.chartData;
      default:
        return state;
    }
  };