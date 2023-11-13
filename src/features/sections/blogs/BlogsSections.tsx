import BlogsContainer from './BlogsContainer';

export default function BlogsSection() {
  return (
    <div className="mb-24">
      <div className="flex items-center justify-center flex-col p-20 w-full">
        <span className="text-lime-700 mb-4 text-lg">Blogs</span>
        <div className="space-y-6">
          <h1 className=" font-light text-5xl uppercase text-gray-800">Our highlights</h1>
        </div>
      </div>
      <BlogsContainer />
    </div>
  );
}
