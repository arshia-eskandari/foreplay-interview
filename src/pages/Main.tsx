import { useState } from "react";
import Place from "../components/interview/Place";

export interface Item {
  id: string;
  isInCloset: boolean;
  image: string;
}

export default function Main() {
  const [items, setItems] = useState<Item[]>([
    {
      id: "1234690324809023",
      isInCloset: true,
      image: "../../public/dress.png",
    },
    {
      id: "34534534534543534",
      isInCloset: true,
      image: "../../public/komono.png",
    },
    {
      id: "68678678678678787",
      isInCloset: true,
      image: "../../public/shoes.png",
    },
    {
      id: "34534545487878788",
      isInCloset: false,
      image: "../../public/sunglasses.png",
    },
  ]);

  const moveItem = (id: string, isInCloset: boolean) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    if (itemIndex === -1) return;
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[itemIndex].isInCloset = !isInCloset;
      return newItems;
    });
  };

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Place
        name="Closet"
        items={items}
        moveItem={moveItem}
        isInCloset={true}
      />
      <Place
        name="Suitcase"
        items={items}
        moveItem={moveItem}
        isInCloset={false}
      />
    </div>
  );
}
