import React, { useRef } from "react";
import "./OverlayMenu.css";
import { OverlayData } from "../../JSON/OverlayMenu.json";

function OverlayMenu() {
  const openSubHeading = (e) => {
    let subHeadingContainer = e.target.nextElementSibling;

    // Add transition properties to the element
    subHeadingContainer.style.transition =
      "opacity 0.255s ease-in-out, max-height 0.255s ease-in-out";

    if (subHeadingContainer.style.opacity === "1") {
      subHeadingContainer.style.opacity = "0";
      subHeadingContainer.style.maxHeight = "0";
    } else {
      subHeadingContainer.style.opacity = "1";
      subHeadingContainer.style.maxHeight = "500px"; // Set a reasonable max-height value
    }
  };

  return (
    <div className="overlayMenu_container">
      {OverlayData.map((data) => (
        <div key={data.id} className="overlayMenuData_container">
          <div
            className="overlayMenuHeading_title"
            onClick={(e) => openSubHeading(e)}
          >
            {data.MainHeading}
          </div>
          <div className="overlayMenuSubHeading">
            {data.SubHeadings.map((subHeading, index) => (
              <div key={index} className="overlayMenuSubHeading_title">
                {subHeading}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default OverlayMenu;
