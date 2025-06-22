export const eventsData = {
  "firewall-pop-up-with-inside-chinas-surveillance-state-a-lecture-by-megha-rajagopalan": {
    title: "FIREWALL Pop-up with \"Inside China's Surveillance State\", a Lecture by Megha Rajagopalan!",
    exhibition: "Feb. 26, 2020, 5:00 PM - 10:00 PM",
    lecture: "Feb. 26, 2020, 6:30 PM - 8:00 PM",
    location: {
      name: "Fusco Recital Hall, Murray Student Center, Marist College",
      address: ["3399 North Rd", "Poughkeepsie, NY 12601"],
      mapLink: "https://www.google.com/maps/place/Murray+Student+Center/@41.7206041,-73.9355196,18.25z/data=!4m5!3m4!1s0x89dd3e077b997377:0xf1e3a80dd614c1f0!8m2!3d41.721027!4d-73.9355703"
    },
    description: [
      "Megha Rajagopalan, an international correspondent for Buzzfeed News who has reported on digital rights from Southeast Asia to the Persian Gulf, will share her work documenting the rise of state surveillance from China's campaign targeting its Muslim minorities to cameras on the streets of New York City. How do we redefine public and private spaces at a time when we are digitally monitored without consent?",
      "This lecture is sponsored by Marist College Strategic Initiative Funding (SPPAC) and will be presented together with FIREWALL, a pop-up Internet café by Assistant Professor of Art & Digital Media, Joyce Yu-Jean Lee. Attendees will simultaneously surf the web in Poughkeepsie and China to compare the image results side by side."
    ],
    links: [
      {
        text: "FIREWALL Internet Cafe Gives Glimpse of Repressive Chinese Censorship",
        url: "https://www.maristcircle.com/home/2020/3/3/firewall-internet-cafe-gives-glimpse-of-repressive-chinese-censorship",
        publication: "Marist Circle"
      }
    ],
    images: Array.from({length: 10}, (_, i) => ({
      src: `https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/FWC_POU_${i + 1}.jpg`,
      alt: `Megha Image ${i + 1}`
    }))
  },
  // Add more events here...
};