interface IFriend {
  id: number;
  name: string;
  avatar: string;
  link: string;
  description?: string;
}

interface IFriendCardProps {
  friend: IFriend;
}
