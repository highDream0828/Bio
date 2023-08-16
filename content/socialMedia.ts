import { SocialPlatform } from "@lib/types";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook, BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";
import { FaDev } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { SiCodepen } from "react-icons/si";

const socialMedia: SocialPlatform[] = [
  {
    title: "Github",
    Icon: BsGithub,
    url: "https://github.com/scarlett1130",
  },
  {
    title: "Dev.to",
    Icon: FaDev,
    url: "https://dev.to/scarlett1130",
  },
  {
    title: "StackOverFlow",
    Icon: BsStackOverflow,
    url: "https://stackoverflow.com/users/19870754/scarlett1130",
  },
  {
    title: "Mail",
    Icon: HiMail,
    url: "mailto:businessxfree2000@gmail.com",
  },
  {
    title: "Codepen",
    Icon: SiCodepen,
    url: "https://codepen.io/scarlett1130",
  },
  {
    title: "Facebook",
    Icon: BsFacebook,
    url: "https://www.facebook.com/ja7in/",
  },
  {
    title: "Twitter",
    Icon: AiOutlineTwitter,
    url: "https://twitter.com/intent/follow?screen_name=scarlett1130_",
  },
  {
    title: "LinkedIn",
    Icon: BsLinkedin,
    url: "https://www.linkedin.com/in/scarlett1130/",
  },
  {
    title: "Instagram",
    Icon: AiOutlineInstagram,
    url: "https://www.instagram.com/scarlett1130_",
  },
];

export default socialMedia;
