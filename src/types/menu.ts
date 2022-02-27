export interface IMenu {
    titles: string[],
    links: string[],
}

export interface IBusinessCard {
    image: string,
    items: string[],
    vertical: boolean,
}

export interface IProjects {
    links: string[],
    images: string[],
    descriptions: Array<string[]>,
}

export interface IVideosComponent{
    videos: string[],
    titles: string[]
}

export interface IContactMe {
    icons: string[],
    alts: string[],
    title: string,
    links: string[]
}