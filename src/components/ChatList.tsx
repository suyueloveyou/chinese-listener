
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatItem {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
}

const chatData: ChatItem[] = [
  {
    id: 1,
    name: "张三",
    avatar: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    lastMessage: "你好，明天我们一起去吃饭吧？",
    time: "上午10:23",
    unread: 2,
  },
  {
    id: 2,
    name: "李四",
    avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
    lastMessage: "好的，没问题。",
    time: "昨天",
    unread: 0,
  },
  {
    id: 3,
    name: "王五",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
    lastMessage: "我已经发送给你了，检查一下。",
    time: "昨天",
    unread: 1,
  },
  {
    id: 4,
    name: "朋友圈",
    avatar: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=128&h=128&dpr=2&q=80",
    lastMessage: "[朋友圈动态] 3条新消息",
    time: "星期三",
    unread: 3,
  },
  {
    id: 5,
    name: "技术群",
    avatar: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHw%3D&w=128&h=128&dpr=2&q=80",
    lastMessage: "小明: 这个问题我可以帮你解决",
    time: "星期二",
    unread: 0,
  },
  {
    id: 6,
    name: "同学群",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHw%3D&w=128&h=128&dpr=2&q=80",
    lastMessage: "小红: 下周我们有聚会吗？",
    time: "星期一",
    unread: 0,
  },
  {
    id: 7,
    name: "微信支付",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&w=128&h=128&dpr=2&q=80",
    lastMessage: "您有一笔交易已完成",
    time: "7月20日",
    unread: 0,
  },
  {
    id: 8,
    name: "文件传输助手",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&w=128&h=128&dpr=2&q=80",
    lastMessage: "您发送了一个文件",
    time: "7月15日",
    unread: 0,
  },
];

const ChatList = () => {
  return (
    <ScrollArea className="h-full">
      <div className="divide-y divide-gray-200">
        {chatData.map((chat) => (
          <div key={chat.id} className="flex py-3 px-4 hover:bg-gray-50 cursor-pointer">
            <div className="relative mr-3">
              <Avatar className="h-12 w-12">
                <img src={chat.avatar} alt={chat.name} className="object-cover" />
              </Avatar>
              {chat.unread > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {chat.unread}
                </span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <h3 className="text-base font-medium text-gray-900 truncate">{chat.name}</h3>
                <span className="text-xs text-gray-500">{chat.time}</span>
              </div>
              <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default ChatList;
