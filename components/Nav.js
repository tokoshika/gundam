import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="nav">
        <Link className="link" href="/">
          ホーム
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
        <Link className="link" href="photo/">
          写真投稿
        </Link>
      </div>
    </>
  );
}
