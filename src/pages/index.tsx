import noise from "../assets/noise.png";
import logo from "../assets/logo.png";
import avatar from "../assets/9662.webp";
import avatar2 from "../assets/people_2.webp"
import avatar3 from "../assets/people_3.webp"
import avatar4 from "../assets/people_4.webp"
import { ArrowUpRight, Check, Star, X } from "lucide-react";
import HoverGlow from "../components/HoverGlow";
import VideoCard from "../components/VideoCard";
import { videoContent } from "../const/content";

const Index = () => {
  return (
    <div className="relative bg-black overflow-x-hidden">
      {/* 🔵 STATIC BACKGROUND (Blobs + Noise) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Blobs */}
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-96 aspect-square blur-[120px] opacity-70 rounded-full animate-blob1 bg-gradient-to-br from-gray-300 to-gray-600" />
          <div className="w-96 aspect-square blur-[120px] opacity-70 rounded-full animate-blob2 bg-gradient-to-br from-slate-500 to-gray-800" />
          <div className="w-96 aspect-square blur-[120px] opacity-70 rounded-full animate-blob3 bg-gradient-to-br from-slate-400 to-slate-700" />
          <div className="w-96 aspect-square blur-[120px] opacity-70 rounded-full animate-blob4 bg-gradient-to-br from-gray-200 to-slate-400" />
          <div className="w-96 aspect-square blur-[120px] opacity-70 rounded-full animate-blob5 bg-gradient-to-br from-gray-800 to-blue-400" />
          <div className="w-96 aspect-square blur-[120px] opacity-70 rounded-full animate-blob6 bg-gradient-to-br from-gray-500 to-slate-500" />
        </div>

        {/* Noise Overlay */}
        <div
          className="absolute inset-0 bg-repeat opacity-5 mix-blend-overlay"
          style={{ backgroundImage: `url(${noise})` }}
        ></div>
      </div>

      {/* 🔝 Sticky Nav + Content */}
      <div className="relative z-50">
        {/* Sticky Navbar */}
        <div className="fixed w-full top-0 z-50 backdrop-blur-md bg-gradient-to-b from-black/70 to-transparent">
          <div className="px-4 lg:w-[70%] mx-auto flex flex-row justify-between items-center py-4">
            <img className="w-16" src={logo} alt="Logo" />
            <div className="hidden lg:flex flex-row gap-12 text-white text-lg font-medium">
              <a href="/" className="hover:opacity-50 hover:text-blue-500 duration-300 ease-in-out">Free Training</a>
              <a href="/" className="hover:opacity-50 hover:text-blue-500 duration-300 ease-in-out">Success Stories</a>
              <a href="/" className="hover:opacity-50 hover:text-blue-500 duration-300 ease-in-out">The Program</a>
              <a href="/" className="hover:opacity-50 hover:text-blue-500 duration-300 ease-in-out">Our Coaches</a>
            </div>
            <button className="font-bold px-4 py-4 flex gap-2 bg-white rounded-xl lg:rounded-lg">Book a Call <ArrowUpRight/></button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="hero w-[90%] lg:w-[70%] mx-auto pt-32 pb-16 lg:py-32">
          <div className="space-y-4">
            {/* Avatars + Stars */}
            <div className="w-fit mx-auto flex gap-3">
              {/* //circle div */}
              <ul className="relative w-28">
                <li className="absolute w-9 aspect-square rounded-full overflow-hidden border-2 border-yellow-500">
                  <img className="size-full object-cover" src={avatar} />
                </li>
                <li className="absolute left-6 w-9 aspect-square rounded-full overflow-hidden border-2 border-green-500">
                  <img className="size-full object-cover" src={avatar2} />
                </li>
                <li className="absolute left-12 w-9 aspect-square rounded-full overflow-hidden border-2 border-green-500">
                  <img className="size-full object-cover" src={avatar3} />
                </li>
                <li className="absolute left-16 w-9 aspect-square rounded-full overflow-hidden border-2 border-green-500">
                  <img className="size-full object-cover" src={avatar} />
                </li>
                <li className="absolute left-20 w-9 aspect-square rounded-full overflow-hidden border-2 border-yellow-500">
                  <img className="size-full object-cover" src={avatar4} />
                </li>
              </ul>
              <div>
                <ul className="flex gap-1 text-white">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <li key={i}>
                        <Star size={17} />
                      </li>
                    ))}
                </ul>
                <h5 className="font-bold lg:text-lg text-white">200+ Successful Students</h5>
              </div>
            </div>

            {/* Headline & CTA */}
            <div className="lg:w-[80%] mx-auto space-y-6 text-center text-white">
              <h1 className="text-3xl lg:text-6xl font-bold">
                How to Become a World-Class Sales Rep on a Top 1% Offer
              </h1>
              <p className="text-lg lg:text-xl">Even if you've never closed a deal in your life.</p>
              <a
                href="/"
                className="inline-flex w-full lg:w-fit items-center justify-center px-12 py-2 lg:py-3 rounded-md gap-2 bg-white font-semibold text-lg text-black"
              >
                <p>Apply Now</p>
                <ArrowUpRight />
              </a>
            </div>

            {/* YouTube Video */}
            <div className="w-full aspect-video rounded-3xl overflow-hidden">
                <iframe
                  loading="lazy"
                  title="Youtube Video"
                  allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  src="https://www.youtube.com/embed/_G7fsQy6L8I?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=0&autohide=1"
                  className="w-full aspect-video"
                ></iframe>
            </div>

            {/* Video Extra */}
            <div className="text-white space-y-8">
              <h3 className="text-3xl text-center">Here's what you'll discover inside this training...</h3>
              
              <ul className="relative flex gap-12 items-center justify-between">

                {/* Radial Gradient Background */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,_at_center,_#22c55e_60%,_white_100%)]"></div>

                {/* List Items */}
                <li className="flex gap-4 items-center p-4 border border-gray-200 rounded-2xl backdrop-blur-sm">
                  <Check className="text-green-600 w-16" />
                  <p className="text-lg font-medium">
                    The #1 reason why sales reps fail to close consistently and how you can fix it in days.
                  </p>
                </li>

                <li className="flex gap-4 items-center p-4 border border-gray-200 rounded-2xl backdrop-blur-sm">
                  <Check className="text-green-600 w-16" />
                  <p className="text-lg font-medium">
                    The #1 reason why sales reps fail to close consistently and how you can fix it in days.
                  </p>
                </li>

                <li className="flex gap-4 items-center p-4 border border-gray-200 rounded-2xl backdrop-blur-sm">
                  <Check className="text-green-600 w-16" />
                  <p className="text-lg font-medium">
                    The #1 reason why sales reps fail to close consistently and how you can fix it in days.
                  </p>
                </li>

              </ul>

            </div>

            {/* Video Testimonial */}
            <div className="py-12 space-y-8">
              <HoverGlow/>
              <div className="text-white text-center space-y-4">
                <h1 className="text-5xl font-bold">Hear it directly from our students</h1>
                <p className="w-[50%] mx-auto text-lg">The best way to judge any program? See the results it creates. Here’s what happened when real sales reps applied our process.  </p>
              </div>

              {/* Testimonial Carousel Video */}
              <div className="flex gap-4 flex-nowrap overflow-hidden">
                {
                  videoContent.map((content, index)=>(
                    <VideoCard key={index} content={content}/>
                  ))
                }
                 
              </div>

              {/* What you Get */}
              <div className="py-12 space-y-12">
                <div className="text-white text-center space-y-8">
                  <h1 className="text-5xl font-bold">What the top 1% sales reps do, that the average sales rep doesn't.</h1>
                  <p className="w-[50%] mx-auto text-lg">Top closers don’t wing it - they operate with precision.</p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-gray-300 space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl">The Average Sales Rep</h3>
                    </div>
                    <ul className="space-y-2 border p-6 rounded-xl">
                      <li className="flex items-center gap-2">
                        <X className="text-gray-600" size={28}/>
                        <p className="text-lg">Uses basic, overused wordtracks and scripts from their favorite sales guru.</p>
                      </li>
                      <li className="flex items-center gap-2">
                        <X className="text-gray-600" size={28}/>
                        <p className="text-lg">Follows a script from 2023, triggering instant sales resistance from prospects.  </p>
                      </li>
                      <li className="flex items-center gap-2">
                        <X className="text-gray-600" size={28}/>
                        <p className="text-lg">Jumps into each sales call hoping for the best, instead of using a proven strategy.</p>
                      </li>
                      <li className="flex items-center gap-2">
                        <X className="text-gray-600" size={28}/>
                        <p className="text-lg">Stays on a low-quality offer that doesn't care about them or their teammates.</p>
                      </li>
                    </ul>
                  </div>

                  <div className="text-gray-300 space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold">A Sales.io Mentee</h3>
                    </div>
                    <ul className="space-y-2 border p-6 rounded-xl">
                      <li className="flex items-center gap-2">
                        <Check className="text-green-600" size={28}/>
                        <p className="text-lg">Uses basic, overused wordtracks and scripts from their favorite sales guru.</p>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-green-600" size={28}/>
                        <p className="text-lg">Follows a script from 2023, triggering instant sales resistance from prospects.  </p>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-green-600" size={28}/>
                        <p className="text-lg">Jumps into each sales call hoping for the best, instead of using a proven strategy.</p>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-green-600" size={28}/>
                        <p className="text-lg">Stays on a low-quality offer that doesn't care about them or their teammates.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
