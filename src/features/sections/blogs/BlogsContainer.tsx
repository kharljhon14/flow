import Blog from './Blog';

import Image from 'next/image';
import Link from 'next/link';

export default function BlogsContainer() {
  return (
    <div className="flex items-center justify-evenly mb-12">
      <Blog>
        <div className="relative w-full h-1/2">
          <Image
            fill
            src="/images/blogs/blog-1.jpg"
            alt="Blog-image"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <div className="absolute inset-0 w-full flex items-center justify-center pointer-events-none">
          <div className="h-[56px] w-[56px] overflow-hidden rounded-full">
            <Image
              width={64}
              height={64}
              src="/images/profile.jpg"
              alt="Proile"
              style={{ width: '56px', height: '56px' }}
            />
          </div>
        </div>

        <div className=" h-1/2 text-center flex flex-col">
          <div className="flex items-center justify-evenly flex-col p-6 h-full">
            <h1 className="text-lime-700 font-light">How to Adjust Tincture Alcohol Level</h1>
            <p className="text-xs">
              Adjusting the alcohol level in a tincture is crucial for achieving the desired potency
              and flavor.
            </p>
            <Link
              href="/"
              className="text-lime-600 underline text-sm uppercase"
            >
              Read More
            </Link>
          </div>
          <div className="border-t w-full flex-shrink py-2">
            <span className="text-gray-400 text-xs text-center">Dr.Lero | October 4, 2023</span>
          </div>
        </div>
      </Blog>

      <Blog>
        <div className="relative w-full h-1/2">
          <Image
            fill
            src="/images/blogs/blog-2.jpg"
            alt="Blog-image"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <div className="absolute inset-0 w-full flex items-center justify-center pointer-events-none">
          <div className="h-[56px] w-[56px] overflow-hidden rounded-full">
            <Image
              width={64}
              height={64}
              src="/images/profile.jpg"
              alt="Proile"
              style={{ width: '56px', height: '56px' }}
            />
          </div>
        </div>

        <div className=" h-1/2 text-center flex flex-col">
          <div className="flex items-center justify-evenly flex-col p-6 h-full">
            <h1 className="text-lime-700 font-light">
              Can Alzheimer&apos;s Disease be Treaded with Fruits or Herbs
            </h1>
            <p className="text-xs">
              Alzheimer&apos;s disease is a complex neurodegenerative disorder that currently has no
              cure.
              <br />
            </p>
            <Link
              href="/"
              className="text-lime-600 underline text-sm uppercase"
            >
              Read More
            </Link>
          </div>
          <div className="border-t w-full flex-shrink py-2">
            <span className="text-gray-400 text-xs text-center">Dr.Lero | September 7, 2023</span>
          </div>
        </div>
      </Blog>

      <Blog>
        <div className="relative w-full h-1/2">
          <Image
            fill
            src="/images/blogs/blog-3.jpg"
            alt="Blog-image"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <div className="absolute inset-0 w-full flex items-center justify-center pointer-events-none">
          <div className="h-[56px] w-[56px] overflow-hidden rounded-full">
            <Image
              width={64}
              height={64}
              src="/images/profile.jpg"
              alt="Proile"
              style={{ width: '56px', height: '56px' }}
            />
          </div>
        </div>

        <div className=" h-1/2 text-center flex flex-col">
          <div className="flex items-center justify-evenly flex-col p-6 h-full">
            <h1 className="text-lime-700 font-light">
              The Transformative Power of Mindfulness Meditation
            </h1>
            <p className="text-xs">
              Mindfulness meditation is a practice that involves bringing one&apos;s attention to
              the present moment without judgment.
            </p>
            <Link
              href="/"
              className="text-lime-600 underline text-sm uppercase"
            >
              Read More
            </Link>
          </div>
          <div className="border-t w-full flex-shrink py-2">
            <span className="text-gray-400 text-xs text-center">Dr.Lero | October 10, 2023</span>
          </div>
        </div>
      </Blog>
    </div>
  );
}
