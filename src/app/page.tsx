import Image from "next/image"

export default function Home() {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
    <div className="flex items-center gap-x-4 text-xs">
      <time dateTime="2020-03-16" className="text-gray-500">April 1, 2024</time>
      <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Software</a>
    </div>
    <div className="group relative">
      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
        <a href="/1">
          <span className="absolute inset-0"></span>
          Hello World
        </a>
      </h3>
      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Setting up a basic blog using NextJS and Tailwind CSS</p>
    </div>
    <div className="relative mt-8 flex items-center gap-x-4">
      <Image src="https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
      <div className="text-sm leading-6">
        <p className="font-semibold text-gray-900">
          <a href="/">
            <span className="absolute inset-0"></span>
            Hamish Rose
          </a>
        </p>
      </div>
    </div>
  </article>)
}
