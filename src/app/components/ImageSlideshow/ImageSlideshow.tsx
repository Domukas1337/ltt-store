import Image from "next/image";
import { useState } from "react";

export default function ImageSlideshow(){
    const [index, setIndex] = useState(0);

    const goToNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
    const goToPrevious = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    const images = [
        "/cool-image1.jpeg",
        "/cool-image2.png",
    ]

    return (
        <div className="flex justify-between">
            <button onClick={goToPrevious}><Image src="/arrow.svg" alt="next" width={50} height={50} className="rotate-180 invert"/></button>
            <Image src={images[index]} alt="slideshow" className="rounded-lg shadow-lg" width={1600} height={500} />
            <button onClick={goToNext}><Image src="/arrow.svg" alt="next" width={50} height={50} className="invert"/></button>
        </div>
    )
}