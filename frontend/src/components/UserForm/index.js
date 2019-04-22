import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const UserForm = ({onSubmit, values, buttonText, ...props}) => {
  return (
    <div className="user-form">
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Name</label>
          <input palceholder="name" value={values.name || ""}/>
        </Form.Field>
        <Form.Field>
          <label>Bio</label>
          <input palceholder="bio" value={values.name || ""}/>
        </Form.Field>
        <Button type="submit">{buttonText || "Submit"}</Button>
      </Form>
    </div>
  );
};

export default UserForm;

