// import { useState } from 'react';
import { RegistrationFormUncontrolled } from './Form';
import { RegistrationFormControlled } from './Form';
import { UserForm } from './Form';
import './App.css';

function App() {
  return (
    <>
      <h2>Uncontrolled Form</h2>
      <RegistrationFormUncontrolled />
      <h2>Controlled Form</h2>
      <RegistrationFormControlled />
      <h2>Edit Form</h2>
      <h3>Create</h3>
      <UserForm user={{}} />
      <h3>Edit</h3>
      <UserForm user={{ username: 'Karen', password: 'Hello123' }} />
    </>
  );
}

export default App;
