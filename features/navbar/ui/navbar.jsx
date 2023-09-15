import {navbarObj} from "@/features/navbar/constants/constants";
import Link from "next/link";
import {Container} from "@mui/material";

export default function Navbar () {
    return(
        <nav>
            <Container maxWidth="lg">
                {navbarObj.map(item => <Link key={item.id} href={item.href}>{item.label}</Link>)}
            </Container>
        </nav>
    )
}
