type Description = {
  description: string;
};

export function Description({ description }: Description) {
  return <p>{description}</p>;
}
