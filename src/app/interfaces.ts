export interface Newcomment {
  ig: number,
  content: string,
  createdAt: string,
  score: number,
  user: {
      image: {
          png: string;
          webp: string
      },
      username: string
  },
  replies?: Array<Newcomment>
}
