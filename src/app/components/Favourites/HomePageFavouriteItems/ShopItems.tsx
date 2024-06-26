import shopItems from "./shopItemComponents"
import ShopItem from "./ShopItem"

export default function ShopItems() {
    return (
        <div className="flex flex-row gap-2">
            {shopItems.map((item) => (
                <div key={item.name} className="text-center">
                    <ShopItem name={item.name} price={item.price} image={item.image} width={350} key={item.name}/>    
                </div>
            ))}
        </div>
    )
}