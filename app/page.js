import Image from "next/image";
import localImage from "../public/gundam.jpg";
import bandai from "../public/bandai.JPG";
export default function Page() {
  return (
    <>
      <h1>プラモデル授業「ガンプラアカデミア」</h1>

      <Image
        className="image"
        width="650"
        height="100%"
        src={bandai}
        alt="ko"
      />
      <Image
        className="image"
        width="650"
        height="100%"
        src={localImage}
        alt="ko"
      />
    </>
  );
}
