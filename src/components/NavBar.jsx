"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; //similar to NavLink in React

function NavBar() {
  const path = usePathname(); //hook to check current path

  return (
    <nav
      className="NavBar"
      style={{ backgroundColor: "#09193b", color: "#14bbe5" }}
    >
      <ul className="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link
            href="/dash"
            className={path.startsWith("/dash") ? "active" : null}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={path.startsWith("/dash") ? "active" : null}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/posts/"
            className={path.startsWith("/dash") ? "active" : null}
          >
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar