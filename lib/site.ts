export const site = {
  name: "PCB Libya",
  url: "https://pcblibya.com",
  tagline: "Libya's PCB Design Community",
  description:
    "The home of Libyan PCB designers: open hardware designs, component libraries and tutorials in Arabic and English — KiCad and Altium Designer.",
  github: "https://github.com/pcblibya/pcblibya-library",
  facebook: "https://facebook.com/pcblibya",
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
