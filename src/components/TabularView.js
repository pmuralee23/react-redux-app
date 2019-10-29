import React from 'react';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {fetchTableData} from '../actions/tabularViewActions';

class TabularView extends React.Component {
    componentDidMount() {
        this.props.fetchTableData();
    }

    render() {
        return (
            <div className="container">
                <div className="view-header">
                    <h2>Tabular View </h2>
                </div>
                <BootstrapTable data={this.props.tabularData}
                    selectRow={{
                        mode: 'checkbox'
                    }}
                    cellEdit={{
                        mode: 'click',
                        blurToSave: true,
                        afterSaveCell: this.onAfterSaveCell,
                        afterColumnFilter: this.afterColumnFilter
                    }}
                    striped
                    hover
                    insertRow
                    deleteRow
                    search
                    options= {{
                        onDeleteRow: this.onDeleteRow,
                        onAddRow: this.onAddRow
                    }}>
                    <TableHeaderColumn dataField='year' isKey={true}>Year</TableHeaderColumn>
                    <TableHeaderColumn dataField='organization_group'>Organization Group</TableHeaderColumn>
                    <TableHeaderColumn dataField='department_code'>Department Code</TableHeaderColumn>
                    <TableHeaderColumn dataField='union_code'>Union Code</TableHeaderColumn>
                    <TableHeaderColumn dataField='union'>Union</TableHeaderColumn>
                    <TableHeaderColumn dataField='job_family'>Job Family</TableHeaderColumn>
                    <TableHeaderColumn dataField='employee_identifier'>Employee Identifier</TableHeaderColumn>
                    <TableHeaderColumn dataField='salaries'>Salaries</TableHeaderColumn>
                    <TableHeaderColumn dataField='total_compensation'>Total Compensation</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return { tabularData: state.tableData };
};

export default connect(mapStateToProps, {fetchTableData})(TabularView);