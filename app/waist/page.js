import Image from "next/image";
import image1 from "../../public/IMG_2300.JPG";
import image2 from "../../public/IMG_2301.JPG";
import image3 from "../../public/IMG_2302.JPG";
import image4 from "../../public/IMG_2303.JPG";
import image5 from "../../public/IMG_2304.JPG";

export default function Waist() {
  return (
    <>
      <h1>こしを作ろう</h1>
      <div>
        <p>（1）パーツが多いので、なくさないように</p>

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
          （2）<span>黄色のVの字</span>が見えたらOK
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
        <p>（3）横から見ると・・・</p>
        <Image
          className="image"
          width="650"
          height="100%"
          src={image3}
          alt="ko"
        />
      </div>
      <div>
        <p>（4）正面に四角いパーツをとりつけます</p>
        <Image
          className="image"
          width="650"
          height="100%"
          src={image4}
          alt="ko"
        />
      </div>
      <div>
        <p>（3）こしの完成です</p>
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
