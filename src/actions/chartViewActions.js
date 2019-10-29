import axios from "axios";

export function fetchChartData(){
    return(dispatch)=>{
        return axios.get("https://data.sfgov.org/api/id/88g8-5mnd.json?$query=SELECT%20%60department%60%20AS%20__dimension_alias__%2C%20COUNT(*)%20AS%20__measure_alias__%20%20GROUP%20BY%20%60department%60%20ORDER%20BY%20__measure_alias__%20DESC%20NULL%20LAST%20LIMIT%2010&$$read_from_nbe=true&$$version=2.1")
        .then((response)=>{
            dispatch(sendChartData(response.data));
        })
    }
}

export function sendChartData(chartData){
    const labels = chartData.map(d => d.__dimension_alias__ || 'Default Label');
    const data = chartData.map(d => d.__measure_alias__);
    return {
        type:"FETCH_CHART_DATA",
        payload:{
            chartData: {
                labels: labels,
                datasets: [{
                    data,
                    borderColor: '#b0ded5'
                }]
            }
        }
    }
}