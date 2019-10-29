import axios from "axios";

export function fetchTableData(){
    return(dispatch)=>{
        return axios.get("https://data.sfgov.org/api/id/88g8-5mnd.json?$select=*&$order='department'+ASC&$limit=17&$offset=0&$$read_from_nbe=true&$$version=2.1")
        .then((response)=>{
            dispatch(sendTableData(response.data));
        })
    }
}

export function sendTableData(tableData){
    return {
        type:"FETCH_TABLE_DATA",
        payload:{
            tableData
        }
    }
}