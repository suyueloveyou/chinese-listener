
import { Toaster } from "sonner";
import TopNav from "@/components/TopNav";
import ChatList from "@/components/ChatList";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <TopNav />
      <div className="flex-1 overflow-y-auto">
        <ChatList />
      </div>
      <BottomNav />
      <Toaster position="top-center" />
    </div>
  );
};

export default Index;
