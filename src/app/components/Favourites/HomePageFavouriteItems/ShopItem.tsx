import Image from "next/image"
import Link from "next/link";

import React from 'react';

type ShopItemProps = {
  name: string;
  price: number;
  image: string;
  width: number;
};

const ShopItem: React.FC<ShopItemProps> = ({ name, price, image, width }) => {
  // Component implementation
  return (
    <div className="text-center">
      <div className="border-2 p-5 rounded-md border-gray-700 bg-gray-700">
        <Link href={`/products/${name}`}>
          <Image src={image} alt={name} width={width || 200} height={200} className="hover:scale-105 transition-transform" />
        </Link>
      </div>
      <h2 className="text-2xl text-white">{name}</h2>
      <p className="text-xl text-gray-300">${price}</p>
    </div>
  );
};

export default ShopItem;