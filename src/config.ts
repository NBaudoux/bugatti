import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCircleInfo, faEnvelope, faHome, faPhone, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { HeaderLinkProps } from "./components/HeaderLink/HeaderLink";
import * as social from "./shared/config/socialLinks";

export const MAIL = "bugatti-ettore@scarlet.be";
const MAIL_LINK = `mailto: ${MAIL}`;

export const PHONE = "+32 1111 1111";
const PHONE_LINK = "tel:+32 1111 1111";

export const LINKS: HeaderLinkProps[] = [
  { icon: faPhone, link: PHONE_LINK, text: PHONE },
  { autoHide: true, icon: faEnvelope, link: MAIL_LINK, text: MAIL },
  { autoHide: true, icon: faInstagram, link: social.INSTA_LINK, text: social.KAGERLIGHED_KBH },
  { autoHide: true, icon: faFacebook, link: social.FB_LINK, text: social.KAGERLIGHED_KBH },
];

export const TABS: {icon: IconDefinition, text: string}[] = [
  { icon: faHome, text: "Home" },
  { icon: faCircleInfo, text:"About me" }
];