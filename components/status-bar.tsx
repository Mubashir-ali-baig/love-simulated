export default function StatusBar() {
  return (
    <div className="flex items-center justify-between px-8 pt-4 pb-2 text-sm font-semibold text-[#BA435F]">
      <span>11:41</span>
      <div className="flex items-center gap-1">
        <div className="flex items-end gap-0.5">
          <div className="w-1 h-1 bg-[#BA435F]"></div>
          <div className="w-1 h-2 bg-[#BA435F]"></div>
          <div className="w-1 h-3 bg-[#BA435F]"></div>
          <div className="w-1 h-4 bg-[#BA435F]"></div>
        </div>
        <svg className="w-4 h-3 ml-1" viewBox="0 0 16 12" fill="none">
          <path
            d="M8 10.5C8.3 10.5 8.5 10.7 8.5 11C8.5 11.3 8.3 11.5 8 11.5C7.7 11.5 7.5 11.3 7.5 11C7.5 10.7 7.7 10.5 8 10.5Z"
            fill="currentColor"
          />
          <path
            d="M5.5 8.5C6.4 7.6 7.2 7.2 8 7.2C8.8 7.2 9.6 7.6 10.5 8.5"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M3.5 6.5C5 5 6.5 4.5 8 4.5C9.5 4.5 11 5 12.5 6.5"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M1.5 4.5C3.5 2.5 5.7 1.8 8 1.8C10.3 1.8 12.5 2.5 14.5 4.5"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        <div className="w-6 h-3 border border-[#BA435F] rounded-sm ml-1 relative">
          <div className="w-full h-full bg-[#BA435F] rounded-sm"></div>
          <div className="absolute -right-0.5 top-0.5 w-0.5 h-2 bg-[#BA435F] rounded-r-sm"></div>
        </div>
      </div>
    </div>
  );
}
