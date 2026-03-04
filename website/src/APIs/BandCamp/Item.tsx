interface Item {
  class: string,
  src: string,
  href: string,
  title: string
}

export function Item(props: Item) {
  return (
    <iframe
      title={props.title + ', an Album by Social Void'}
      className={props.class}
      src={props.src}
      seamless>
      <a href={props.href}>{props.title}</a>
    </iframe>
  );
}