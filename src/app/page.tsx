import { getRepos } from "@/axios";
import ContainerApp from "@/components/ContainerApp";
import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import LatestRepos from "@/components/Home/LatestRepos";
import Skills from "@/components/Home/Skills";
import TimeLine from "@/components/Home/TimeLine";
import Image from "next/image";
import React from "react";

export default async function page() {
  const repos = await getRepos()
  const p = [
    {
      "id": 473639421,
      "node_id": "R_kgDOHDsp_Q",
      "name": "Simple-Landing-page",
      "full_name": "m7md0a/Simple-Landing-page",
      "private": false,
      "owner": {
        "login": "m7md0a",
        "id": 54208900,
        "node_id": "MDQ6VXNlcjU0MjA4OTAw",
        "avatar_url": "https://avatars.githubusercontent.com/u/54208900?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/m7md0a",
        "html_url": "https://github.com/m7md0a",
        "followers_url": "https://api.github.com/users/m7md0a/followers",
        "following_url": "https://api.github.com/users/m7md0a/following{/other_user}",
        "gists_url": "https://api.github.com/users/m7md0a/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/m7md0a/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/m7md0a/subscriptions",
        "organizations_url": "https://api.github.com/users/m7md0a/orgs",
        "repos_url": "https://api.github.com/users/m7md0a/repos",
        "events_url": "https://api.github.com/users/m7md0a/events{/privacy}",
        "received_events_url": "https://api.github.com/users/m7md0a/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/m7md0a/Simple-Landing-page",
      "description": "Project a simple responsive landing page on all devices such as laptops, computers and mobiles",
      "fork": false,
      "url": "https://api.github.com/repos/m7md0a/Simple-Landing-page",
      "forks_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/forks",
      "keys_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/teams",
      "hooks_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/hooks",
      "issue_events_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/issues/events{/number}",
      "events_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/events",
      "assignees_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/assignees{/user}",
      "branches_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/branches{/branch}",
      "tags_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/tags",
      "blobs_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/languages",
      "stargazers_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/stargazers",
      "contributors_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/contributors",
      "subscribers_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/subscribers",
      "subscription_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/subscription",
      "commits_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/contents/{+path}",
      "compare_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/merges",
      "archive_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/downloads",
      "issues_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/issues{/number}",
      "pulls_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/labels{/name}",
      "releases_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/releases{/id}",
      "deployments_url": "https://api.github.com/repos/m7md0a/Simple-Landing-page/deployments",
      "created_at": "2022-03-24T14:24:26Z",
      "updated_at": "2022-10-13T15:23:54Z",
      "pushed_at": "2022-09-20T21:05:32Z",
      "git_url": "git://github.com/m7md0a/Simple-Landing-page.git",
      "ssh_url": "git@github.com:m7md0a/Simple-Landing-page.git",
      "clone_url": "https://github.com/m7md0a/Simple-Landing-page.git",
      "svn_url": "https://github.com/m7md0a/Simple-Landing-page",
      "homepage": "https://m7md0a.github.io/Simple-Landing-page",
      "size": 105,
      "stargazers_count": 0,
      "watchers_count": 0,
      "language": "CSS",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": true,
      "has_discussions": false,
      "forks_count": 0,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "allow_forking": true,
      "is_template": false,
      "web_commit_signoff_required": false,
      "topics": [
        "css",
        "html",
        "tailwindcss"
      ],
      "visibility": "public",
      "forks": 0,
      "open_issues": 0,
      "watchers": 0,
      "default_branch": "main",
      "sortM": "20221013152354"
    }
  ]

  
  return (
    <div className="pt-24">
      <Hero />
      <div className="h-20 w-1 bg-gray-100 rounded-full mx-auto my-14"></div>
      <About />
      <Skills />
      <TimeLine />
      <LatestRepos />
    </div>
  );
}
