import React from "react";
import "./pointsToNextLevel.css";
import bronzeShield from "/public/bronzeShield.png";
import silverShield from "/public/silverShield.png";
import goldShield from "/public/goldShield.png";
import platinumShield from "/public/platinumShield.png";

const bronze = 990;
const silver = 1990;
const gold = 2990;
const platinum = 3000;

//   const [currentPoints, setCurrentPoints] = React.useState(0);
//   const [membershipStatus, setMembershipStatus] = React.useState("");
//   const [nextTierPoints, setNextTierPoints] = React.useState(0);
//   const [memberActivityPoints, setMemberActivityPoints] = React.useState("");
//   const [submittedPoints, setSubmittedPoints] = React.useState(false);

export default function PointsToNextLevel() {
  const employeeHandleClick = () => {
    const newPointTotal = currentPoints + 10;

    setCurrentPoints(currentPoints + 10);
  };

  return (
    <>
      <div className="guestPointCards">
        <div className="cardBlock">
          <div className="bronzeCard">
            <p className="name">Erik Roberts</p>
            <div className="pointAmount">
              <p className="points">700 points</p>
            </div>
            <div className="bronzePointShield">
              <img
                src={bronzeShield}
                alt="bronze-shield"
                className="bronzeCardLogo"
              />
            </div>
          </div>

          <div className="cardActions">
            <button
            type="button"
            onClick={employeeHandleClick}>Visit</button>
            <button>Adjust</button>
            <button>Correction</button>
          </div>
        </div>

        <div className="cardBlock">
          <div className="silverCard">
            <p className="name">Jennifer Hodge</p>
            <div className="pointAmount">
              <p className="points">1,550 points</p>
            </div>
            <div className="silverPointShield">
              <img
                src={silverShield}
                alt="silver-shield"
                className="silverCardLogo"
              />
            </div>
          </div>

          <div className="cardActions">
            <button
            type="button"
            onClick={employeeHandleClick}>Visit</button>
            <button>Adjust</button>
            <button>Correction</button>
          </div>
        </div>

        <div className="cardBlock">
          <div className="goldCard">
            <p className="name">Rebecca Chamberlain</p>
            <div className="pointAmount">
              <p className="points">2,200 points</p>
            </div>
            <div className="goldPointShield">
              <img
                src={goldShield}
                alt="gold-shield"
                className="goldCardLogo"
              />
            </div>
          </div>

          <div className="cardActions">
            <button
            type="button"
            onClick={employeeHandleClick}>Visit</button>
            <button>Adjust</button>
            <button>Correction</button>
          </div>
        </div>

        <div className="cardBlock">
          <div className="platinumCard">
            <p className="name">Sarah Johnson</p>
            <div className="pointAmount">
              <p className="points">4,200 points</p>
            </div>
            <div className="platinumPointShield">
              <img
                src={platinumShield}
                alt="platinum-shield"
                className="platinumCardLogo"
              />
            </div>
          </div>

          <div className="cardActions">
            <button
            type="button"
            onClick={employeeHandleClick}>Visit</button>
            <button>Adjust</button>
            <button>Correction</button>
          </div>
        </div>
      </div>

      <div className="underline"></div>
    </>
  );
}
