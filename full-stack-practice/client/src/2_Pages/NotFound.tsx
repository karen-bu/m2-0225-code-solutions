import billyMays2 from '../assets/billy-mays-2.jpg';

export function NotFound() {
  return (
    <div>
      <div className="page-container">
        <h2>SORRY!!! YOUR PAGE WAS NOT FOUND!!!</h2>
        <img
          src={billyMays2}
          alt="billy-mays-thumbs-down"
          className="page-img"
        />
      </div>
    </div>
  );
}
