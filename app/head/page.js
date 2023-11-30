import Image from "next/image";
import image1 from "../../public/IMG_2288.jpg";
import image2 from "../../public/IMG_2289.jpg";
import image3 from "../../public/IMG_2290.jpg";
export default function Head() {
  return (
    <>
      <h1>頭を作ろう</h1>
      <div>
        <p>（1）形をよく見て、さしこもう</p>
        <p>
          <span>向きが違うと上手く入りません。</span>無理しないでね。
        </p>
        <Image
          className="image"
          width="360"
          height="250"
          src={image1}
          alt="ko"
        />
      </div>
      <div>
        <p>（2）左が顔の正面です</p>
        <Image
          className="image"
          width="360"
          height="250"
          src={image2}
          alt="ko"
        />
      </div>
      <div>
        <p>（3）顔の完成です</p>
        <Image
          className="image"
          width="360"
          height="250"
          src={image3}
          alt="ko"
        />
      </div>
    </>
  );
}
