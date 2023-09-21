import { SocialPlatform } from "@lib/types";
import { BsGithub } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const socialMedia: SocialPlatform[] = [
  {
    title: "Github",
    Icon: BsGithub,
    url: "https://github.com/apollo812",
  },
  {
    title: "Mail",
    Icon: HiMail,
    url: "mailto:d.kien720@outlook.com",
  },
  // {
  //   title: "LinkedIn",
  //   Icon: BsLinkedin,
  //   url: "https://www.linkedin.com/in/gary-shores-b42b56288",
  // },
];

export default socialMedia;
