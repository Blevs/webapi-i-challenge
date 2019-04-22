import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const UserForm = ({onSubmit, onChange, values, buttonText, ...props}) => {
  return (
    <div className="user-form">
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Name</label>
          <input name="name"
                 palceholder="name"
                 onChange={onChange}
                 value={values.name || ""}/>
        </Form.Field>
        <Form.Field>
          <label>Bio</label>
          <input name="bio"
                 palceholder="bio"
                 onChange={onChange}
                 value={values.bio || ""}/>
        </Form.Field>
        <Button type="submit">{buttonText || "Submit"}</Button>
      </Form>
    </div>
  );
};

export default UserForm;

