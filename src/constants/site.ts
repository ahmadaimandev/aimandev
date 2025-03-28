export type NavigationItem = {
    name: string;
    path: string;
};

export const SITE = {
    name: "AimanDev",
    title: "Fullstack Developer & Gamer",
    description: "Personal portfolio and blog",
    url: "https://bytekai.dev",
    defaultImage: "/default-og-image.jpg",
} as const;

export const NAVIGATION: {
    main: NavigationItem[];
} = {
    main: [
        { name: "AimanDev", path: "/" },
        { name: "About Me", path: "/about-me" },
        { name: "Projects", path: "/projects" },
        { name: "Notes", path: "/notes" },
        { name: "Blog", path: "/blog" }
    ],
} as const;

export const CONTENT = {
    postsPerPage: 10,
    recentPostsLimit: 3,
    featuredProjectsLimit: 3,
} as const;

export const META = {
    openGraph: {
        type: "website",
        locale: "en_US",
    },
    twitter: {
        cardType: "summary_large_image",
    }
} as const; 