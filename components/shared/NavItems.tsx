"use client";
import { headerLinks } from "@/constants/indes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
    const pathname = usePathname();
    return (
        <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
            {headerLinks.map((link) => {
                const isActave = pathname === link.route;
                return (
                    <li
                        key={link.route}
                        className={`${
                            isActave && "text-primary-500"
                        } flex-center p-medium-16 whitespace-nowrap hover:text-primary-500 `}>
                        <Link href={link.route}>{link.label}</Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavItems;
