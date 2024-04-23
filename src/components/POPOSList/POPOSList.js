// src/POPOSList.js'
import { useState } from "react";
import POPOSSpace from "../POPOSSpace/POPOSpace";
import data from "../../sfpopos-data.js";
import "./POPOSList.css";

function POPOSList() {
  const [ query, setQuery ] = useState('')
  const spaces = data.filter(({ features, title, address }) => {
    // Include your filtering logic here
    // Example: check if title or address includes the query
    return title.toLowerCase().includes(query.toLowerCase()) || address.toLowerCase().includes(query.toLowerCase());
  }).map((obj) => {
    const { id, title, address, images, hours,  } = obj;   //features goes after hours
    return (
      <POPOSSpace
        id={id} // Use id here
        key={`${title}-${id}`} // Use id here
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
    );
  });



    
  return (
    <section className="POPOSList">
			<form>
				<input
					value={query}
					placeholder="search"
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
			{spaces}
    </section>
  )
};

export default POPOSList;
