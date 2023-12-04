export default function Photo() {
  return (
    <>
      <h1>みんなのガンダム</h1>
      <button className="gundam-btn">
        <a
          className="gundam-link"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdPK8rOZhXdybokCrfvLFg_-deDpd04jBA1I5rZekHze7sMfQ/viewform"
        >
          写真投稿フォーム
        </a>
      </button>

      <br />
      <button className="gundam-btn">
        <a
          className="gundam-link"
          href="https://drive.google.com/drive/folders/1ZdaDi2sDUIwIWMbkI69OGSVl_QclRZ99ilBjvF-YdU_95LD_fPbjGVVQlupliLxoC4EOweNJ?usp=drive_link"
        >
          みんなのガンダム
        </a>
      </button>
    </>
  );
}
