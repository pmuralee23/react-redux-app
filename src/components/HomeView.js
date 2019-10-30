import React from 'react';

class HomeView extends React.Component {
    render() {
        return (
            <div className="container steps">
                <h3>In this Assignment I have used libraries mentioned below</h3>
                <div className="step">Create React App: Npx create-react-app react-assignment</div>
                <div className="step">Axios: Install axios for Backend API calls</div>
                <div className="step">Pie Chart
                    <ul>
                        <li className="sub-step">Install react-chartjs-2 for Charts view</li>
                        <li className="sub-step">For customizing datalabels in the chart: npm install chartjs-plugin-datalabels –save</li>
                        <li className="sub-step">Color Schemas for Pie chart: npm install chartjs-plugin-colorschemes --save</li>
                    </ul>
                </div>
                <div className="step">React Bootstrap Table for Tabular ChartsView
                    <ul>
                        <li className="sub-step">npm install react-bootstrap-table --save</li>
                        <li className="sub-step">Added dummy event handler methods for handling different operations performed on data table</li>
                        <li className="sub-step">Have some commented code which is to customize the components</li>
                    </ul>
                </div>
                <div className="step"> <div>Install redux, react-redux, redux-thunkfor making Backend API calls.</div>
                    <div>The flow with react-redux looks like this:
                        <ul>
                            <li>Create the Provider</li>
                            <li>Pass it a reference to our Redux Store</li>
                            <li>Wrap any component that needs to interact with the Store with Connect</li>
                            <li>Connect passes down the different pieces of state and any action creators we need as props down to the wrapped component.</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeView;