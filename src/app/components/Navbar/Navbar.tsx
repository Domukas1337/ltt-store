import Image from "next/image"
import navComp from "./navComponents"
import navExtraComp from "./navExtraComponents"

export default function Navbar() {
    return (
        <div className="text-white">
            <div className="flex flex-row justify-between items-center"> 
                <a href="/">
                    <Image src="/logo.png" alt="logo" width={50} height={50} />
                </a>
                <div className="flex justify-center gap-12 text-xl font-bold">
                    {navComp.map((item) => (
                        <a href={item.path} className="hover:underline" key={item.name}>{item.name}</a>
                    ))}
                </div>
                <div className="flex justify-center gap-4">
                    {navExtraComp.map((item) => (
                        <a href={item.path} className="text-xl" key={item.path}>
                            <item.icon />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}