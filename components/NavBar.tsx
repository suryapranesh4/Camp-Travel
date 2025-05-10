import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="border-2 border-red-500 flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0; relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
    </nav>
  );
};

export default NavBar;
