import Image from "next/image";
import localImage from "../public/gundam.jpg";
export default function Page() {
  return (
    <>
      <h1>This is Gundam</h1>
      <Image
        className="image"
        width="500"
        height="380"
        src={localImage}
        alt="ko"
      />
    </>
  );
}
