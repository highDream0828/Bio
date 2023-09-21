type PageData = {
  title: string;
  description: string;
  image: string;
  keywords: string;
};

type PageMeta = {
  [key: string]: PageData;
};

const pageMeta: PageMeta = {
  home: {
    title: "",
    description:
      "Hi, I am Doan Kien and I am a full-stack developer with a focus on the backend. I have a strong background in the MERN stack (MongoDB, Express, React, Node.js) and have experience building scalable and maintainable web applications. At the moment, I am pursuing my Master's degree in Computer Science.",
    image: "/avatar/show.png",
    keywords: "portfolio alex, portfolio scarlett1130, alex blogs",
  },

  stats: {
    title: "Statistics",
    description:
      "These are my personal statistics about me.",
    image: "/avatar/show.png",
    keywords: "stats, Statistics",
  },
  utilities: {
    title: "Utilities",
    description:
      "In case you are wondering What tech I use, Here's the list of what tech I'm currently using for coding on the daily basis. This list is always changing.",
    image: "/avatar/show.png",
    keywords: "Utilities, what i use?, utils, setup, uses,",
  },
  blogs: {
    title: "Blogs",
    description:
      "I've been writing online since 2021, mostly about web development and tech careers. In total, I've written more than 50 articles till now.",
    image: "/avatar/show.png",
    keywords: "scarlett1130 blog, blog, webdev, react",
  },

  bookmark: {
    title: "Bookmarked Blogs",
    description: "Bookmarked Blogs of Doan Kien's blogs by you",
    image: "/avatar/show.png",
    keywords: "bookmark, blogs, ",
  },
  certificates: {
    title: "Certificates",
    description:
      "I've participated in many contests, courses and test and get certified in many skills. You can find the certificates below.",
    image: "/avatar/show.png",
    keywords: "Certificates, verified",
  },
  projects: {
    title: "Projects",
    description:
      "I've been making various types of projects some of them were basics and some of them were complicated.",
    image: "/avatar/show.png",
    keywords: "projects, work, side project,",
  },
  about: {
    title: "About",
    description:
      "Hi, I am Doan Kien and I am a full-stack developer with a focus on the backend. I have a strong background in the MERN stack (MongoDB, Express, React, Node.js) and have experience building scalable and maintainable web applications. At the moment, I am pursuing my Master's degree in Computer Science.",
    image: "/avatar/show.png",
    keywords: "about, about me, ",
  },
};

export default pageMeta;
