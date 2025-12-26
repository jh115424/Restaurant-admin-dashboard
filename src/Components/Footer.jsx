import "./footer.css";
import React from "react";
import exclamation from "/exclamation.png";

export default function Footer() {
  return (
    <>
      <div className="employeeFooter">
        <h2>
          NEED HELP? Manager on Duty: (414)123-4567 | HR: <br />{" "}
          hr@PartaniasRestuarant.com
        </h2>

        <div className="confidentialStatement">
          <div className="dangerSign">
            <img src={exclamation} alt="point" className="exclamationSign" />

            <p className="rules">
              CONFIDENTIAL: This system is for authorized employees only. Do not{" "}
              <br />
              share login credentials. All access is monitored for security
              purposes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
