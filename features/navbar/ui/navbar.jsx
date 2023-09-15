import {navbarObj} from "@/features/navbar/constants/constants";
import Link from "next/link";

export default function Navbar () {
    return(
        <nav>
            {navbarObj.map(item => <Link key={item.id} href={item.href}>{item.label}</Link>)}
        </nav>
    )
}
