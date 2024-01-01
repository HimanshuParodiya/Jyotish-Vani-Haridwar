import React from "react";
import "./OverlayMenu.css";
import { OverlayData } from "../../JSON/OverlayMenu.json";

function OverlayMenu() {
  return (
    <div className="overlayMenu_container">
      {OverlayData.map((data) => (
        <div key={data.id} className="overlayMenuData_container">
          <div className="overlayMenuHeading_title">{data.MainHeading}</div>
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
