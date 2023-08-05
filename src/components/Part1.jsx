import "../css/part1.css";
import img from "../assets/svg/photos/photo1.png"



function Part1() {
  return (
    <div className="section-one">
      {/* Left-Area */}
      <div className="left-section-one">
        <h1>ABOVE</h1>
        <h1>BEYOND</h1>
        <h1>TOGETHER</h1>
        
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          quo tenetur molestias.
        </p>

        <button>Instant Assistance</button>
      </div>
      {/* Right-Area */} 
        <div className="right-section-one">
        <img src={img} alt="Png-1" className="section-one-img" />
      </div>
    </div>
  );
}

export default Part1; 
