import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import styled from "./navbar.module.css";

const Navbar = () => {
  const { data: session, status } = useSession();

  console.log(session, status);

  return (
    <Nav className={styled.navbar}>
      <Link href="/blog">blog</Link>
      <Link href="/dashboard">dashboard</Link>
      {!session && status === "unauthenticated" ? (
        <Link href="#">
          <button
            onClick={(e) => {
              e.preventDefault();
              signIn("github");
            }}
          >
            sign in
          </button>
        </Link>
      ) : null}

      {session && status !== "unauthenticated" ? (
        <Link href="#">
          <button
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            sign out
          </button>
        </Link>
      ) : null}
    </Nav>
  );
};

export default Navbar;
