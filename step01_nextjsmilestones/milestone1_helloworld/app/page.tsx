import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-black text-white">
        <h1 className=" text-[90px] font-semibold text-center mx-auto  p-5 animate-pulse">Hello World!</h1>
        <p className="italic text-[35px] text-center animate-bounce">This is my first interaction with Next.js</p>
      </div>
    </>
  );
}
