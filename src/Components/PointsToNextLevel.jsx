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

export default function PointsToNextLevel() {
  const [guestData, setGuestData] = React.useState([
    { id: 1, name: "Erik Johnson", points: 0, tier: "bronze" },
    { id: 2, name: "Jennifer Hodge", points: 0, tier: "silver" },
    { id: 3, name: "Rebecca Chamberlain", points: 0, tier: "gold" },
    { id: 4, name: "Sarah Johnson", points: 0, tier: "platinum" },
  ]);

  const [membershipStatus, setMembershipStatus] = React.useState("");
  const [nextTierPoints, setNextTierPoints] = React.useState(0);

  const employeeHandleClick = (id) => {
    setGuestData((prev) =>
      prev.map((guest) => {
        if (guest.id !== id) return guest;
        const newPointTotal = guest.points + 10;
        applyTierLogic(newPointTotal);
        return { ...guest, points: newPointTotal };
      })
    );
  };

  const adjustHandleClick = (id) => {
    setGuestData((prev) =>
      prev.map((guest) => {
        if (guest.id !== id) return guest;
        const newPointTotal = Math.max(0, guest.points - 100);
        applyTierLogic(newPointTotal);
        return { ...guest, points: newPointTotal };
      })
    );
  };

  const correctionHandleClick = (id) => {
    setGuestData((prev) =>
      prev.map((guest) => {
        if (guest.id !== id) return guest;
        const newPointTotal = Math.max(0, guest.points + 50);
        applyTierLogic(newPointTotal);
        return { ...guest, points: newPointTotal };
      })
    );
  };

  const applyTierLogic = (newPointTotal) => {
    if (newPointTotal <= bronze) {
      setMembershipStatus("bronze");
      setNextTierPoints(silver - newPointTotal);
    } else if (newPointTotal <= silver) {
      setMembershipStatus("silver");
      setNextTierPoints(gold - newPointTotal);
    } else if (newPointTotal <= gold) {
      setMembershipStatus("gold");
      setNextTierPoints(platinum - newPointTotal);
    } else {
      setMembershipStatus("platinum");
      setNextTierPoints(0);
    }
  };

  return (
    <>
      <div className="rewardLevel">
        <p className="pointsPlaceholder">
          Points to next level: <strong>{nextTierPoints}</strong>
        </p>
        <div className="pointsLeftPlaceholder">
          <p>{membershipStatus}</p>
        </div>
      </div>

      <div className="guestPointCards">
        {/* CARD 1 - Erik Johnson */}
        <div className="cardBlock">
          <div className="bronzeCard">
            <p className="name">{guestData[0].name}</p>
            <div className="pointAmount">
              <p className="points">{guestData[0].points}</p>
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
            <button type="button" onClick={() => employeeHandleClick(1)}>
              Visit
            </button>
            <button type="button" onClick={() => adjustHandleClick(1)}>
              Adjust
            </button>
            <button type="button" onClick={() => correctionHandleClick(1)}>
              Correction
            </button>
          </div>
        </div>

        {/* CARD 2 - Jennifer Hodge */}
        <div className="cardBlock">
          <div className="silverCard">
            <p className="name">{guestData[1].name}</p>
            <div className="pointAmount">
              <p className="points">{guestData[1].points}</p>
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
            <button type="button" onClick={() => employeeHandleClick(2)}>
              Visit
            </button>
            <button type="button" onClick={() => adjustHandleClick(2)}>
              Adjust
            </button>
            <button type="button" onClick={() => correctionHandleClick(2)}>
              Correction
            </button>
          </div>
        </div>

        {/* CARD 3 - Rebecca Chamberlain */}
        <div className="cardBlock">
          <div className="goldCard">
            <p className="name">{guestData[2].name}</p>
            <div className="pointAmount">
              <p className="points">{guestData[2].points}</p>
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
            <button type="button" onClick={() => employeeHandleClick(3)}>
              Visit
            </button>
            <button type="button" onClick={() => adjustHandleClick(3)}>
              Adjust
            </button>
            <button type="button" onClick={() => correctionHandleClick(3)}>
              Correction
            </button>
          </div>
        </div>

        {/* CARD 4 - Sarah Johnson */}
        <div className="cardBlock">
          <div className="platinumCard">
            <p className="name">{guestData[3].name}</p>
            <div className="pointAmount">
              <p className="points">{guestData[3].points}</p>
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
            <button type="button" onClick={() => employeeHandleClick(4)}>
              Visit
            </button>
            <button type="button" onClick={() => adjustHandleClick(4)}>
              Adjust
            </button>
            <button type="button" onClick={() => correctionHandleClick(4)}>
              Correction
            </button>
          </div>
        </div>
      </div>

      <div className="underline"></div>
    </>
  );
}
