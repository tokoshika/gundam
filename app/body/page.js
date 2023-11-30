import Image from "next/image";
import image1 from "../../public/IMG_2291.JPG";
import image3 from "../../public/IMG_2293.JPG";
import image4 from "../../public/IMG_2294.JPG";
import image5 from "../../public/IMG_2298.JPG";
import image6 from "../../public/IMG_2299.JPG";

export default function Body() {
  return (
    <>
      <h1>ボディを作ろう!</h1>
      <div>
        <p>（1）△の形をあわせよう</p>
        <p>
          <span>白いパーツの向き</span>に気をつけて。
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
        <p>（2）黄色いパーツも△の穴に合わせて</p>
        <Image
          className="image"
          width="360"
          height="250"
          src={image3}
          alt="ko"
        />
      </div>
      <div>
        <p>（3）ボディの下から赤いパーツをはめます</p>
        <p>
          <span>赤いパーツは二つあるよ</span>
        </p>
        <Image
          className="image"
          width="360"
          height="250"
          src={image4}
          alt="ko"
        />
      </div>
      <div>
        <p>（4）肩の関節は向きに注意</p>
        <p>
          <span>上手に入ると、パチンと音がします</span>
        </p>
        <Image
          className="image"
          width="360"
          height="250"
          src={image5}
          alt="ko"
        />
      </div>
      <div>
        <p>（4）ボディの完成</p>

        <Image
          className="image"
          width="360"
          height="250"
          src={image6}
          alt="ko"
        />
      </div>
    </>
  );
}
