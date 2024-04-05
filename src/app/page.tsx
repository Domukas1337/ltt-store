'use client'
import Navbar from "./components/Navbar/Navbar"
import ImageSlideshow from "./components/ImageSlideshow/ImageSlideshow"
import Favourites from "./components/Favourites/Favourites"

export default function Home() {
  return (
    <div className="">
      <div className="mx-10 my-2">
        <Navbar />
      </div>

      <div className="py-10 mx-20">
        <ImageSlideshow />
      </div>

      <div className="mx-10 py-10">
        <Favourites />
      </div>
    </div>
  )
}