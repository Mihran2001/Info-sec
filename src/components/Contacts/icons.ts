import { ReactComponent as CallIcon } from "../../assets/icons/Call.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as InstaIcon } from "../../assets/icons/insta.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/Location.svg";
import { ReactComponent as MessageIcon } from "../../assets/icons/Message.svg";

export const contactsData = [
  { icon: CallIcon, content: "+374 60 66 66 66", hrefType: "tel:" },
  { icon: MessageIcon, content: "info@infosec.am", hrefType: "mailto:" },
  {
    icon: LocationIcon,
    content: "28 Isahakyan Street, Yerevan, Armenia",
    hrefTO:
      "https://www.google.com/maps/place/28+Isahakyan+poxoc,+Yerevan+0009,+%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F/@40.188516,44.5181721,17z/data=!3m1!4b1!4m5!3m4!1s0x406abce06d1a46b9:0x9e971779832b9e06!8m2!3d40.1885119!4d44.5203608",
  },
  {
    icon: FacebookIcon,
    content: "InfoSecLLC",
    hrefTO: "https://www.facebook.com/InfoSecLLC",
  },
  {
    icon: InstaIcon,
    content: "infosec_llc",
    hrefTO: "https://www.instagram.com/infosec_llc/",
  },
];
