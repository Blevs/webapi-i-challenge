import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import * as api from '../../services/api';
import { Link } from 'react-router-dom';

const Home = (props) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    api.getUsers()
      .then(res => setUsers(res.data))
      .catch(error => setError(error.response.data.error));
  }, [props.history]);
  const handleDelete = id => {
    api.deleteUser(id)
      .then(res => api.getUsers()
            .then(res => setUsers(res.data))
            .catch(error => setError(error.response.data.error)))
      .catch(error => setError(error.response.data.error));
  };
  return (
    <div className="home">
      Home
      {error && <div>{error}</div>}
      <Card.Group>
        {users.map(user => (
          <Card key={user.id}>
            <Card.Meta style={{display: "flex", justifyContent: "space-between", padding: "0 10px"}}>
              <Link className="edit" to={`/edit/${user.id}`}>edit</Link>
              <span className="delete"
                    onClick={() => handleDelete(user.id)}>
                delete</span>
            </Card.Meta>
            <Card.Content>
              <Card.Header>{user.name}</Card.Header>
              <Card.Description>{user.bio}</Card.Description>
              <p></p>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default Home;
