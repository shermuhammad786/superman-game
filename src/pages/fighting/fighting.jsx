import "./fighting.css";
import superman from "../../assets/superman/waiting-for-fighting.webp";
import supermanRun from "../../assets/superman/running.gif";
import supermanPunch from "../../assets/superman/superman-righthand-punch.webp";
import supermanJump from "../../assets/superman/super-jump.webp";
import batman from "../../assets/superman/batman.webp";
import batmanRunning from "../../assets/superman/batman-running.gif";
import batmanFighting from "../../assets/superman/batman-fighting.gif";
import batmanJump from "../../assets/superman/batman-jump.gif";
import { useState, useEffect } from "react";
import Winner from "./winner";

// eslint-disable-next-line react/prop-types
export default function Fighting({ setSuperProgressValue, setEnmyProgressValue }) {
  const [positionSuperman, setPositionSuperman] = useState({ x: 0, y: 0 });
  const [positionBatman, setPositionBatman] = useState({ x: 300, y: 0 }); // Start Batman at a different position
  const [imageSuperman, setImageSuperman] = useState(superman);
  const [imageBatman, setImageBatman] = useState(batman);
  const [isFlippedSuperman, setIsFlippedSuperman] = useState(false);
  const [isFlippedBatman, setIsFlippedBatman] = useState(false);
  const [collision, setCollision] = useState(false);
  const [superWin, setSuperWin] = useState(false);
  const [batWin, setBatWin] = useState(false);




  // console.log('sizeSuperman: ', sizeSuperman);
  // console.log('positionSuperman: ', positionSuperman);
  // console.log('sizeBatman: ', sizeBatman);
  // console.log('positionBatman: ', positionBatman);


  // Function to check if two rectangles overlap
  const isCollision = (pos1, size1, pos2, size2) => {

    // console.log('pos1.x < pos2.x + size2.width: ', pos1.x < pos2.x + size2.width);
    // console.log('pos1.x + size1.width > pos2.x: ', pos1.x + size1.width > pos2.x);
    // console.log('pos1.y < pos2.y + size2.height: ', pos1.y < pos2.y + size2.height);
    // console.log('pos1.y + size1.height > pos2.y: ', pos1.y + size1.height > pos2.y);
    return (
      pos1.x < pos2.x + size2.width &&
      pos1.x + size1.width > pos2.x &&
      pos1.y < pos2.y + size2.height &&
      pos1.y + size1.height > pos2.y
    );
  };

  if (superWin) {
    console.log("superman win the game");
  }
  if (batWin) {
    console.log("batman win the game");
  }
  // Check collision after every movement
  useEffect(() => {
    const sizeSuperman = { width: 200, height: 300 };
    // console.log('sizeSuperman: ', sizeSuperman, "sizeBatman:", sizeBatman);
    const sizeBatman = { width: 200, height: 300 };
    // console.log(positionSuperman, sizeSuperman, positionBatman, sizeBatman);
    if (imageSuperman === "/src/assets/superman/superman-righthand-punch.webp") {

      // const newPositionBatman = { ...positionBatman, x: positionBatman.x + 10 };
      // setPositionBatman(newPositionBatman);

      // console.log(isCollision(positionSuperman, sizeSuperman, positionBatman, sizeBatman), " ==>>> collied");
      if (isCollision(positionSuperman, sizeSuperman, positionBatman, sizeBatman)) {
        setEnmyProgressValue(prev => prev === 0 ? setSuperWin(true) : prev - 10);
        setCollision(true);
      } else {
        setCollision(false);
      }
    }
    else if (imageBatman === "/src/assets/superman/batman-fighting.gif") {
      if (isCollision(positionSuperman, sizeSuperman, positionBatman, sizeBatman)) {
        // const newPositionSuperman = { ...positionSuperman, x: positionSuperman.x - 10 };
        // setPositionSuperman(newPositionSuperman);



        setSuperProgressValue(prev => prev === 0 ? setBatWin(true) : prev - 10);
        setCollision(true);
      } else {
        setCollision(false);
      }
    }
  }, [positionSuperman, positionBatman, imageBatman, imageSuperman, setSuperProgressValue, setEnmyProgressValue]);

  // Handle Superman's movement and actions
  useEffect(() => {
    const handleSupermanKeyDown = (ev) => {
      const dir = ev.key.replace('Arrow', '');


      if (ev.key === " ") {
        setImageSuperman(supermanPunch);
      }

      if (!["Left", "Right", "Up", "Down", "z"].includes(dir)) return;

      setPositionSuperman((prevPosition) => {
        switch (dir) {
          case "Left":
            setIsFlippedSuperman(true);
            setImageSuperman(supermanRun);
            return { ...prevPosition, x: prevPosition.x - 10 };
          case "Right":
            setIsFlippedSuperman(false);
            setImageSuperman(supermanRun);
            return { ...prevPosition, x: prevPosition.x + 10 };
          case "Up":
            setImageSuperman(supermanRun);
            return { ...prevPosition, y: prevPosition.y - 10 };
          case "Down":
            setImageSuperman(supermanRun);
            return { ...prevPosition, y: prevPosition.y + 10 };
          default:
            return prevPosition;
        }
      });
    };

    const handleSupermanKeyUp = () => {
      setImageSuperman(superman);
    };

    document.addEventListener("keydown", handleSupermanKeyDown);
    document.addEventListener("keyup", handleSupermanKeyUp);

    return () => {
      document.removeEventListener("keydown", handleSupermanKeyDown);
      document.removeEventListener("keyup", handleSupermanKeyUp);
    };
  }, []);
  useEffect(() => {
    const handleSupermanKeyPress = (ev) => {
      const dir = ev.key;
      if (dir === "z") {

        setPositionSuperman((prevPosition) => ({
          ...prevPosition,
          y: prevPosition.y - 80,
        }));
        setImageSuperman(supermanJump);

        setTimeout(() => {
          setPositionSuperman((prevPosition) => ({
            ...prevPosition,
            y: prevPosition.y + 80,
          }));
        }, 200);
      }
      if (dir === "q") {

        setPositionBatman((prevPosition) => ({
          ...prevPosition,
          y: prevPosition.y - 80,
        }));
        setImageBatman(batmanJump);

        setTimeout(() => {
          setPositionBatman((prevPosition) => ({
            ...prevPosition,
            y: prevPosition.y + 80,
          }));
        }, 200);
      }
    };

    document.addEventListener("keydown", handleSupermanKeyPress);

    // Clean up the event listener on component unmount
    return () => {
      setImageSuperman(superman); // Change back to the original image
      setImageBatman(batman); // Change back to the original image
      document.removeEventListener("keydown", handleSupermanKeyPress);
    };
  }, []);




  // Handle Batman's movement and actions
  useEffect(() => {
    const handleBatmanKeyDown = (ev) => {
      const dir = ev.key;

      if (ev.key === "Control") {
        setImageBatman(batmanFighting);
      }

      if (!["a", "d", "w", "s",].includes(dir)) return;

      setPositionBatman((prevPosition) => {
        switch (dir) {
          case "a":
            setIsFlippedBatman(true);
            setImageBatman(batmanRunning);
            return { ...prevPosition, x: prevPosition.x - 10 };
          case "d":
            setIsFlippedBatman(false);
            setImageBatman(batmanRunning);
            return { ...prevPosition, x: prevPosition.x + 10 };
          case "w":
            setImageBatman(batmanRunning);
            return { ...prevPosition, y: prevPosition.y - 10 };
          case "s":
            setImageBatman(batmanRunning);
            return { ...prevPosition, y: prevPosition.y + 10 };

          default:
            return prevPosition;
        }
      });
    };

    const handleBatmanKeyUp = () => {
      setImageBatman(batman);
    };

    document.addEventListener("keydown", handleBatmanKeyDown);
    document.addEventListener("keyup", handleBatmanKeyUp);

    return () => {
      document.removeEventListener("keydown", handleBatmanKeyDown);
      document.removeEventListener("keyup", handleBatmanKeyUp);
    };
  }, []);

  return (
    <div>
      {collision && <div className="collision-notice">Collision detected!</div>}
      <div>
        <img
          className="superman"
          src={imageSuperman}
          alt="Superman"
          style={{
            width: "200px", height: "300px",
            transform: `translate(${positionSuperman.x}px, ${positionSuperman.y}px) scaleX(${isFlippedSuperman ? -1 : 1}) `,
          }}
        />
        <img
          className="batman"
          src={imageBatman}
          alt="Batman"
          style={{
            width: "200px", height: "300px",
            transform: `translate(${positionBatman.x}px, ${positionBatman.y}px) scaleX(${isFlippedBatman ? 1 : -1})`,
          }}
        />
      </div>
      {batWin && < Winner winnder="BATMAN" /> || superWin && <Winner winnder="SUPERMAN" />}
    </div>

  );
}
