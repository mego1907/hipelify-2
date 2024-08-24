export type GamingDataTypes = {
  "paid-games": SingleGameTypes[];
  "free-games": SingleGameTypes[];
  "multi-player": SingleGameTypes[];
};

export type SingleGameTypes = {
  image: string;
  title: string;
  stars: string;
  desc: string;
  price: string;
};

export type BannerStoresTypes = {
  name: string;
  image: string;
  link: string;
}[];
