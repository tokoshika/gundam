import Image from "next/image";
import image1 from "../../public/IMG_2305.JPG";
import image2 from "../../public/IMG_2306.JPG";
import image3 from "../../public/IMG_2307.JPG";
import image4 from "../../public/IMG_2308.JPG";
import image5 from "../../public/IMG_2309.JPG";
export default function Arms() {
  return (
    <>
      <h1>うでを作ろう</h1>
      <div>
        <p>
          （1）<span>左右の違いに気をつけよう</span>
        </p>

        <Image
          className="image"
          width="650"
          height="100%"
          src={image1}
          alt="ko"
        />
      </div>
      <div>
        <p>（2）親指が手前にくるよ</p>
        <Image
          className="image"
          width="650"
          height="100%"
          src={image2}
          alt="ko"
        />
      </div>
      <div>
        <p>（3）肩の向きも、方向をよくみてね</p>
        <Image
          className="image"
          width="650"
          height="100%"
          src={image3}
          alt="ko"
        />
      </div>
      <div>
        <p>
          （4）肩の向きが違うと<span>肩パッドが入らなくなるよ</span>
        </p>
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
          （3）<span>あたま・どう・こし・うで</span>
          を取り付けて、上半身の完成です
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
