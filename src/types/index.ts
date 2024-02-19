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
}