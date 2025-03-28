
import { Search, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

const TopNav = () => {
  return (
    <div className="sticky top-0 z-10 bg-slate-50 p-3 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="text-xl font-medium">微信</div>
        <div className="flex items-center space-x-4">
          <Search className="h-5 w-5 text-gray-500" />
          <div className="relative">
            <MessageCircle className="h-5 w-5 text-gray-500" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </span>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="搜索" 
            className="pl-9 bg-gray-200 border-0 focus-visible:ring-0 text-sm rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
