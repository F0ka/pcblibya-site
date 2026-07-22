export interface HostedDownload {
  title: string;
  description: string;
  category: string;
  version: string;
  size: string;
  href: string;
}

export interface ThirdPartySoftware {
  name: string;
  description: string;
  category: string;
  url: string;
}

export const hostedDownloads: HostedDownload[] = [
  {
    title: "ESP32 Dev Board — KiCad Project",
    description:
      "Complete KiCad 8 project for the ESP32 development board: schematic, PCB layout and footprints.",
    category: "KiCad Project",
    version: "1.0",
    size: "2.4 MB",
    href: "/files/esp32-dev-board/esp32-dev-board-kicad.zip",
  },
  {
    title: "ESP32 Dev Board — Gerber Files",
    description:
      "Fabrication-ready Gerber and drill files for the ESP32 development board, generated for JLCPCB.",
    category: "Gerbers",
    version: "1.0",
    size: "180 KB",
    href: "/files/esp32-dev-board/esp32-dev-board-gerbers.zip",
  },
];

export const thirdPartySoftware: ThirdPartySoftware[] = [
  {
    name: "KiCad",
    description:
      "Free and open-source electronics design automation suite for schematic capture and PCB layout.",
    category: "EDA — Open Source",
    url: "https://www.kicad.org",
  },
  {
    name: "Altium Designer",
    description:
      "Professional, unified PCB design software for schematics, layout and manufacturing outputs.",
    category: "EDA — Commercial",
    url: "https://www.altium.com",
  },
  {
    name: "Altium 365 Viewer",
    description:
      "Free browser-based viewer for Altium design files — open schematics and PCBs without a license.",
    category: "Viewer",
    url: "https://www.altium.com/altium-365/viewer",
  },
  {
    name: "JLCPCB",
    description:
      "Low-cost PCB fabrication and assembly service. The KiCad ordering plugin integrates directly with your project.",
    category: "Fabrication",
    url: "https://jlcpcb.com",
  },
  {
    name: "PCBWay",
    description:
      "PCB prototyping and manufacturing service supporting advanced boards, assembly and 3D printing.",
    category: "Fabrication",
    url: "https://www.pcbway.com",
  },
  {
    name: "FreeRouting",
    description:
      "Open-source interactive and automatic PCB router that works with KiCad and other EDA tools.",
    category: "Routing",
    url: "https://github.com/freerouting/freerouting",
  },
  {
    name: "LTspice",
    description:
      "Free high-performance SPICE simulator from Analog Devices for analog circuit simulation.",
    category: "Simulation",
    url: "https://www.analog.com/en/resources/design-tools-and-calculators/ltspice-simulator.html",
  },
  {
    name: "OpenSCAD",
    description:
      "Programmable 3D CAD modeler — useful for parametric enclosures and mechanical parts for your boards.",
    category: "3D CAD",
    url: "https://openscad.org",
  },
];
