function Card({ title, value }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>{value}</p>
    </div>
  );
}

export default Card;
