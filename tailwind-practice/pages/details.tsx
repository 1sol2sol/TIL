import type { NextPage } from "next";

const Detail: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <details className="select-none open:text-white open:bg-indigo-400">
        <summary className="cursor-pointer">What is my favorite food</summary>
        <span className="">김치</span>
      </details>
      <ul className=" list-decimal marker:text-teal-500">
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul>
      <input
        type="file"
        className=" file:cursor-pointer file:hover:text-purple-400 file:hover:bg-white file:hover:border-purple-400 file:hover:border-2 file:transition-colors file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-400"
      />
      <p className=" first-letter:text-7xl first-letter:hover:text-purple-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus enim aliquid nostrum, quisquam ea cupiditate esse excepturi expedita libero sapiente doloribus facere commodi possimus reiciendis dicta temporibus qui maiores accusantium</p>
    </div>
  );
};

export default Detail;
