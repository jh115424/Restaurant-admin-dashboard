
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
  const [memberActivityPoints, setMemberActivityPoints] = React.useState("");
  const [submittedPoints, setSubmittedPoints] = React.useState(false);

  /* VISIT */
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

  /* ADJUST */
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

  /* SHARED TIER LOGIC */
  const applyTierLogic = (newPointTotal) => {
    if (newPointTotal <= bronze) {
      setMembershipStatus("bronze");
      setNextTierPoints(silver - newPointTotal);
      setMemberActivityPoints("bronze");
    } else if (newPointTotal <= silver) {
      setMembershipStatus("silver");
      setNextTierPoints(gold - newPointTotal);
      setMemberActivityPoints("silver");
    } else if (newPointTotal <= gold) {
      setMembershipStatus("gold");
      setNextTierPoints(platinum - newPointTotal);
      setMemberActivityPoints("gold");
    } else {
      setMembershipStatus("platinum");
      setNextTierPoints(0);
      setMemberActivityPoints("platinum");
    }

    setSubmittedPoints(true);
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
        {guestData.map((guest) => (
          <div className="cardBlock" key={guest.id}>
            <div className={`${guest.tier}Card`}>
              <p className="name">{guest.name}</p>

              <div className="pointAmount">
                <p className="points">{guest.points}</p>
              </div>

              <div className={`${guest.tier}PointShield`}>
                <img
                  src={
                    guest.tier === "bronze"
                      ? bronzeShield
                      : guest.tier === "silver"
                      ? silverShield
                      : guest.tier === "gold"
                      ? goldShield
                      : platinumShield
                  }
                  alt={`${guest.tier}-shield`}
                  className={`${guest.tier}CardLogo`}
                />
              </div>
            </div>

            <div className="cardActions">
              <button
                type="button"
                onClick={() => employeeHandleClick(guest.id)}
              >
                Visit
              </button>

              <button
                type="button"
                onClick={() => adjustHandleClick(guest.id)}
              >
                Adjust
              </button>

              <button>Correction</button>
            </div>
          </div>
        ))}
      </div>

      <div className="underline"></div>
    </>
  );
}
