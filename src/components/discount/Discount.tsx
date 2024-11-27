import React, { useEffect, useState } from "react";
import "./Discount.css";

const Discount = () => {
  const product = [
    {
      img: "https://www.fitlife.co.il/wp-content/uploads/2012/04/tomatoes-5356_640.jpg",
      name: "Tomato",
      price: 10,
      discount: "10%",
      expireIn: "10/02/2025",
    },
    {
      img: "https://static.wixstatic.com/media/53e8bb_a1e88e551162485eb4ff962437300872~mv2.jpeg/v1/crop/x_0,y_105,w_1024,h_919/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Banana.jpeg",
      name: "Banana",
      price: 4,
      discount: "20%",
      expireIn: "10/02/2025",
    },
    {
      img: "https://www.kew.org/sites/default/files/styles/original/public/2021-03/photo-1605693681835-f6c2d1d07d81.jpg.webp?itok=TJEuga4f",
      name: "Quocamber",
      price: 30,
      discount: "5%",
      expireIn: "10/02/2025",
    },
    {
      img: "https://www.ynet.co.il/PicServer4/2015/01/21/5830846/58308390991091640360no.jpg",
      name: "Dyipers",
      price: 100,
      discount: "30%",
      expireIn: "10/02/2025",
    },
    {
      img: "https://pic1.calcalist.co.il/picserver3/crop_images/2021/07/26/ry00YZm2Au/ry00YZm2Au_0_84_801_451_0_x-large.jpg",
      name: "Sigaret",
      price: 10,
      discount: "קנה 5 ותקבל אותם ",
      expireIn: "10/02/2025",
    },
    {
      img: "https://cbcsales.co.il/wp-content/uploads/2022/03/7290110115364-500x700.png",
      name: "Coke",
      price: 10,
      discount: "קנה אחד קבל שניים במתנה",
      expireIn: "10/02/2025",
    },
  ];
  const [cuurentProIndex, setCurrentProIndex] = useState(0);
  const [animationState, setAnimationState] = useState("active");
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState("exiting");
  
      setTimeout(() => {
        setCurrentProIndex((prevIndex) => (prevIndex + 1) % product.length); 
        setAnimationState("entering");
        
        // מיד לאחר כניסת האלמנט החדש, הפוך אותו ל-ACTIVE
        setTimeout(() => {
          setAnimationState("active");
        }, 0); // זמן המתנה מינימלי
      }, 1000); // זמן יציאת האלמנט הקודם
    }, 5000); 
  
    return () => {
      clearInterval(interval);
    };
  }, [product.length]);
  
  const p = product[cuurentProIndex];
  return (
    <div className="sales-banner">
      <div className={`banner-content ${animationState}`}>
        <div className="banner-text">
          <h2>מבצע מיוחד</h2>
          <p>
          {p.name} <strong>מוצר:</strong> 
          </p>
          <p>
            <strong>מחיר:</strong> ${p.price} 
          </p>
          <p>
            <strong>מבצע:</strong> {p.discount}
          </p>
          <p>
            <strong>בתוקף עד:</strong> {p.expireIn}
          </p>
        </div>
        <img src={p.img} alt={p.name} />
      </div>
    </div>
  );
};

export default Discount;
