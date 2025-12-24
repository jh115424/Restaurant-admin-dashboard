import React from "react";
import "./pointsToNextLevel.css";

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
          <p>Erik Roberts</p>
          <div className="pointAmount">
            <p>1,200 points</p>
          </div>
        </div>
        <div className="silverCard">
          <p>Erik Roberts</p>
          <div className="pointAmount">
            <p>1,200 points</p>
          </div>
        </div>
        <div className="goldCard">
          <p>Erik Roberts</p>
          <div className="pointAmount">
            <p>1,200 points</p>
          </div>
        </div>
        <div className="platinumCard">
          <p>Erik Roberts</p>
          <div className="pointAmount">
            <p>1,200 points</p>
          </div>
        </div>
      </div>
    </>
  );
}
