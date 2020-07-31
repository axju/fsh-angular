export interface Snippet {
  id: number;
  title: string;
  description: string;
  highlighted: string;
  count_likes: number;
  count_comments: number;
  user: { id: number; username: string };
}
