import noise from "../assets/noise.png";
import logo from "../assets/logo.png";
import avatar from "../assets/9662.webp";
import avatar2 from "../assets/people_2.webp"
import avatar3 from "../assets/people_3.webp"
import avatar4 from "../assets/people_4.webp"
import { ArrowUpRight, Check, Star, X } from "lucide-react";
import HoverGlow from "../components/HoverGlow";
import {CoachContent, faqContent} from "../const/content";
import CallCTA from "../components/CallCTA";
import DescHeader from "../components/DescHeader";
import DOMPurify from 'dompurify';
import CoachCard from "../components/CoachCard";
import { DropDownTab } from "../components/DropDownTab";
import { VideoCarousel } from "../components/VideoCarousel";
import { CommunityCarousel } from "../components/CommunityCarousel";

const Index = () => {
  

  return (
    <div className="relative bg-black overflow-x-hidden">
      {/* 🔵 STATIC BACKGROUND (Blobs + Noise) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Blobs */}
        <div className="flex items-center justify-center w-full h-full">
          <div className="lg:w-96 aspect-square blur-[120px] opacity-70 rounded-full animate-blob1 bg-gradient-to-br from-gray-300 to-gray-600" />
          <div className="lg:w-96 aspect-square blur-[120px] opacity-70 rounded-full animate-blob2 bg-gradient-to-br from-slate-500 to-gray-800" />
          <div className="lg:w-96 aspect-square blur-[120px] opacity-70 rounded-full animate-blob3 bg-gradient-to-br from-slate-400 to-slate-700" />
          <div className="lg:w-96 aspect-square blur-[120px] opacity-70 rounded-full animate-blob4 bg-gradient-to-br from-gray-200 to-slate-400" />
          <div className="lg:w-96 aspect-square blur-[120px] opacity-70 rounded-full animate-blob5 bg-gradient-to-br from-gray-800 to-blue-400" />
          <div className="lg:w-96 aspect-square blur-[120px] opacity-70 rounded-full animate-blob6 bg-gradient-to-br from-gray-500 to-slate-500" />
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
              <a href="#crypto_training" className="hover:opacity-50 hover:text-blue-500 duration-300 ease-in-out">Crypto Training</a>
              <a href="#community" className="hover:opacity-50 hover:text-blue-500 duration-300 ease-in-out">The Community</a>
              <a href="#referral" className="hover:opacity-50 hover:text-blue-500 duration-300 ease-in-out">Trading Referrals</a>
              <a href="gentlemen" className="hover:opacity-50 hover:text-blue-500 duration-300 ease-in-out">The Gentlemen</a>
            </div>
            <CallCTA/>
          </div>
        </div>

        {/* Hero Section */}
        <div id="crypto_training" className="hero w-[90%] lg:w-[60%] mx-auto pt-32 lg:pt-32 lg:pb-16">
          <div className="space-y-8">
            {/* Avatars + Stars */}
            <div className="w-fit mx-auto flex gap-6 lg:gap-3">
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
                <h5 className="font-bold text-sm line-clamp-1 lg:text-lg text-white">720+ Success Stories and Counting</h5>
              </div>
            </div>

            {/* Headline & CTA */}
            <div className="lg:w-[80%] mx-auto space-y-6 text-center text-white">
              <h1 className="text-3xl lg:text-[3.3rem] leading-[1] font-medium">
                How to Build World-Class Crypto Trading Skills
              </h1>
              <p className="text-lg lg:text-xl">Even if you haven't made a profitable trade yet.</p>
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
              <h3 className="text-[1.4rem] font-medium lg:text-3xl text-center">Here's what you'll discover inside this training...</h3>
              
              <ul className="relative flex flex-col lg:flex-row gap-4 lg:gap-12 items-center justify-between">

                {/* Radial Gradient Background */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,_at_center,_#22c55e_60%,_white_100%)]"></div>

                {/* List Items */}
                <li className="flex gap-4 items-center p-4 border border-gray-200 rounded-2xl backdrop-blur-sm">
                  <Check className="text-green-600 w-16" />
                  <p className="text-[1.13rem] lg:text-lg leading-tight font-medium">
                    The #1 reason why sales reps fail to close consistently and how you can fix it in days.
                  </p>
                </li>

                <li className="flex gap-4 items-center p-4 border border-gray-200 rounded-2xl backdrop-blur-sm">
                  <Check className="text-green-600 w-16" />
                  <p className="text-[1.13rem] lg:text-lg leading-tight font-medium">
                    The #1 reason why sales reps fail to close consistently and how you can fix it in days.
                  </p>
                </li>

                <li className="flex gap-4 items-center p-4 border border-gray-200 rounded-2xl backdrop-blur-sm">
                  <Check className="text-green-600 w-16" />
                  <p className="text-[1.13rem] lg:text-lg leading-tight font-medium">
                    The #1 reason why sales reps fail to close consistently and how you can fix it in days.
                  </p>
                </li>

              </ul>

            </div>
          </div>
        </div>

        <main className="w-[90%] lg:w-[60%] mx-auto pb-16 ">
          {/* Video Testimonial */}
          <VideoCarousel />

          {/* Insight Section */}
          <div className="py-6 lg:py-12 space-y-6 lg:space-y-12">
            <DescHeader 
              header="What the top 1% sales reps do, that the average sales rep doesn't."
              paragraph="Top closers don’t wing it - they operate with precision."
            />
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-10 lg:gap-8">
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

            <div className="space-y-8">
              <div className="lg:w-[75%] mx-auto text-center text-lg lg:text-xl text-gray-400 space-y-8">
                <p>Top 1% closers don't just close deals. They close them on their terms.</p>
                <p>And that’s why the best sales reps don’t just "survive" like the others. They thrive.</p>
                <p>But the reality? No ones born with that skillset.</p>
                <p>You need to learn it from someone who’s actually done it at the highest level.</p>
              </div>
              <div className="space-y-8">
                <h5 className="text-2xl text-white text-center">That's where we come in</h5>
                <CallCTA className="mx-auto"/>
              </div>
            </div>
          </div>

          {/* Community Section */}
          <CommunityCarousel/>

          {/* Coaches Section */}
          <div id="coach" className="py-12 space-y-8">
            <HoverGlow label="Training Sectors"/>
            <div className="w-full text-white text-center space-y-4">
              <h1 className="text-[26px] leading-tight text-medium lg:text-5xl">We master all timeframes, all setups and every single profitable trading pattern.</h1>
              <p className="lg:w-[50%] mx-auto text-[1.1rem] font-light lg:text-lg">The right strategy is the <strong>difference between burning accounts and building consistent income.</strong></p>
            </div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {CoachContent.map((content, index) => {
                const isLast = index === CoachContent.length - 1;
                const isOdd = CoachContent.length % 2 !== 0;
                const safeHTML = DOMPurify.sanitize(content.para);

                return (
                  <CoachCard key={index} content={content} safeHTML={safeHTML} isLast={isLast} isOdd={isOdd}/>
                );
              })}
            </div>

          </div>

          {/* Book a Call Section */}
          <div id="book" className="py-12 space-y-8">
              <HoverGlow label="Book a call with our team below"/>
              <DescHeader 
                header="You are one decision away from joining the top 1% of sales rep."
                paragraph="Book a call with our team below to become one."
              />
              <CallCTA className="mx-auto"/>
          </div>

          {/* FAQ Section */}
          <div id="book" className="py-12 space-y-8">
              <HoverGlow label="frequently asked questions"/>
              <DescHeader 
                header="Still have some questions? Let's go through them."
              />
              <div className="space-y-4">
                {
                  faqContent.map((content: any, index:number)=>(
                    <DropDownTab key={index} content={content} />
                  ))
                }
              </div>
          </div>

          {/* FootNote Section */}
          <div id="extra" className="py-12 space-y-8">
            <div className="space-y-8 border border-gray-800 bg-black/40 px-32 py-16 rounded-3xl">
              <h1 className="text-white text-5xl text-center px-4">Becoming world-class and mastering sales doesn't just "happen"</h1>
              <p className="text-gray-300 text-center text-lg">If you’re serious about leveling up your closing game, you need the right system, the right training, and the right team behind you. We're here to give you the exact tools and strategies top closers use to dominate.</p>
              <CallCTA className="mx-auto"/>
            </div>
          </div>
        </main>
        <div className="bg-black/70 border border-gray-800 py-12">
          <div className="w-[40%] mx-auto text-gray-300 text-center space-y-8">
            <div className="space-y-4">
              <p>Copyright © 2025 Sales.io. All Rights Reserved.</p>
              <p className="flex flex-col text-center text-sm"><strong>Earnings Disclaimer: </strong>The testimonials and examples on this site are from real students and reflect their experiences. However, these results are not typical, and your results may vary. We do not guarantee any specific income or success. Your level of success depends on factors like your work ethic, background, experience, and dedication. Any income or earnings mentioned are estimates or past results and should not be considered average or guaranteed future outcomes.</p>
              <p className="flex flex-col text-center text-sm"><strong>FTC Disclosure: </strong>Some of the links on this page may be affiliate links. If you choose to purchase through these links, we may earn a small commission — at no extra cost to you. We only recommend tools and services we believe in.</p>
              <p className="flex flex-col text-center text-sm"><strong>Facebook Disclaimer: </strong>This site is not a part of the Facebook™ website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK™ is a trademark of FACEBOOK, Inc.</p>
            </div>
            <div className="text-lg">Terms and Conditions | Privacy Policy | Refund Policy | Cookies Policy</div>
            <a href="/" className="block"><small>Design & Development by </small></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
