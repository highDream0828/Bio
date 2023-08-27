const tempData = {
  login: "scarlett1130",
  id: 55713505,
  node_id: "MDQ6VXNlcjU1NzEzNTA1",
  avatar_url: "https://avatars.githubusercontent.com/u/55713505?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/scarlett1130",
  html_url: "https://github.com/scarlett1130",
  followers_url: "https://api.github.com/users/scarlett1130/followers",
  following_url: "https://api.github.com/users/scarlett1130/following{/other_user}",
  gists_url: "https://api.github.com/users/scarlett1130/gists{/gist_id}",
  starred_url: "https://api.github.com/users/scarlett1130/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/scarlett1130/subscriptions",
  organizations_url: "https://api.github.com/users/scarlett1130/orgs",
  repos_url: "https://api.github.com/users/scarlett1130/repos",
  events_url: "https://api.github.com/users/scarlett1130/events{/privacy}",
  received_events_url: "https://api.github.com/users/scarlett1130/received_events",
  type: "User",
  site_admin: false,
  name: "Gary Shores",
  company: null,
  blog: "Bio",
  location: "India",
  email: null,
  hireable: true,
  bio: "React Developer",
  twitter_username: "scarlett1130_",
  public_repos: 31,
  public_gists: 10,
  followers: 8,
  following: 1,
  created_at: "2019-09-23T18:37:14Z",
  updated_at: "2022-07-02T03:07:58Z",
};

type GithubRepo = {
  stargazers_count: number;
  fork: boolean;
  forks_count: number;
};

// its for /api/stats/github
export async function fetchGithub() {
  const fake = false;
  if (fake) return tempData;
  return fetch("https://api.github.com/users/scarlett1130").then((res) => res.json());
}

// its for getting temporary old data
export function getOldStats() {
  return tempData;
}

export async function getGithubStarsAndForks() {
  const res = await fetch(
    "https://api.github.com/users/scarlett1130/repos?per_page=100"
  );
  const userRepos = await res.json();

  /* Default Static Data: If use exceeded the rate limit of api */
  if (
    (userRepos.documentation_url =
      "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting")
  ) {
    return {
      githubStars: 74,
      forks: 33,
    };
  }
  // filter those repos that are forked
  const mineRepos: GithubRepo[] = userRepos?.filter(
    (repo: GithubRepo) => !repo.fork
  );
  const githubStars = mineRepos.reduce(
    (accumulator: number, repository: GithubRepo) => {
      return accumulator + repository["stargazers_count"];
    },
    0
  );
  const forks = mineRepos.reduce(
    (accumulator: number, repository: GithubRepo) => {
      return accumulator + repository["forks_count"];
    },
    0
  );

  return { githubStars, forks };
}
