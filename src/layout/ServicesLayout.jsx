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
