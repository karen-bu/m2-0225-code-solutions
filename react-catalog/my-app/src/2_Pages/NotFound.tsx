import billyMays2 from '../assets/billy-mays-2.jpg';

export function NotFound() {
  return (
    <div>
      <div className="not-found-container">
        <h2>WE COULD NOT FIND YOUR PAGE, SORRY!!!</h2>
        <img src={billyMays2} alt="billy-mays-thumbs-down" />
      </div>
    </div>
  );
}
