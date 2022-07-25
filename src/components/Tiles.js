function Tiles({ animal, clickedImg }) {
  // function clickedImg(event) {
  //   console.log(event.target);
  // }
  return (
    <div className="tiles">
      {animal.map((item, index) => {
        return (
          <img
            // onClick={(event) => clickedImg(event)}
            onClick={(event) => clickedImg(event)}
            key={index}
            src={item}
            alt="puppies"
          />
        );
      })}
    </div>
  );
}
export default Tiles;
