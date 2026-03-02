import { Item } from "./Item";
import "./Items.scss"
function Items() {
  return (
    <div className="item-grid">
      <Item class={"item"} src={"https://bandcamp.com/EmbeddedPlayer/album=2267859819/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true"} href={"https://socialvoid.bandcamp.com/album/lost-media"} title={"Lost Media"}></Item>
      <Item class={"item"} src={"https://bandcamp.com/EmbeddedPlayer/album=2447489558/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true"} href={"https://socialvoid.bandcamp.com/album/resurrection-choir"} title={"Resurrection Choir"}></Item>
      <Item class={"item"} src={"https://bandcamp.com/EmbeddedPlayer/album=1132993419/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true"} href={"https://socialvoid.bandcamp.com/album/propeller"} title={"Propeller"}></Item>
    </div>
  );
}
export default Items;
