import Image from "next/image";
import image1 from "../../public/IMG_2311.JPG";
import image2 from "../../public/IMG_2313.JPG";
import image3 from "../../public/IMG_2314.JPG";
import image4 from "../../public/IMG_2315.JPG";
import image5 from "../../public/IMG_2316.JPG";

export default function Legs() {
  return (
    <>
      <h1>あしを作ろう</h1>
      <div>
        <p>
          （1）<span>ここが一番難しいよ！</span>
        </p>
        <p>無理に入れようとすると、こわれるので注意しましょう</p>

        <Image
          className="image"
          width="650"
          height="100%"
          src={image1}
          alt="ko"
        />
      </div>
      <div>
        <p>
          （2）<span>これは、左右を気にしなくてOK</span>
        </p>
        <Image
          className="image"
          width="650"
          height="100%"
          src={image2}
          alt="ko"
        />
      </div>
      <div>
        <p>（3）あしのパーツをたてに並べて、下から順番に組み立てます</p>
        <Image
          className="image"
          width="650"
          height="100%"
          src={image3}
          alt="ko"
        />
      </div>
      <div>
        <p>（4）完成した日本のあしを上半身に取り付けると・・・</p>
        <Image
          className="image"
          width="650"
          height="100%"
          src={image4}
          alt="ko"
        />
      </div>
      <div>
        <p>
          （5）<span>ガンダムの完成です！</span>
        </p>
        <Image
          className="image"
          width="650"
          height="100%"
          src={image5}
          alt="ko"
        />
      </div>
    </>
  );
}
