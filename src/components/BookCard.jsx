function BookCard(props) {
  return (
    <div className="bookcard">
      <h2 className="title">{props.title}</h2>
      <p className="authorname">Author: {props.authorname}</p>
      <p className="price">Price: {props.price}</p>
    </div>
  );
}

export default BookCard;
