
import { MessageCircle, User, Search, Bell } from "lucide-react";

const BottomNav = () => {
  return (
    <div className="sticky bottom-0 z-10 bg-slate-50 shadow-[0_-1px_3px_rgba(0,0,0,0.1)] text-gray-600">
      <div className="flex justify-around">
        <div className="flex flex-col items-center py-2 px-4 text-green-500">
          <MessageCircle className="h-6 w-6" />
          <span className="text-xs mt-1">微信</span>
        </div>
        <div className="flex flex-col items-center py-2 px-4">
          <User className="h-6 w-6" />
          <span className="text-xs mt-1">通讯录</span>
        </div>
        <div className="flex flex-col items-center py-2 px-4">
          <Search className="h-6 w-6" />
          <span className="text-xs mt-1">发现</span>
        </div>
        <div className="flex flex-col items-center py-2 px-4">
          <Bell className="h-6 w-6" />
          <span className="text-xs mt-1">我</span>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
