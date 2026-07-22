export const site = {
  name: "PCB Libya",
  url: "https://pcblibya.com",
  tagline: "Open hardware designs, libraries & tutorials",
  description:
    "Portfolio, tutorials and open-source component libraries from a Libyan PCB designer working in Altium Designer and KiCad.",
  github: "https://github.com/pcblibya/pcblibya-library",
  email: "contact@pcblibya.com",
  license: "CERN-OHL-S-2.0",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/library", label: "Library" },
  { href: "/blog", label: "Tutorials" },
  { href: "/downloads", label: "Downloads" },
  { href: "/about", label: "About" },
] as const;
