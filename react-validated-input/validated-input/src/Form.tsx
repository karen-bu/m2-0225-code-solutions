import './Form.css';
import { useState } from 'react';

export function ValidatedInput() {
  const [password, setPassword] = useState<string>();

  function displayErrorMessage(password: string | undefined) {
    if (password === undefined) return undefined;

    const trimmedPassword = password.trim();

    if (trimmedPassword === '') {
      return 'you need to enter a password';
    } else if (trimmedPassword.length < 8) {
      return 'your password must be more than 8 characters in length';
    } else if (!/\d/g.test(trimmedPassword)) {
      return 'your password must contain a number';
    } else if (!/[A-Z]/g.test(trimmedPassword)) {
      return 'your password must contain a capital letter';
    } else if (!/[a-z]/g.test(trimmedPassword)) {
      return 'your password must contain a lowercase letter';
    } else if (!/[!@#$%^&*()]/g.test(trimmedPassword)) {
      return 'your password must contain a special character - !, @, #, %, ^, &, *, (, or )';
    } else return undefined;
  }

  const errorMessage = displayErrorMessage(password);
  const errorIcon = errorMessage ? '❌' : password === undefined ? '' : '✅';

  return (
    <div>
      <div>
        <h3>Password</h3>
      </div>
      <div className="input-holder">
        <div className="column-80">
          <input
            type="text"
            placeholder="please enter your password here!"
            value={password ?? ''}
            onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div className="column-20">
          <div>{errorIcon}</div>
        </div>
      </div>
      <div>
        <p>{errorMessage}</p>
      </div>
    </div>
  );
}

// ARCHIVE

// export function ValidatedInput() {
//   const [password, setPassword] = useState('');

//   const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//   const caps = [
//     'A',
//     'B',
//     'C',
//     'D',
//     'E',
//     'F',
//     'G',
//     'H',
//     'I',
//     'J',
//     'K',
//     'L',
//     'M',
//     'N',
//     'O',
//     'P',
//     'Q',
//     'R',
//     'S',
//     'T',
//     'U',
//     'V',
//     'W',
//     'X',
//     'Y',
//     'Z',
//   ];
//   const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

//   function numCheck(password: string) {
//     for (let i = 0; i < numbers.length; i++) {
//       if (password.includes(String(numbers[i]))) {
//         return true;
//       }
//     }
//   }

//   function capsCheck(password: string) {
//     for (let i = 0; i < caps.length; i++) {
//       if (password.includes(caps[i])) {
//         return true;
//       }
//     }
//   }

//   function specCharCheck(password: string) {
//     for (let i = 0; i < specialCharacters.length; i++) {
//       if (password.includes(specialCharacters[i])) {
//         return true;
//       }
//     }
//   }

//   function displayErrorMessage(password: string) {
//     if (password === '') {
//       return '';
//     } else if (password.length < 8) {
//       return 'your password must be more than 8 characters in length';
//     } else if (!numCheck(password)) {
//       return 'your password must contain a number';
//     } else if (!capsCheck(password)) {
//       return 'your password must contain a capital letter';
//     } else if (!specCharCheck(password)) {
//       return 'your password must contain a special character - !, @, #, %, ^, &, *, (, or )';
//     }
//   }

//   function displayErrorIcon(password: string) {
//     if (password === '') {
//       return '';
//     } else if (password.length < 8) {
//       return '❌';
//     } else if (!numCheck(password)) {
//       return '❌';
//     } else if (!capsCheck(password)) {
//       return '❌';
//     } else if (!specCharCheck(password)) {
//       return '❌';
//     }
//   }

//   const errorMessage = displayErrorMessage(password);
//   const errorIcon = displayErrorIcon(password);

//   return (
//     <div>
//       <div>
//         <h3>Password</h3>
//       </div>
//       <div className="input-holder">
//         <div className="column-80">
//           <input
//             type="text"
//             placeholder="please enter your password here!"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}></input>
//         </div>
//         <div className="column-20">
//           <div>{errorIcon}</div>
//         </div>
//       </div>
//       <div>
//         <p>{errorMessage}</p>
//       </div>
//     </div>
//   );
// }
