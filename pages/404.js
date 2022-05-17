import Link from "next/link";
const PageNotFound = () => {
  return (
    <div style={{ textDecoration: "none", margin: "50px" }}>
      <h1>Page Not Found</h1>
      <Link href="/main/welcome">Back to Home</Link>
    </div>
  );
};

export default PageNotFound;
