interface Item {
  class: string,
  src: string,
  href: string,
  title: string
}

export function Item(props: Item) {
  return (
    <iframe
      className={props.class}
      src={props.src}
      seamless>
      <a href={props.href}>{props.title}</a>
    </iframe>
  );
}