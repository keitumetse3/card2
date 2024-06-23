import keitu from "./assets/keitu.jpg"

function Card() {

    return (
      <div className="Card">
        <img className="picture" src={keitu} alt="profilepicture" />
        <h1 className="name">KEITUMETSE KOBO</h1>
        <p className="about">A self taught full Stack Programmer</p>
       
       
      </div>
    )
  }
  
  export default Card