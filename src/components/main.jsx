import React from "react";
import './main.css';
function Main(){
  const quote = "Keep Smiling :)";
  const features = [
    {
      title: "WellBeing Score",
      className: "feature feature1",
      imageSrc: "https://i.pinimg.com/564x/e7/1d/bb/e71dbbeceaa5d80af3406dd40824ef24.jpg", 
    
    },
    {
      title: "Immediate Help",
      className: "feature feature2",
      imageSrc: "https://img.freepik.com/free-vector/young-man-practicing-yoga-exercises-mental-body-health_74855-20437.jpg?w=1060&t=st=1695492145~exp=1695492745~hmac=6acee0885fb9611e82e56b1f53e3a4e0c22e5ea145a25d671fa6fb3d160a6d5a", // Replace with the actual image source
    },
    {
      title: "Cheer Up!",
      className: "feature feature3",
      imageSrc: "https://img.freepik.com/free-vector/cheer-up-concept-illustration_114360-7563.jpg?w=740&t=st=1695492227~exp=1695492827~hmac=044562650c088adccd13855f36b1865da943c74d55e14c35a7a577455781a5d1", // Replace with the actual image source
    },
    {
      title: "Chatbot",
      className: "feature feature4",
      imageSrc: "https://img.freepik.com/free-vector/mental-health-understanding-brain-vector_53876-79082.jpg?w=740&t=st=1695492302~exp=1695492902~hmac=83896abec057bd732eb7e87913f700eeb0e6e487382c41252a3cfca93782faf6", // Replace with the actual image source
    },
    {
      title: "Relax",
      className: "feature feature5",
      imageSrc: "https://img.freepik.com/free-vector/brain-human-anatomy-biology-organ-body-system-health-care-medical-hand-drawn-cartoon-art-illustration_56104-953.jpg?w=900&t=st=1695492406~exp=1695493006~hmac=0cf4e6b9db105240f94266fbb3e7dfea56fdcbe4f243edf743dc5b247c9690a8", // Replace with the actual image source
    },
  ];

  return (
    <div className="app-container">
      {features.map((feature, index) => (
        <div key={index} className="feature">
          <img src={feature.imageSrc} alt={feature.title} />
          <h2>{feature.title}</h2>
          <p>{feature.description}</p>
        </div>
      ))}
      <div className="quote-container">
        <p className="quote-text">{quote}</p>
      </div>
    </div>
  );
}

export default Main;



  