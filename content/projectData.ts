import { ProjectType } from "@lib/types";

const projects: ProjectType[] = [
  {
    id: 1,
    name: "Monsido | Chatbot development",
    coverURL: "/project/monsido chatbot.png",
    description:
      "Dialogflow CX + Python Webhook + Google Place API + MongoDB",
    previewURL: "https://monsido.com/",
    tools: ["Python", "Back-End Development", "Machine Learning", "Dialogflow", "Chatbot Development", "Artificial Intelligence"],
    pinned: true,
  },
  {
    id: 1,
    name: "Vector Inc",
    coverURL: "/project/vector.png",
    description:
      "Vector Inc website using mean stack",
    previewURL: "vectorky.com/",
    tools: ["mean", "angular", "typescript", "serverless"],
    pinned: true,
  },
  {
    id: 1,
    name: "Real World Backend API",
    coverURL: "/project/realworld.png",
    description:
      "Exemplary real world backend API built with NestJS + TypeORM / Prisma",
    previewURL: "",
    tools: ["backend", "nestJS", "prisma"],
    pinned: true,
  },
  {
    id: 1,
    name: "Service Devel",
    coverURL: "/project/service_devel.png",
    description:
      "for time book and react full calendar customize - laravel-react-tailwind-sql",
    previewURL: "",
    tools: ["react", "laravel", "tailwind css", "books", "full-calendar", "customize"],
    pinned: true,
  },
  {
    id: 1,
    name: "ComplianceGrabber-2.0",
    coverURL: "/project/supplier.png",
    description:
      "Supplier 2.0 for web scrapping site - next-typescript-tailwindcss-front",
    previewURL: "suppliers.vercel.app/",
    tools: ["next", "typescript", "tailwind css", "python", "fast api"],
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
    name: "Medical Pager Chat",
    coverURL: "/project/medical_getstream.png",
    description:
      "Medical Pager Chat App powered by GetStream",
    previewURL: "",
    tools: ["react", "node", "getstream-io", "activity-feed", "chat-app"],
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
