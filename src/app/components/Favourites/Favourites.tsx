import Link from "next/link"
import ShopItems from "./HomePageFavouriteItems/ShopItems"

export default function Favourites() {
    return (
        <div className="flex flex-row justify-between">
            <div className="">
                <h1 className="text-3xl text-white font-bold mb-6">Check out <br />our favourites</h1>
                <Link href="/" className="text-xl text-white font-bold border-2 px-5 py-2 rounded-lg bg-slate-600 hover:bg-slate-400 hover:text-2xl transition-all duration-150">View all</Link>
            </div>
            <div className="">
                <ShopItems />
            </div>
        </div>
    )
}