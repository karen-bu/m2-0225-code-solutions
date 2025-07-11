type HeaderProps = {
  headerText: string;
};

export function Header({ headerText }: HeaderProps) {
  return <h1>{headerText}</h1>;
}
