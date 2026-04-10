import Link from "next/link";

export default function Home() {
  return (
    <div style={{ border: "2px dashed gray", padding: "20px" }}>
      <h1>🏠 Home Page</h1>
      <br />
      <Link href="/about" style={{ color: "blue", textDecoration: "underline" }}>
        Go to About Page 👉
      </Link>
    </div>
  );
}