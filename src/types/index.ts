import React from "react";

export type SkillType = {
    title: string;
    url: string
}

export type LinksType = SkillType[];

export type TimeLineType = {
    title: string;
    descriptions: string[];
    date: string;
    links?: LinksType;
    icon: string
}

export type PinnedRepoType = {
  description: string;
  forks: number;
  home: string;
  languages?: (string)[] | null;
  name: string;
  stars: number;
  tags?: (string)[] | null;
  url: string;
}
  

export type ProfileType = {
  login: string
  avatar_url: string
  html_url: string
  name: string
  company: string | null
  blog: string
  location: string
  email: string | null
  hireable: string | null
  bio: string
  twitter_username: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
}

export type ProjectType = {
  meta: {
      title: string;
      description: string;
      date: string | Date;
      technologies: string[];
      image: string;
      link?: string; 
  };
  slug: string;
}
