import React from "react";
import "./pointsToNextLevel.css";
import bronzeShield from "/public/bronzeShield.png";
import silverShield from "/public/silverShield.png";
import goldShield from "/public/goldShield.png";
import platinumShield from "/public/platinumShield.png";

export default function PointsToNextLevel() {
  return (
    <>
      <div className="rewardLevel">
        <p className="pointsPlaceholder">
          Points to next level: <strong>Placeholder</strong>
        </p>
        <div className="pointsLeftPlaceholder">
          <p>Remaining Platinum</p>
        </div>
      </div>
      <div className="pointsCardDivider"></div>

      <div className="guestPointCards">
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
        <div className="goldCard">
          <p className="name">Rebecca Chamberlain</p>
          <div className="pointAmount">
            <p className="points">2,200 points</p>
          </div>
          <div className="goldPointShield">
            <img src={goldShield} alt="gold-shield" className="goldCardLogo" />
          </div>
        </div>
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
      </div>
    </>
  );
}
