import { Item } from "../../pages/Main";

interface IClosetItem {
  item: Item;
  moveItem: (id: string, isInCloset: boolean) => void;
}

export default function ClosetItem({
  item: { id, isInCloset, image },
  moveItem,
}: IClosetItem) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid gray",
        borderRadius: "5px",
        padding: "10px"
      }}
    >
      <img src={image} width={"178px"} height={"178px"} />
      <button
        onClick={() => moveItem(id, isInCloset)}
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          margin: "10px",
          border: "1px solid gray",
          borderRadius: "5px",
        }}
      >
        Move
        <img
          src={
            isInCloset
              ? "../../../public/arrow-left.svg"
              : "../../../public/arrow-left.svg"
          }
          width={"20px"}
          height={"20px"}
          style={{
            rotate: isInCloset ? "" : "180deg",
          }}
        />
      </button>
    </div>
  );
}
