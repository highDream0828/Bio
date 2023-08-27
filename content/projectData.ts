import { ProjectType } from "@lib/types";

const projects: ProjectType[] = [
  {
    id: 1,
    name: "Shoppypark for Kids and Women",
    coverURL: "/project/Shoppypark.png",
    description:
      " ",
    previewURL: "https://monsido.com/",
    tools: [".net", "Back-End Development", "React", ".net web API"],
    pinned: true,
  },
  {
    id: 1,
    name: "Home in located in Port Townsend, WA. Claridge Court",
    coverURL: "/project/Claridge.png",
    description:
      " ",
    previewURL: "https://liveatclaridge.com/",
    tools: [".Net", "Google Map", "typescript", "serverless"],
    pinned: true,
  },
  {
    id: 1,
    name: "NFT marketplace for all",
    coverURL: "/project/lift.png",
    description:
      " ",
    previewURL: "https://lifty.io/",
    tools: ["backend", "NuxtJS", "Vue.js", "Tailwind CSS", "Node.js"],
    pinned: true,
  },
  {
    id: 1,
    name: "Shop online top quality legal CBD cannabis",
    coverURL: "/project/cannabis.png",
    description:
      "Shop online top quality legal CBD cannabis",
    previewURL: "https://matruecannabis.com/en/",
    tools: ["react", "laravel", "tailwind css", "books", "full-calendar", "customize"],
    pinned: true,
  },
  {
    id: 1,
    name: "Cypress",
    coverURL: "/project/cypress.png",
    description:
      " ",
    previewURL: "https://cypressriverapts.com/",
    tools: ["jQuery", "typescript", "tailwind css", ".Net", "fast api", "jQuery UI", "Google Analytics"],
    pinned: true,
  },
  {
    id: 1,
    name: "Crossmint DALL-E-2",
    coverURL: "/project/dalle2.png",
    description:
      "Experiment to build a UI that connects crossmint minting api capabilities with Dall-E 2 Data",
    previewURL: "",
    tools: ["next", "dalle2", "open ai"],
    pinned: true,
  },
  {
    id: 1,
    name: "OpenAI GPT-3 bot chat app",
    coverURL: "/project/chatgtp.png",
    description:
      "OpenAI GPT-3 bot chat application.",
    previewURL: "",
    tools: ["react", "node", "python", "tailwind CSS", "chatgtp-api", "bot"],
    pinned: true,
  },
  {
    id: 1,
    name: "Atlant",
    coverURL: "/project/Atlant.png",
    description:
      " ",
    previewURL: "https://www.atlantavolkswagen.com/",
    tools: ["react", "Nginx", "Java", "core-js", "cloudflare"],
    pinned: true,
  },
  {
    id: 1,
    name: "Stable Diffusion API",
    coverURL: "/project/stable_diffusion_api.png",
    description:
      "To generate the image by natural language - Stable Diffusion API",
    previewURL: "",
    tools: ["react", "python", "docker", "stable diffusion", "open ai"],
    pinned: true,
  },
  {
    id: 1,
    name: "Concrete Dynamix",
    coverURL: "/project/concrete.png",
    description:
      "Developed a website for a concrete services start up that is based in New Jersey",
    previewURL: "http://www.concretedynamix.com/",
    tools: ["react", "node", "docker"],
    pinned: true,
  },

];

export default projects.reverse();
