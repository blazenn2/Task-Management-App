export const usernameTagCSS = (css = "") => `${css} bg-sl text-white text-xs md:p-2 p-1 rounded-lg space-x-1 flex items-center mr-2 mb-2`;

export const cardTagCSS = (piority) => `text-xs bg-gradient-to-br ${piority === 0 ? "from-blue-300 to-indigo-500" : (piority === 1 ? "from-green-300 to-blue-300" : "from-red-400 to-amber-400")} p-1 rounded-sm text-white md:w-1/2 w-3/4 text-center font-bold`;

export const statusTagCSS = (color, css = "") => `${css} px-3 rounded-full text-white font-normal ${color} inline-block mt-1`;