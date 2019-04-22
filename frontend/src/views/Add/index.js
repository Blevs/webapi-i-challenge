import React, { useState } from 'react';
import UserForm from '../../components/UserForm';
import * as api from '../../services/api.js';

const Add = ({match, history, ...props}) => {
  const id = match.params.id;
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const onChange = event => {
    event.preventDefault();
    event.persist();
    setUser({...user, [event.target.name]: event.target.value});
  };
  const onSubmit = event => {
    event.preventDefault();
    api.createUser(user)
      .then(res => history.push("/"))
      .catch(error => setError(error.response.data.error));
  };
  return (
    <div className="add">
      <h1>Add</h1>
      {error && <div>{error}</div>}
      <UserForm onChange={onChange}
                  onSubmit={onSubmit}
                  values={user}
                  buttonText="Add" />
    </div>
  );
};

export default Add;
