export type NavigationItem = {
    name: string;
    path: string;
};

export const SITE = {
    name: "Ahmad Aiman",
    title: "Fullstack Developer And Still Learning",
    description: "Personal portfolio and blog",
    url: "",
    defaultImage: "/default-og-image.jpg",
} as const;

export const NAVIGATION: {
    main: NavigationItem[];
} = {
    main: [
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: "Projects", path: "/projects" },
        { name: "Experience", path: "/experience" },
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