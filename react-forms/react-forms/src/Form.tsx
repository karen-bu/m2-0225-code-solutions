import type { FormEvent } from 'react';
import { useState } from 'react';

// UNCONTROLLED FORM

export function RegistrationFormUncontrolled() {
  function handleSubmitUncontrolled(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    const formCurrentTarget = event.currentTarget;
    const formData = new FormData(formCurrentTarget);
    const { username, password } = Object.fromEntries(formData);
    console.log({ username, password });
  }

  return (
    <form onSubmit={handleSubmitUncontrolled}>
      <div>
        <label>Username</label>
      </div>
      <div>
        <input type="text" name="username"></input>
      </div>
      <div>
        <label>Password</label>
      </div>
      <div>
        <input type="text" name="password"></input>
      </div>
      <div>
        <button>SUBMIT FORM</button>
      </div>
    </form>
  );
}

// CONTROLLED FORM

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmitControlled(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log({ username, password });
  }

  return (
    <form onSubmit={handleSubmitControlled}>
      <div>
        <label>Username</label>
      </div>
      <div>
        <input
          onChange={(event) => setUsername(event.target.value)}
          value={username}
          type="text"></input>
      </div>
      <div>
        <label>Password</label>
      </div>
      <div>
        <input
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          type="text"></input>
      </div>
      <div>
        <button>SUBMIT FORM</button>
      </div>
    </form>
  );
}

// EDIT FORM

type User = {
  username?: string;
  password?: string;
};

type UserProp = {
  user: User;
};

export function UserForm({ user }: UserProp) {
  const [username, setUsername] = useState(user?.username ?? '');
  const [password, setPassword] = useState(user?.password ?? '');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log({ username, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
      </div>
      <div>
        <input
          onChange={(event) => setUsername(event.target.value)}
          value={username}
          type="text"></input>
      </div>
      <div>
        <label>Password</label>
      </div>
      <div>
        <input
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          type="text"></input>
      </div>
      <div>
        <button>SUBMIT FORM</button>
      </div>
    </form>
  );
}
