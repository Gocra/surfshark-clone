import shieldSVG from "../../assets/shieldSVG.svg";
import antivirusSVG from "../../assets/antivirusSVG.svg";
import searchSVG from "../../assets/searchSVG.svg";
import alertSVG from "../../assets/alertSVG.svg";
import incogniSVG from "../../assets/incogni.svg";

export const productsDropdownData = [
  {
    title: "SURFSHARK PRODUCTS",
    data: [
      {
        head: {
          icon: shieldSVG,
          title: "Surfshark VPN",
          info: "Privacy from online tracking & data collecting with a secure connection.",
        },
        links: ["What is a VPN?", "VPN features", "VPN servers"],
      },
      {
        head: {
          icon: antivirusSVG,
          title: "Surfshark Antivirus",
          info: "Lightweight yet powerful security to protect your devices from harm.",
        },
      },
      {
        head: {
          icon: searchSVG,
          title: "Surfshark Search",
          info: "Ad-free and completely private web searches to avoid tracking.",
        },
      },
      {
        head: {
          icon: alertSVG,
          title: "Surfshark Alert",
          info: "Detection of data breaches that involve your personal information.",
        },
      },
    ],
  },
  {
    title: "OTHER PRODUCTS",
    data: [
      {
        head: {
          icon: incogniSVG,
          title: "Incogni",
          info: "Personal information removal from data brokers and big data companies.",
        },
      },
    ],
  },
];
