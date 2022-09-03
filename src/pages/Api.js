import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import '../css/Api.css';


export default function Api() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.facthunt.in/fostergem/v1/post/list/public/`)
      .then((response) => response.json())
      .then((json) => setData(json.content));
      // console.log(data.coverImageUrl);
  }, [data]);

  return (
    <>
    <section className="site-body">
    <div className="body-header">
    <h2>Discover  <span><FontAwesomeIcon icon={faPlusCircle} /></span>
    </h2>
    
    </div>
    
    
    <div className="body-grid" >
  {
    data.map(item => {
    return(
        <div className="grid-cards" >
        <div className="card-flex">
         <div className="card">
            <img src= {item.coverImageUrl} alt="card-img" />
          <div className="card-container" >
          <div>
          <em>{item.title}</em>
          </div>

          <div>
          <p>
          By: {item.user.fname} {item.user.lname}</p>
          </div>
          </div>
         </div>
         </div>
        </div>
    )
  })
  }</div>
  
  </section>
  </>
  )

}