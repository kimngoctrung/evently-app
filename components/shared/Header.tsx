import { SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
    return (
        <header className="w-full border-b p-5">
            <div className="wrapper flex items-center justify-between">
                <Link
                    className="w-36 "
                    href="/">
                    <Image
                        src="/assets/images/logo.svg"
                        alt="Evently Logo"
                        width={128}
                        height={38}
                    />
                </Link>
                <div className="flex w-32 justify-end gap-3">
                    <SignedOut>
                        <Button
                            asChild
                            className="rounded-full"
                            size="lg">
                            <Link href="/sign-in">Login</Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header>
    );
};

export default Header;
