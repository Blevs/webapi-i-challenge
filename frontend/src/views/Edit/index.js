import React, { useEffect, useState } from 'react';
import UserForm from '../../components/UserForm';
import * as api from '../../services/api.js';

const Edit = ({match, history, ...props}) => {
  const id = match.params.id;
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    api.getUser(id)
      .then(res => setUser(res.data))
      .catch(error => setError(error.response.data.error));
  }, [id]);
  const onChange = event => {
    event.preventDefault();
    event.persist();
    setUser({...user, [event.target.name]: event.target.value});
  };
  const onSubmit = event => {
    event.preventDefault();
    api.updateUser(id, user)
      .then(res => history.push("/"))
      .catch(error => setError(error.response.data.error));
  };
  return (
    <div className="edit">
      <h1>Edit</h1>
      {error && <div>{error}</div>}
      {user
       ? <UserForm onChange={onChange}
                   onSubmit={onSubmit}
                   values={user}
                   buttonText="Edit" />
       : <div>Loading...</div>
      }
    </div>
  );
};

export default Edit;
