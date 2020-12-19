import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';

class Users extends Component {
  render() {
    let addButton = null;

    addButton = (
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link
            to={'/users/create'}
            className="btn btn-sm btn-outline-secondary"
          >
            Add
          </Link>
        </div>
      </div>
    );
    return (
      <Wrapper>
        {addButton}
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </Wrapper>
    );
  }
}

export default Users;
