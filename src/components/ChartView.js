import React from 'react';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import 'chartjs-plugin-colorschemes';
import {fetchChartData} from '../actions/chartViewActions';

class ChartView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: [],
                datasets: []
            }
        };
    }
    componentDidMount() {
        this.props.fetchChartData();
    }

    render() {
        return (
            <div className="container">
                <div className="view-header">
                    <h2>Chart View </h2>
                </div>
                <Pie data={{
                    labels: this.props.chartData.labels,
                    datasets: this.props.chartData.datasets
                }} options={{
                    plugins: {
                        datalabels: {
                            color: '#000',
                            display: function (context) {
                                return context.dataset.data[context.dataIndex] > 30000;
                            },
                            font: {
                                weight: 'bold',
                                style: 'italic'
                            },
                            formatter: function (value, context) {
                                return value;
                            }
                        },
                        colorschemes: {
                            scheme: 'brewer.SetThree10'
                        }
                    }
                }} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { chartData: state.chartData };
};

export default connect(mapStateToProps, {fetchChartData})(ChartView);