import Image from "next/image"

import React from 'react';

type ShopItemProps = {
  name: string;
  price: number;
  image: string;
};

const ShopItem: React.FC<ShopItemProps> = ({ name, price, image }) => {
  // Component implementation
  return (
    <div className="text-center">
      <div className="border-2 p-5 rounded-md border-gray-700 bg-gray-700">
        <Image src={image} alt={name} width={350} height={200} />
      </div>
      <h2 className="text-2xl text-white">{name}</h2>
      <p className="text-xl text-gray-300">${price}</p>
    </div>
  );
};

export default ShopItem;