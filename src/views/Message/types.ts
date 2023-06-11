type Reply = {
  name: string;
  date: string;
  content: string;
}

type Message = {
  name: string;
  avatar: string;
  date: string;
  content: string;
  reply?: Reply[];
}
