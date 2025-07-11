type ButtonText = {
  buttonText: string;
};

export function Button({ buttonText }: ButtonText) {
  return <button>{buttonText}</button>;
}
