import { ExploreDataType, ExploreNavType } from "@/interFace/interFace";

export const exploreData: ExploreDataType[] = [
  {
    id: 1,
    tabId: "tab-nav1",
    ariaLabelledby: "nav-all-tab",
  },
  {
    id: 2,
    tabId: "tab-nav2",
    ariaLabelledby: "nav-like-tab"
  },
  {
    id: 3,
    tabId: "tab-nav3",
    ariaLabelledby: "nav-like-tab"
  }
];

export const exploreNavdata: ExploreNavType[] = [
  {
    id: 1,
    navId: "nav-all-tab",
    target: "tab-nav1",
    button: "All Activities"
  },
  {
    id: 2,
    navId: "nav-like-tab",
    target: "tab-nav2",
    button: "Likes"
  },
  {
    id: 3,
    navId: "nav-like-tab",
    target: "tab-nav3",
    button: "Likes"
  }
];