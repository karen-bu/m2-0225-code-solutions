type textProp = {
  text: string;
};

export function Description({ text }: textProp) {
  return <p>{text}</p>;
}
