import shopItems from "./shopItemComponents"
import ShopItem from "./ShopItem"

export default function ShopItems() {
    return (
        <div className="flex flex-row gap-20">
            {shopItems.map((item) => (
                <div key={item.name} className="text-center">
                    <ShopItem name={item.name} price={item.price} image={item.image} key={item.name}/>    
                </div>
            ))}
        </div>
    )
}