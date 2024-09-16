import { Item } from "../../pages/Main";
import ClosetItem from "./ClosetItem";

interface IPlace {
  name: string;
  items: Item[];
  isInCloset: boolean;
  moveItem: (id: string, isInCloset: boolean) => void;
}

export default function Place({ name, items, isInCloset, moveItem }: IPlace) {
  return (
    <div style={{ margin: "10px" }}>
      <h2
        style={{
          textAlign: "center",
          margin: "10px 0",
        }}
      >
        {name}
      </h2>
      <div
        style={{
          display: "flex",
          width: "420px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {items
          .filter((item) => item.isInCloset === isInCloset)
          .map((item) => (
            <ClosetItem key={item.id} item={item} moveItem={moveItem} />
          ))}
      </div>
    </div>
  );
}
