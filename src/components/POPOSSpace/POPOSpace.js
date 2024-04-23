// src/POPOSSpace.js
import { Link } from "react-router-dom";
import "./POPOSpace.css";

function POPOSSpace(props) {
  const { name, image, address, hours, id } = props;
  return (
    <section className="POPOSSpace" role="article">
      <h1>
        {" "}
        <Link className="POPOSSpace-title" role="title"// add a class name!
				to={`/details/${id}`}>
				{name}</Link>
      </h1>

      <div className="POPOSSpace-info">
      <p>{address}</p>
      <p>{hours}</p>
      </div>
      
      <Link to={`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}images/${image}`}
          width="300"
          height="300"
          alt="Public-img"
        />
      </Link>
    </section>
  );
}

export default POPOSSpace;
