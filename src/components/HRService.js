import React from "react";
import HRServiceItems from "./HRServiceItems";
import ServiceData from "./ServiceData";

function HRService() {
  return (
    <section className="prototype_service_info">
      <div className="symbols-pulse active">
        <div className="pulse-1"></div>
        <div className="pulse-2"></div>
        <div className="pulse-3"></div>
        <div className="pulse-4"></div>
        <div className="pulse-x"></div>
      </div>
      <div className="container">
        <h2 className="f_size_30 f_600 t_color3 l_height45 text-center mb_90">
          With utmost compassion we provide the following services to our
          clients:.
        </h2>
        <div className="row p_service_info">
          {ServiceData.HRService.map((item) => {
            return (
              <HRServiceItems
                HRtitle={item.HRtitles}
                HRdescription={item.HRdescription}
                Hicon={item.Hicon}
                rclass={item.rclass}
                iclass={item.iclass}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HRService;
