import Image from "next/image";
import localImage from "../public/gundam.jpg";
import bandai from "../public/bandai.JPG";
import Iframe from "react-iframe";
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
      <br />
      <Image
        className="image"
        width="650"
        height="100%"
        src={localImage}
        alt="ko"
      />

      <div className="makeGundam">
        <Iframe
          url="https://api01-platform.stream.co.jp/apiservice/plt3/NjY2Mw%3d%3d%23MzI%3d%23280%23168%230%233FE2A0D9E600%23MDoyOjc6YTpmOzEwOzEwOzEw%23"
          width="650px"
          height="320px"
          id="gundam"
          className="makeGundam"
          display="block"
          position="relative"
        />
        <br />
      </div>
    </>
  );
}
