import { SiBuymeacoffee } from "react-icons/si";
import { BsPaypal } from "react-icons/bs";
import { SupportMe } from "@lib/types";

const supportOptions: SupportMe[] = [
  {
    name: "Buy Me a Coffee",
    url: "https://buymeacoffee.com/scarlett1130",
    Icon: SiBuymeacoffee,
  },
  {
    name: "PayPal",
    url: "https://paypal.me/scarlett1130",
    Icon: BsPaypal,
  },
];

export default supportOptions;
