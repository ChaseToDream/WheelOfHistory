export interface HistoricalFigure {
  id: string;
  name: string;
  birthYear: number;
  deathYear: number;
  category: string;
  description: string;
  imageUrl: string;
}

export const historicalFigures: HistoricalFigure[] = [
  // 科学家
  {
    id: "newton",
    name: "艾萨克·牛顿",
    birthYear: 1643,
    deathYear: 1727,
    category: "scientist",
    description: "英国数学家、物理学家、天文学家、炼金术士、神学家和作家",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Isaac%20Newton%20portrait%20painting%20historical%20style&image_size=square"
  },
  {
    id: "einstein",
    name: "阿尔伯特·爱因斯坦",
    birthYear: 1879,
    deathYear: 1955,
    category: "scientist",
    description: "德国出生的理论物理学家，提出了相对论",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Albert%20Einstein%20portrait%20painting%20historical%20style&image_size=square"
  },
  {
    id: "curie",
    name: "玛丽·居里",
    birthYear: 1867,
    deathYear: 1934,
    category: "scientist",
    description: "波兰裔法国物理学家、化学家，研究放射性现象",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Marie%20Curie%20portrait%20painting%20historical%20style&image_size=square"
  },
  
  // 艺术家
  {
    id: "leonardo",
    name: "列奥纳多·达·芬奇",
    birthYear: 1452,
    deathYear: 1519,
    category: "artist",
    description: "意大利文艺复兴时期的画家、发明家、科学家",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Leonardo%20da%20Vinci%20portrait%20painting%20renaissance%20style&image_size=square"
  },
  {
    id: "picasso",
    name: "巴勃罗·毕加索",
    birthYear: 1881,
    deathYear: 1973,
    category: "artist",
    description: "西班牙画家、雕塑家，立体派艺术的创始人",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Pablo%20Picasso%20portrait%20painting%20modern%20style&image_size=square"
  },
  
  // 政治家
  {
    id: "napoleon",
    name: "拿破仑·波拿巴",
    birthYear: 1769,
    deathYear: 1821,
    category: "politician",
    description: "法国军事家、政治家，法兰西第一帝国皇帝",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Napoleon%20Bonaparte%20portrait%20painting%20historical%20style&image_size=square"
  },
  {
    id: "lincoln",
    name: "亚伯拉罕·林肯",
    birthYear: 1809,
    deathYear: 1865,
    category: "politician",
    description: "美国第16任总统，领导北方赢得南北战争",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Abraham%20Lincoln%20portrait%20painting%20historical%20style&image_size=square"
  },
  
  // 哲学家
  {
    id: "plato",
    name: "柏拉图",
    birthYear: -427,
    deathYear: -347,
    category: "philosopher",
    description: "古希腊哲学家，苏格拉底的学生，亚里士多德的老师",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Plato%20ancient%20Greek%20philosopher%20portrait&image_size=square"
  },
  {
    id: "kant",
    name: "伊曼努尔·康德",
    birthYear: 1724,
    deathYear: 1804,
    category: "philosopher",
    description: "德国哲学家，启蒙运动时期的重要思想家",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Immanuel%20Kant%20portrait%20painting%20historical%20style&image_size=square"
  },
  
  // 作家
  {
    id: "shakespeare",
    name: "威廉·莎士比亚",
    birthYear: 1564,
    deathYear: 1616,
    category: "writer",
    description: "英国文艺复兴时期的剧作家、诗人",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=William%20Shakespeare%20portrait%20painting%20renaissance%20style&image_size=square"
  },
  {
    id: "dickens",
    name: "查尔斯·狄更斯",
    birthYear: 1812,
    deathYear: 1870,
    category: "writer",
    description: "英国维多利亚时代的小说家",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Charles%20Dickens%20portrait%20painting%20victorian%20style&image_size=square"
  },
  
  // 音乐家
  {
    id: "mozart",
    name: "沃尔夫冈·莫扎特",
    birthYear: 1756,
    deathYear: 1791,
    category: "musician",
    description: "奥地利作曲家，古典音乐时期的代表人物",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wolfgang%20Mozart%20portrait%20painting%20classical%20style&image_size=square"
  },
  {
    id: "beethoven",
    name: "路德维希·范·贝多芬",
    birthYear: 1770,
    deathYear: 1827,
    category: "musician",
    description: "德国作曲家，古典音乐时期向浪漫主义时期过渡的关键人物",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ludwig%20van%20Beethoven%20portrait%20painting%20classical%20style&image_size=square"
  }
];

export const categories = [
  { id: "all", name: "全部" },
  { id: "scientist", name: "科学家" },
  { id: "artist", name: "艺术家" },
  { id: "politician", name: "政治家" },
  { id: "philosopher", name: "哲学家" },
  { id: "writer", name: "作家" },
  { id: "musician", name: "音乐家" }
];
