import bestItems from "./bestSellerItems"
import ShopItem from "../Favourites/HomePageFavouriteItems/ShopItem"

export default function BestSeller() {
    return (
        <div>
            <div>
                <h1 className="text-5xl text-white text-center font-bold mb-6">Best Seller</h1>
            </div>
            <div className="flex flex-row justify-center gap-2">
                {bestItems.map((item) => (
                    <div key={item.name} className="">
                        <ShopItem name={item.name} price={item.price} image={item.image} width={400} key={item.name}/>    
                    </div>
                ))}
            </div>
            <div className="text-center mt-2">
                <button className="text-5xl text-white bg-purple-500 transition-all duration-150 p-2 rounded-md hover:scale-110">View all</button>
            </div>
        </div>
    )
}