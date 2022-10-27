import Card from "react-bootstrap/Card";

function MovieCard({ movie }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie?.Poster} />
      <Card.Body>
        <Card.Title style={{ color: "black" }}>
          {movie?.Title}{" "}
          <span style={{ fontSize: "13px" }}>
            ({movie?.Year})
          </span>
        </Card.Title>
        <Card.Text style={{ color: "black", fontSize: "15px" }}>
          {movie?.BoxOffice}
        </Card.Text>
        <Card.Text style={{ color: "black", fontSize: "12px" }}>
          {movie?.Plot.slice(0, 100)}...
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
