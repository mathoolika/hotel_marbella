import room1 from "./images/room-1.jpg";
import img1 from "./images/details-1-1.jpg";
import img2 from "./images/details-1-2.jpg";
import img3 from "./images/details-1-3.jpg";

import room2 from "./images/room-2.jpg";
import img4 from "./images/details-2-1.jpg";
import img5 from "./images/details-2-2.jpg";
import img6 from "./images/details-2-3.jpg";

import room3 from "./images/room-3.jpg";
import img7 from "./images/details-3-1.jpg";
import img8 from "./images/details-3-2.jpg";
import img9 from "./images/details-3-3.jpg";

import room4 from "./images/room-4.jpg";
import img10 from "./images/details-4-1.jpg";
import img11 from "./images/details-4-2.jpg";
import img12 from "./images/details-4-3.jpg";

const items = [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "Master Ocean View Grand Rooms",
      single: "Master Ocean View Grand Rooms",
      type: "master",
      price: 500,
      size: 40,
      capacity: 4,
      pets: false,
      breakfast: true,
      featured: false,
      description:
        "These stunning king rooms feature a separate living room divided by a sleek half wall, a shower/tub combination, two HDTVs, and two private balconies overlooking the hotel pool with sweeping south-facing views of the ocean.",
      extras: [
        "Balcony",
        "Pool",
        "Elevator",
        "TV",
        "Free Parking",
        "coffee/tea maker",
        "Mini Bar",
        "Bathtub",
        "Shower",
        "Laundry and dry cleaning service",
        "Free WIFI",
      ],
      images: [
        {
          fields: {
            file: {
              url: room1,
            },
          },
        },
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
        {
          fields: {
            file: {
              url: img3,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      name: "Royal Bridge Suite",
      single: "Royal Bridge Suite",
      type: "double",
      price: 350,
      size: 45,
      capacity: 2,
      pets: false,
      breakfast: true,
      featured: true,
      description:
        "A room with an extraordinatry view right at your feet. Perfect for you and your significant other.",
      extras: [
        "Balcony",
        "Pool",
        "Elevator",
        "TV",
        "coffee/tea maker",
        "Bar",
        "Bathtub",
        "Free WIFI",
      ],
      images: [
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: img4,
            },
          },
        },
        {
          fields: {
            file: {
              url: img5,
            },
          },
        },
        {
          fields: {
            file: {
              url: img6,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      name: "Junior Suite Ocean View",
      single: "Junior Suite Ocean View",
      type: "master",
      price: 350,
      size: 40,
      capacity: 4,
      pets: true,
      breakfast: true,
      featured: false,
      description:
        "This is a privileged setting for a luxurious and distinctive experience. It has spectacular views from every spacious suite and residence. ",
      extras: [
        "Balcony",
        "Pool",
        "Elevator",
        "TV",
        "Free Parking",
        "coffee/tea maker",
        "Bar",
        "Bathtub",
        "Free WIFI",
        "SPA",
        "Gym",
      ],
      images: [
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: img7,
            },
          },
        },
        {
          fields: {
            file: {
              url: img8,
            },
          },
        },
        {
          fields: {
            file: {
              url: img9,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "4",
    },
    fields: {
      name: "Sunrise Suite Ocean View",
      single: "Sunrise Suite Ocean View",
      type: "single",
      price: 1500,
      size: 100,
      capacity: 2,
      pets: true,
      breakfast: true,
      featured: false,
      description:
        "The epitome of relaxation starts in these expansive suites with the best views.",
      extras: [
        "Balcony",
        "Pool",
        "Elevator",
        "TV",
        "Bar",
        "Bathtub",
        "Free WIFI",
        "SPA",
        "Mini Bar",
      ],
      images: [
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
        {
          fields: {
            file: {
              url: img10,
            },
          },
        },
        {
          fields: {
            file: {
              url: img11,
            },
          },
        },
        {
          fields: {
            file: {
              url: img12,
            },
          },
        },
      ],
    },
  },
];

export default items;