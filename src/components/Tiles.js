function Tiles({ animal }) {
  return (
    <div className="tiles">
      {animal.map((item, index) => {
        return <img src={item} alt="puppies" />;
      })}
    </div>
  );
}
export default Tiles;
