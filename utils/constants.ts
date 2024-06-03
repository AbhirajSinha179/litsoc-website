export const navConfig = {
  links: [
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/works",
      label: "Works",
    },
    {
      href: "/events",
      label: "Events"
    },
    {
      href: "/team",
      label: "Team",
    },
    {
      href: "#contact",
      label: "Contact",
    },
  ],
};

export const getBaseUrl = () => {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "";
}
