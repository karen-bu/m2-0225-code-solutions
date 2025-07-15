type captionProp = {
  caption: string;
};

export function Caption({ caption }: captionProp) {
  return <h3>{caption}</h3>;
}
