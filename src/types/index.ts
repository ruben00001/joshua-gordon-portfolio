export type LocalImage = {
  type: "image";
  url: string;
};

export type VideoCoverImage = {
  coverImage?: {
    url: string;
    position?: "top" | "center" | "bottom";
  };
};

export type YoutubeVideo = {
  type: "youtube-video";
  youtubeUrl: string;
} & VideoCoverImage;

export type Page = {
  title: string;
  description?: string | string[];
  media: (LocalImage | YoutubeVideo)[];
};
