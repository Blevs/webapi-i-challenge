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
      .catch(error => setError(Error));
  }, [props.history]);
  return (
    <div className="home">
      Home
      <Card.Group>
        {users.map(user => (
          <Card key={user.id}>
            <Card.Meta style={{display: "flex", justifyContent: "space-between", padding: "0 10px"}}>
              <Link className="edit" to={`/edit/${user.id}`}>edit</Link>
              <span className="delete">delete</span>
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
