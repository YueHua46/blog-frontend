export type IReply = {
  name: string;
  date: string;
  content: string;
}

export type IMessage = {
  name: string;
  avatar: string;
  date: string;
  content: string;
  reply?: IReply[];
}