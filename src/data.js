import {
  v4 as uuidv4
} from "uuid";

const childHoop = () => {
  return [{
      name: "Low Rider",
      cover: "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
      artist: "Evil Needle",
      color: ['#EC564B', '#CC9354'],
      id: uuidv4(),
      active: true,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=51078"
    }, {
      name: "Summer Vibe",
      cover: "https://chillhop.com/wp-content/uploads/2023/02/71374d07888a8b1b3fbef53b82d283f53209cc1a-1024x1024.jpg",
      artist: "Evil Needle, Misha",
      color: ['#2F6740', '#9A6835'],
      id: uuidv4(),
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=51088"
    },
    {
      name: "Looking In",
      cover: "https://chillhop.com/wp-content/uploads/2021/08/af3ce13ad39d38057f00144f8a7c295877ccfec1-1024x1024.jpg",
      artist: "Smile High, Teddy Roxpin ",
      color: ['#458B93', "#B98778"],
      id: uuidv4(),
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=23335"
    },
    {
      name: "Serenity",
      cover: "https://chillhop.com/wp-content/uploads/2022/06/Explore-Chillville-SUmmer.jpeg",
      artist: "Poldoore",
      color: ['#FBC979', "#EBEBF7"],
      id: uuidv4(),
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=23345"
    },
    {
      name: "DELICATE",
      cover: "https://chillhop.com/wp-content/uploads/2023/02/ef337196272ee56d2e76383d39ed446b57472aec-1024x1024.jpg",
      artist: "Middle School, Henry",
      color: ['#FBC979', "#EBEBF7"],
      id: uuidv4(),
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=49381"
    },
    {
      name: "Kaleidoscope",
      cover: "https://chillhop.com/wp-content/uploads/2022/12/b48463b9b5a0351cc2f34b31fcee6185fdb03bb5-1024x1024.jpg",
      artist: "El Train",
      color: ['#FBC979', "#EBEBF7"],
      id: uuidv4(),
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=49426"
    }
  ]
}

export default childHoop;