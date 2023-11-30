import Link from "next/link";

export default function Nav() {
  return (
    <>
      <Link className="link" href="/">
        Home
      </Link>
      <Link className="link" href="head/">
        あたま
      </Link>
      <Link className="link" href="body/">
        ボディ
      </Link>
      <Link className="link" href="waist/">
        こし
      </Link>
      <Link className="link" href="arms/">
        うで
      </Link>
      <Link className="link" href="legs/">
        あし
      </Link>
    </>
  );
}
