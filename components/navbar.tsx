"use client"

import Link from "next/link";

import { itemsNavbar } from "@/data";

import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const router = usePathname()

    return (
        <MotionTransition position="right" className="fixed z-40 flex flex-col items-start justify-center w-full mt-auto h-max inset-y-1/2">
            <nav>
                <div className="navbar flex flex-col items-center justify-center gap-2 px-1 py-4 rounded-lg bg-white/15 background-blur-sm ml-5">
                    {itemsNavbar.map((item) => (
                        <div
                            key={item.id}
                            className={`w-full px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${router === item.link && 'bg-secondary'}`}
                            data-tooltip-target="tooltip-default">
                            <Link href={item.link} className="flex justify-between navbar-item">
                                {item.icon}
                                <span className="ml-4">{item.title}</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </nav>
        </MotionTransition>
    );
}

export default Navbar;