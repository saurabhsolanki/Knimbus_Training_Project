import React from "react";

const Ecard = ({ raAuthLevel, displayName }) => {
  return (
    <div>
      <div className="card h-100 text-center">
        <div className="card-header ">{raAuthLevel} Authenticated</div>
        <img
          src="https://knimbus-dev.azureedge.net/dev/images/API_Connector/rectangle/SA1635.jpg"
          className="card-img-top h-100"
          alt="..."
        />
        <div className="card-body"></div>
        <div
          className="card-footer w-100"
          style={{
            maxWidth: "100%",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          <p>{displayName}</p>
        </div>
      </div>
    </div>
  );
};

export default Ecard;
