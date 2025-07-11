import './Image.css';

type ImgSRC = {
  imgSRC: string;
};

export function Image({ imgSRC }: ImgSRC) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={imgSRC} alt="space-image" />
      </div>
    </div>
  );
}
