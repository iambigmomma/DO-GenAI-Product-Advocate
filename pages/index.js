import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen lg:flex text-lg">
      {/* left side */}
      <div className="lg:w-1/2 relative z-10 flex flex-col justify-center px-10 lg:px-20 py-20 lg:py-0 text-left">
        <h2 className="inter text-4xl mb-3 font-bold text-gray-800">
          DigitalOcean Solution Architecture Center{" "}
          <span className="block text-blue-500 text-2xl font-normal">
            Deployed the DeepSeek Model on GenAI Platform!
          </span>
        </h2>

        <p className="text-gray-700 mb-6">
          Deploy API routes, static frontend, databases, and more.
        </p>

        <div className="sm:flex">
          <a
            href="https://docs.digitalocean.com/products/genai-platform/"
            className="block py-2 px-5 rounded shadow bg-gray-500 text-gray-100 sm:mr-2 mb-2 sm:mb-0">
            View the Docs
          </a>
        </div>
      </div>

      {/* right side */}
      <div className="lg:w-1/2 relative">
        <svg
          className="hidden lg:block text-white fill-current absolute h-full transform -translate-x-1/2 w-48 z-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none">
          <polygon points="50,0 100,0 50,100 0,100"></polygon>
        </svg>

        <Image
          src="https://res.cloudinary.com/iambigmomma/image/upload/v1739274188/banner/deepseek-deploy-in-3-ways.jpg"
          alt="DigitalOcean and DeepSeek"
          layout="fill"
          objectFit="cover"
          className="lg:absolute object-cover lg:inset-y-0 lg:right-0 lg:h-full lg:w-full"
        />
      </div>
    </div>
  )
}
