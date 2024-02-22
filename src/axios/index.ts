import { ProfileType, RepoType } from "@/types";
import axios from "axios";

export async function getProfileData(): Promise<ProfileType | undefined> {
  try {
    let data;
    await axios.get(`https://api.github.com/users/m7md0a`).then((res) => {
      data = res.data;
    });
    return data;
  } catch (error) {
    return undefined
  }
}

async function getAbout() {
  let data;
  await axios
    .get(`https://raw.githubusercontent.com/m7md0a/m7md0a/main/data.json`)
    .then((res) => {
      data = res.data;
    });
  return data;
}

export async function getRepos() : Promise<RepoType[] | undefined>{
  try {
    let data;
    await axios.get("https://api.github.com/users/m7md0a/repos").then((res: {data : RepoType[]}) =>{
      data = res.data
        .filter((e) => (e.sortM = e.updated_at.replace(/T|-|:|Z/gi, "")))
        .sort((a: any, b: any) => a.sortM - b.sortM)
        .reverse();
    });
    return data;
  } catch (error) {
    return undefined
  }
}

export async function getRepo(projectName: string): Promise<RepoType | undefined> {
  try {
    let data;
    await axios
      .get(`https://api.github.com/repos/m7md0a/${projectName}`)
      .then((res) => {
        data = res.data;
      });
    return data;
  } catch (error) {
    return undefined
  }
}

async function getReadme(projectName: string) {
  try {
    let data;
    await axios
      .get(
        `https://raw.githubusercontent.com/m7md0a/${projectName}/main/README.md`
      )
      .then((res) => {
        data = res.data;
      });
    return data;
  } catch (e) {
    return false;
  }
}
