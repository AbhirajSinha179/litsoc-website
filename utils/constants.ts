export const navConfig = {
  links: [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/team",
      label: "Team",
    },
    {
      href: "/works",
      label: "Works",
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
