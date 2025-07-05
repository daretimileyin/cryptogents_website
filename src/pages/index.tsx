import { motion } from "framer-motion";
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


const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const Index = () => {
  return (
    <div className="relative bg-black overflow-x-hidden">
      {/* 🔵 STATIC BACKGROUND (Blobs + Noise) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Blobs */}
        <div className="flex items-center justify-center w-full h-full">
          <motion.div 
            className="lg:w-96 aspect-square blur-[120px] opacity-70 rounded-full animate-blob1 bg-linear-to-br from-gray-300 to-gray-600"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <motion.div 
            className="lg:w-96 aspect-square blur-[120px] opacity-70 rounded-full animate-blob2 bg-linear-to-br from-slate-500 to-gray-800"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
          />
          <motion.div 
            className="lg:w-96 aspect-square blur-[120px] opacity-70 rounded-full animate-blob3 bg-linear-to-br from-slate-400 to-slate-700"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
          />
          <motion.div 
            className="lg:w-96 aspect-square blur-[120px] opacity-70 rounded-full animate-blob4 bg-linear-to-br from-gray-200 to-slate-400"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
          />
          <motion.div 
            className="lg:w-96 aspect-square blur-[120px] opacity-70 rounded-full animate-blob5 bg-linear-to-br from-gray-800 to-blue-400"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
          />
          <motion.div 
            className="lg:w-96 aspect-square blur-[120px] opacity-70 rounded-full animate-blob6 bg-linear-to-br from-gray-500 to-slate-500"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 2, delay: 1, ease: "easeOut" }}
          />
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
        <motion.div 
          className="fixed w-full top-0 z-50 backdrop-blur-md bg-linear-to-b from-black/70 to-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="px-4 lg:w-[70%] mx-auto flex flex-row justify-between items-center py-4">
            <motion.img 
              className="w-16" 
              src={logo} 
              alt="Logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.div 
              className="hidden lg:flex flex-row gap-12 text-white text-lg font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="#crypto_training" className="hover:opacity-50 hover:text-blue-500 duration-300 ease-in-out">Crypto Training</a>
              <a href="#community" className="hover:opacity-50 hover:text-blue-500 duration-300 ease-in-out">The Community</a>
              <a href="#referral" className="hover:opacity-50 hover:text-blue-500 duration-300 ease-in-out">Trading Referrals</a>
              <a href="gentlemen" className="hover:opacity-50 hover:text-blue-500 duration-300 ease-in-out">The Gentlemen</a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <CallCTA/>
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Section */}
        <div id="crypto_training" className="hero w-[90%] lg:w-[60%] mx-auto pt-32 lg:pt-32 lg:pb-16">
          <div className="space-y-8">
            {/* Avatars + Stars */}
            <motion.div 
              className="w-fit mx-auto flex gap-6 lg:gap-3"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* //circle div */}
              <motion.ul 
                className="relative w-28"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {[
                  { src: avatar, border: "border-yellow-500", left: "left-0" },
                  { src: avatar2, border: "border-green-500", left: "left-6" },
                  { src: avatar3, border: "border-green-500", left: "left-12" },
                  { src: avatar, border: "border-green-500", left: "left-16" },
                  { src: avatar4, border: "border-yellow-500", left: "left-20" }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className={`absolute ${item.left} w-9 aspect-square rounded-full overflow-hidden border-2 ${item.border}`}
                    variants={staggerItem}
                  >
                    <img className="size-full object-cover" src={item.src} />
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <ul className="flex gap-1 text-white">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                      >
                        <Star size={17} />
                      </motion.li>
                    ))}
                </ul>
                <h5 className="font-bold text-sm line-clamp-1 lg:text-lg text-white">720+ Success Stories and Counting</h5>
              </motion.div>
            </motion.div>

            {/* Headline & CTA */}
            <motion.div 
              className="lg:w-[80%] mx-auto space-y-6 text-center text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.h1 
                className="text-3xl lg:text-[3.3rem] leading-none font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                How to Build World-Class Crypto Trading Skills
              </motion.h1>
              <motion.p 
                className="text-lg lg:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                Even if you haven't made a profitable trade yet.
              </motion.p>
              <motion.a
                href="/"
                className="inline-flex w-full lg:w-fit items-center justify-center px-12 py-2 lg:py-3 rounded-md gap-2 bg-white font-semibold text-lg text-black"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <p>Apply Now</p>
                <ArrowUpRight />
              </motion.a>
            </motion.div>

            {/* YouTube Video */}
            <motion.div 
              className="w-full aspect-video rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
                <iframe
                  loading="lazy"
                  title="Youtube Video"
                  allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  src="https://www.youtube.com/embed/_G7fsQy6L8I?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=0&autohide=1"
                  className="w-full aspect-video"
                ></iframe>
            </motion.div>

            {/* Video Extra */}
            <motion.div 
              className="text-white space-y-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.h3 
                className="text-[1.4rem] font-medium lg:text-3xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                Here's what you'll discover inside this training...
              </motion.h3>
              
              <motion.ul 
                className="relative flex flex-col lg:flex-row gap-4 lg:gap-12 items-center justify-between"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {/* Radial Gradient Background */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,at_center,#22c55e_60%,white_100%)]"></div>

                {/* List Items */}
                {[1, 2, 3].map((_, index) => (
                  <motion.li 
                    key={index}
                    className="flex gap-4 items-center p-4 border border-gray-200 rounded-2xl backdrop-blur-xs"
                    variants={staggerItem}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check className="text-green-600 w-16" />
                    <p className="text-[1.13rem] lg:text-lg leading-tight font-medium">
                      The #1 reason why sales reps fail to close consistently and how you can fix it in days.
                    </p>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>

        <main className="w-[90%] lg:w-[60%] mx-auto pb-16 ">
          {/* Video Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <VideoCarousel />
          </motion.div>

          {/* Insight Section */}
          <motion.div 
            className="py-6 lg:py-12 space-y-6 lg:space-y-12"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <DescHeader 
                header="What the top 1% sales reps do, that the average sales rep doesn't."
                paragraph="Top closers don't wing it - they operate with precision."
              />
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-10 lg:gap-8">
              <motion.div 
                className="text-gray-300 space-y-6"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <h3 className="text-2xl">The Average Sales Rep</h3>
                </div>
                <motion.ul 
                  className="space-y-2 border p-6 rounded-xl"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {[1, 2, 3, 4].map((_, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center gap-2"
                      variants={staggerItem}
                    >
                      <X className="text-gray-600" size={28}/>
                      <p className="text-lg">
                        {index === 0 && "Uses basic, overused wordtracks and scripts from their favorite sales guru."}
                        {index === 1 && "Follows a script from 2023, triggering instant sales resistance from prospects."}
                        {index === 2 && "Jumps into each sales call hoping for the best, instead of using a proven strategy."}
                        {index === 3 && "Stays on a low-quality offer that doesn't care about them or their teammates."}
                      </p>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div 
                className="text-gray-300 space-y-6"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold">A Sales.io Mentee</h3>
                </div>
                <motion.ul 
                  className="space-y-2 border p-6 rounded-xl"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {[1, 2, 3, 4].map((_, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center gap-2"
                      variants={staggerItem}
                    >
                      <Check className="text-green-600" size={28}/>
                      <p className="text-lg">
                        {index === 0 && "Uses basic, overused wordtracks and scripts from their favorite sales guru."}
                        {index === 1 && "Follows a script from 2023, triggering instant sales resistance from prospects."}
                        {index === 2 && "Jumps into each sales call hoping for the best, instead of using a proven strategy."}
                        {index === 3 && "Stays on a low-quality offer that doesn't care about them or their teammates."}
                      </p>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="lg:w-[75%] mx-auto text-center text-lg lg:text-xl text-gray-400 space-y-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.p variants={staggerItem}>Top 1% closers don't just close deals. They close them on their terms.</motion.p>
                <motion.p variants={staggerItem}>And that's why the best sales reps don't just "survive" like the others. They thrive.</motion.p>
                <motion.p variants={staggerItem}>But the reality? No ones born with that skillset.</motion.p>
                <motion.p variants={staggerItem}>You need to learn it from someone who's actually done it at the highest level.</motion.p>
              </motion.div>
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h5 className="text-2xl text-white text-center">That's where we come in</h5>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CallCTA className="mx-auto"/>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Community Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <CommunityCarousel/>
          </motion.div>

          {/* Coaches Section */}
          <motion.div 
            id="coach" 
            className="py-12 space-y-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <HoverGlow label="Training Sectors"/>
            </motion.div>
            
            <motion.div 
              className="w-full text-white text-center space-y-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-[26px] leading-tight text-medium lg:text-5xl">We master all timeframes, all setups and every single profitable trading pattern.</h1>
              <p className="lg:w-[50%] mx-auto text-[1.1rem] font-light lg:text-lg">The right strategy is the <strong>difference between burning accounts and building consistent income.</strong></p>
            </motion.div>
            
           <motion.div 
             className="grid grid-cols-1 lg:grid-cols-2 gap-8"
             variants={staggerContainer}
             initial="initial"
             whileInView="animate"
             viewport={{ once: true }}
           >
              {CoachContent.map((content, index) => {
                const isLast = index === CoachContent.length - 1;
                const isOdd = CoachContent.length % 2 !== 0;
                const safeHTML = DOMPurify.sanitize(content.para);

                return (
                  <motion.div key={index} variants={staggerItem}>
                    <CoachCard content={content} safeHTML={safeHTML} isLast={isLast} isOdd={isOdd}/>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Book a Call Section */}
          <motion.div 
            id="book" 
            className="py-12 space-y-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <HoverGlow label="Book a call with our team below"/>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <DescHeader 
                  header="You are one decision away from joining the top 1% of sales rep."
                  paragraph="Book a call with our team below to become one."
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CallCTA className="mx-auto"/>
              </motion.div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div 
            id="faq" 
            className="py-12 space-y-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <HoverGlow label="frequently asked questions"/>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <DescHeader 
                  header="Still have some questions? Let's go through them."
                />
              </motion.div>
              
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {
                  faqContent.map((content: any, index:number)=>(
                    <motion.div key={index} variants={staggerItem}>
                      <DropDownTab content={content} />
                    </motion.div>
                  ))
                }
              </motion.div>
          </motion.div>

          {/* FootNote Section */}
          <motion.div 
            id="extra" 
            className="py-12 space-y-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="space-y-8 border border-gray-800 bg-black/40 px-4 lg:px-32 py-16 rounded-3xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h1 
                className="text-white  text-3xl font-medium lg:text-5xl text-center lg:px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Becoming world-class and mastering sales doesn't just "happen"
              </motion.h1>
              
              <motion.p 
                className="text-gray-300 text-center text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                If you're serious about leveling up your closing game, you need the right system, the right training, and the right team behind you. We're here to give you the exact tools and strategies top closers use to dominate.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CallCTA className="mx-auto"/>
              </motion.div>
            </motion.div>
          </motion.div>
        </main>
        
        <motion.div 
          className="bg-black/70 border border-gray-800 py-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="w-[90%] lg:w-[40%] mx-auto text-gray-300 text-center space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="space-y-4"
              variants={staggerContainer}
            >
              <motion.p variants={staggerItem}>Copyright © 2025 Sales.io. All Rights Reserved.</motion.p>
              <motion.p 
                className="flex flex-col text-center text-sm"
                variants={staggerItem}
              >
                <strong>Earnings Disclaimer: </strong>The testimonials and examples on this site are from real students and reflect their experiences. However, these results are not typical, and your results may vary. We do not guarantee any specific income or success. Your level of success depends on factors like your work ethic, background, experience, and dedication. Any income or earnings mentioned are estimates or past results and should not be considered average or guaranteed future outcomes.
              </motion.p>
              <motion.p 
                className="flex flex-col text-center text-sm"
                variants={staggerItem}
              >
                <strong>FTC Disclosure: </strong>Some of the links on this page may be affiliate links. If you choose to purchase through these links, we may earn a small commission — at no extra cost to you. We only recommend tools and services we believe in.
              </motion.p>
              <motion.p 
                className="flex flex-col text-center text-sm"
                variants={staggerItem}
              >
                <strong>Facebook Disclaimer: </strong>This site is not a part of the Facebook™ website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK™ is a trademark of FACEBOOK, Inc.
              </motion.p>
            </motion.div>
            <motion.div 
              className="text-lg"
              variants={staggerItem}
            >
              Terms and Conditions | Privacy Policy | Refund Policy | Cookies Policy
            </motion.div>
            <motion.a 
              href="/" 
              className="block"
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <small>Design & Development by </small>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;