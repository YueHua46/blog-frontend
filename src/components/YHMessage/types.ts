import { IMessage } from "../../views/Message/types";

export interface IYHMessageProps {
  children?: React.ReactNode;
  messageList: IMessage[]
  submitMdValue: (v: string | undefined) => void
}