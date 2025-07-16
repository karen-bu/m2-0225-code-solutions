type CountProps = {
  count: number;
};

export function Description({ count }: CountProps) {
  return <p>clicks: {count} </p>;
}
