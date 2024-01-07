import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import ComputerNetworkServicesPage from "../pages/services/ComputerNetworkServicesPage";
import ServicesPage2 from "../pages/services/ServicesPage2";
import ServicesDetailPage from "../pages/services/ServicesDetailPage";
import HeaderLayout from "../layout/HeaderLayout";
import FooterLayout from "../layout/FooterLayout";
import NetworkDesign from "../pages/services/sections/ComputerNetworkServices/NetworkDesign";
import NetworkInstallation from "../pages/services/sections/ComputerNetworkServices/NetworkInstallation";
import NetworkSecurity from "../pages/services/sections/ComputerNetworkServices/NetworkSecurity";
import NetworkMaintenance from "../pages/services/sections/ComputerNetworkServices/NetworkMaintenance";
import NetworkExpansion from "../pages/services/sections/ComputerNetworkServices/NetworkExpansion";
import PabxPage from "../pages/services/PabxPage";
import PabxSupply from "../pages/services/sections/Pabx/PabxSupply";
import PabxInstallation from "../pages/services/sections/Pabx/PabxInstallation";
import PabxProgramming from "../pages/services/sections/Pabx/PabxProgramming";
import PabxMaintenance from "../pages/services/sections/Pabx/PabxMaintenance";
import SmartPage from "../pages/services/SmartPage";
import SmartLighting from "../pages/services/sections/Smart/SmartLighting";
import SmartSecurity from "../pages/services/sections/Smart/SmartSecurity";
import SmartTemperature from "../pages/services/sections/Smart/SmartTemperature";
import SmartAppliance from "../pages/services/sections/Smart/SmartAppliance";
import SmartAssistant from "../pages/services/sections/Smart/SmartAssistant";
import MarketingPage from "../pages/services/MarketingPage";
import MarketingAdvertising from "../pages/services/sections/Marketing/MarketingAdvertising";
import MarketingSeo from "../pages/services/sections/Marketing/MarketingSeo";
import MarketingSem from "../pages/services/sections/Marketing/MarketingSem";
import MarketingManagement from "../pages/services/sections/Marketing/MarketingManagement";
import MarketingAnalytics from "../pages/services/sections/Marketing/MarketingAnalytics";
import ProgrammingPage from "../pages/services/ProgrammingPage";
import ProgrammingCloud from "../pages/services/sections/Programming/ProgrammingCloud";
import ProgrammingBusiness from "../pages/services/sections/Programming/ProgrammingBusiness";
import AccProgrammingPage from "../pages/services/AccProgrammingPage";
import HealthProgrammingPage from "../pages/services/HealthProgrammingPage";
import HealthProgrammingHis from "../pages/services/sections/HealthProgramming/HealthProgrammingHis";
import CamerasPage from "../pages/services/CamerasPage";
import ComputerPage from "../pages/services/ComputerPage";

const ServicesLayout = () => {
  function titleCase(str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  }
  function MyPage() {
    var pageRef = useRef(ComputerNetworkServicesPage);
    var location = useLocation();
    var loc = titleCase(location.pathname.replace("/", "")).trim();
    switch (loc) {
      // Computer Network Services
      case "Services":
      case "Computer-network-services":
        pageRef.displayPage = <ComputerNetworkServicesPage />;
        break;
      case "Computer-network-services/network-design":
        pageRef.displayPage = <NetworkDesign />;
        break;
      case "Computer-network-services/network-installation-and-configuration":
        pageRef.displayPage = <NetworkInstallation />;
        break;
      case "Computer-network-services/security-and-protection":
        pageRef.displayPage = <NetworkSecurity />;
        break;
      case "Computer-network-services/maintenance-and-support":
        pageRef.displayPage = <NetworkMaintenance />;
        break;
      case "Computer-network-services/network-expansion":
        pageRef.displayPage = <NetworkExpansion />;
        break;
      // Pabx
      case "Pabx":
        pageRef.displayPage = <PabxPage />;
        break;
      case "Pabx/supply-of-pabx":
        pageRef.displayPage = <PabxSupply />;
        break;
      case "Pabx/pabx-installation":
        pageRef.displayPage = <PabxInstallation />;
        break;
      case "Pabx/pabx-programming":
        pageRef.displayPage = <PabxProgramming />;
        break;
      case "Pabx/pabx-maintenance":
        pageRef.displayPage = <PabxMaintenance />;
        break;
      // Smart Home
      case "Smart-home":
        pageRef.displayPage = <SmartPage />;
        break;
      case "Smart-home/lighting-control":
        pageRef.displayPage = <SmartLighting />;
        break;
      case "Smart-home/security-and-monitoring":
        pageRef.displayPage = <SmartSecurity />;
        break;
      case "Smart-home/temperature-control":
        pageRef.displayPage = <SmartTemperature />;
        break;
      case "Smart-home/home-appliance-control":
        pageRef.displayPage = <SmartAppliance />;
        break;
      case "Smart-home/compatibility-with-personal-assistants":
        pageRef.displayPage = <SmartAssistant />;
        break;
      // Marketing
      case "E-marketing":
        pageRef.displayPage = <MarketingPage />;
        break;
      case "E-marketing/social-media-advertising":
        pageRef.displayPage = <MarketingAdvertising />;
        break;
      case "E-marketing/seo":
        pageRef.displayPage = <MarketingSeo />;
        break;
      case "E-marketing/sem":
        pageRef.displayPage = <MarketingSem />;
        break;
      case "E-marketing/content-management":
        pageRef.displayPage = <MarketingManagement />;
        break;
      case "E-marketing/analytics-and-reports":
        pageRef.displayPage = <MarketingAnalytics />;
        break;
      // Programming
      case "Programming":
        pageRef.displayPage = <ProgrammingPage />;
        break;
      case "Programming/cloud-solutions-development-and-web-services":
        pageRef.displayPage = <ProgrammingCloud />;
        break;
      case "Programming/development-of-business-administration-programs":
        pageRef.displayPage = <ProgrammingBusiness />;
        break;
      // AccProgramming
      case "Accounting-programming":
        pageRef.displayPage = <AccProgrammingPage />;
        break;
      // HealthProgramming
      case "Health-programming":
        pageRef.displayPage = <HealthProgrammingPage />;
        break;
      case "Health-programming/his-hospital-program":
        pageRef.displayPage = <HealthProgrammingHis />;
        break;
      // Cameras
      case "Surveillance-cameras":
        pageRef.displayPage = <CamerasPage />;
        break;
      // Computer
      case "Computer-maintenance":
        pageRef.displayPage = <ComputerPage />;
        break;
      case "Services2":
        pageRef.displayPage = <ServicesPage2 />;
        break;
      case "Services-detail":
        pageRef.displayPage = <ServicesDetailPage />;
        break;
      default:
        pageRef.displayPage = <ComputerNetworkServicesPage />;
    }
    return pageRef.displayPage;
  }
  return (
    <>
      <HeaderLayout />
      <div className="page-content">
        <MyPage />
      </div>
      <FooterLayout />
    </>
  );
};
export default ServicesLayout;
