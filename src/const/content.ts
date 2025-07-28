import communityLogo1 from "../assets/community1.png"
import communityLogo2 from "../assets/community2.png";
import communityLogo3 from "../assets/community3.png";
import communityLogo4 from "../assets/community4.png";
import communityLogo5 from "../assets/community5.png";
import MarkIMG from "../assets/Mark.jpg";
import HodgeIMG from "../assets/Hodge.jpg";
import AnthonyIMG from "../assets/Anthony.jpg"
import MikeIMG from "../assets/Mike.jpg"

// testing
export const videoContent = [
    {
        id: 1,
        quote: "10k months. 50% closing rate. It feels like I have GTA cheat codes for closing",
        name: "Max Linley",
        video_url : "https://framerusercontent.com/assets/NQtyJZCAhD2HN6601YkQoB0PhS8.mp4",
        poster_url: "https://framerusercontent.com/images/hss4TPscTRvhBpHWUmARBVlbQ.png"
    },
    {
        id: 2,
        quote: "10k months. 50% closing rate. It feels like I have GTA cheat codes for closing",
        name: "Max Linley",
        video_url : "https://framerusercontent.com/assets/NQtyJZCAhD2HN6601YkQoB0PhS8.mp4",
        poster_url: "https://framerusercontent.com/images/hss4TPscTRvhBpHWUmARBVlbQ.png"
    },
    {
        id: 3,
        quote: "10k months. 50% closing rate. It feels like I have GTA cheat codes for closing",
        name: "Max Linley",
        video_url : "https://framerusercontent.com/assets/NQtyJZCAhD2HN6601YkQoB0PhS8.mp4",
        poster_url: "https://framerusercontent.com/images/hss4TPscTRvhBpHWUmARBVlbQ.png"
    },
    {
        id: 4,
        quote: "10k months. 50% closing rate. It feels like I have GTA cheat codes for closing",
        name: "Max Linley",
        video_url : "https://framerusercontent.com/assets/NQtyJZCAhD2HN6601YkQoB0PhS8.mp4",
        poster_url: "https://framerusercontent.com/images/hss4TPscTRvhBpHWUmARBVlbQ.png"
    },
]

export const TopTrainingContent = [
  {
    id: 1,
    srcSet: `https://framerusercontent.com/images/k3xNuNLbHEgORooIxbn3RReUI.png?scale-down-to=512 512w,${communityLogo1} 1024w`,
    src: communityLogo1,
    tag: "Market Mastery & Psychology",
    header: "Forge Market Avatars ",
    para: "We forge market avatars who bend the market rather than get bent by it. Develop the mental fortitude and strategic thinking to thrive in any condition.",
  },
  {
    id: 2,
    srcSet: `https://framerusercontent.com/images/BUdifDpcysVdyaHmuZdTcx75RP0.png?scale-down-to=512 512w,${communityLogo2} 1024w`,
    src: communityLogo2,
    tag: "Complete Trader Development ",
    header: "Master Trading Intangibles",
    para: "Success goes beyond technical analysis. We provide the intangible skills that separate profitable traders—psychological edge, risk management, and winning mindset.",
  },
  {
    id: 3,
    srcSet: `https://framerusercontent.com/images/k3xNuNLbHEgORooIxbn3RReUI.png?scale-down-to=512 512w,${communityLogo3} 1024w`,
    src: communityLogo3,
    tag: "Adaptive Systems Vault",
    header: "Scalable Trading Systems",
    para: "Our curated systems adapt to any market condition. Whether trending, ranging, or volatile, our methods evolve to keep you profitable across all cycles.",
  },
  {
    id: 4,
    srcSet: `https://framerusercontent.com/images/LnphBHnZ87N9VDL2G73es7yRNg.png?scale-down-to=512 512w,${communityLogo4} 1024w`,
    src: communityLogo4,
    tag: "Elite Trader Access",
    header: "Insider Trading Wisdom",
    para: "Direct access to seasoned traders sharing insights nobody talks about—their real concerns, beliefs, and approaches that only market veterans provide.",
  },
  {
    id: 5,
    srcSet:
      `https://framerusercontent.com/images/k3xNuNLbHEgORooIxbn3RReUI.png?scale-down-to=512 512w,${communityLogo5} 1024w`,
    src: communityLogo5,
    tag: "Mentorship & Support ",
    header: "Learning by Osmosis",
    para: "Hands-on mentorship with profitable traders. Absorb winning systems, mindset, and character traits, plus analytical support including signals and guidance.",
  },
];

export const CoachContent = [
  {
    id: 1,
    srcSet: `${MikeIMG} 512w, ${MikeIMG} 1024w, ${MikeIMG} 2048w, ${MikeIMG} 3088w`,
    src: MikeIMG,
    keywords: [
      "Institutional Approach",
      "Supply/Demand",
      "Price Action Master",
      "Deviations/Traps",
      "Contrarian Trading",
      "Veteran",
    ],
    coach: "Mike",
    para: "Mike is a 6-year futures trader specializing in price action and institutional-level analysis. He focuses on support/resistance, demand/supply zones, and Fibonacci levels while targeting liquidity traps where retail traders get caught. His edge comes from thinking like the institutions—trading against the crowd when they're most vulnerable.",
  },
  {
    id: 2,
    srcSet: `${AnthonyIMG} 512w, ${AnthonyIMG} 1024w, ${AnthonyIMG} 2048w, ${AnthonyIMG} 4096w, ${AnthonyIMG} 6000w`,
    src: AnthonyIMG,
    keywords: [
      "Smart Money Concepts",
      "Macro Mastery",
      "Elliott Waves",
      "Liquidity Trading",
      "Momentum Trading",
      "Adaptive Strategies",
      "Rising Star",
    ],
    coach: "Anthony",
    para: "Anthony is a 21-year-old trader who entered the markets in 2021 and has maintained profitability for over 2 years. Having studied under seven different mentors, he's developed a unique approach that combines the best elements from each.<br /> His expertise spans the full spectrum of market analysis—from supply/demand zones,retail patterns,and fibonnaci sequences to advanced smart money concepts and liquidity strategies and elliott wave theories.This comprehensive skillset allows him to develop effective trading systems across all timeframes, from day trading to long-term investing, with a particular focus on cryptocurrency markets.",
  },
  {
    id: 3,
    srcSet: `${HodgeIMG} 512w, ${HodgeIMG} 1000w`,
    src: HodgeIMG,
    keywords: [
      "Supply/Demand Expert",
      "Price Action Master",
      "Proven Mentor",
      "Adaptive Entries",
      "Agile Mindset",
      "Veteran",
    ],
    coach: "Hodge",
    para: "Hodge brings 6-7 years of price action trading expertise, specializing in supply and demand strategies combined with proven indicators. He trades both spot and futures markets with exceptional precision.<br /> Starting as a paying member of a trading group, Hodge quickly achieved profitability and began sharing high-success setups. His consistent performance earned him a promotion to the admin team, where he now mentors traders, transforming consistent losers into steady winners.<br /> His proven track record of guiding struggling traders to profitability demonstrates his ability to teach both technical skills and the winning mindset required for market success.",
  },
  {
    id: 4,
    srcSet: `${MarkIMG} 512w, ${MarkIMG} 1024w, ${MarkIMG} 2048w, ${MarkIMG} 2444w`,
    src: MarkIMG,
    keywords: [
      "Smart Money Concepts",
      "Momentum Trading",
      "Range Trading",
      "Sniper Entries",
      "Liquidity hunter",
      "Proven Mentor",
      "Master",
    ],
    coach: "Mark",
    para: "Mark is a seasoned crypto day and swing trader with over 5 years of experience specializing in momentum and liquidity-based strategies. He excels at precise entries and exits across volatile market conditions through disciplined, data-driven analysis.<br />Starting with just $1,000, he has consistently grown his portfolio to six figures using structured risk management and emotional discipline. His expertise in liquidity flow and price action enables him to identify high-probability setups in both trending and consolidating markets.<br /> Beyond personal success, he has mentored countless traders to profitability, teaching the combination of technical precision and winning mindset required for consistent results in the dynamic crypto ecosystem.",
  },
];

export const faqContent = [
    {
        id: 1,
        question: "Why make this community free? What's the catch?",
        answer: "We've partnered with BloFin to keep this community free while giving you access to the same professional platform we use. It's a win-win: you get quality signals, we build a community of serious traders. Think of it like a gym - the equipment is free, but you still need to show up and do the work.",
    },
    {
        id: 2,
        question: "Is this financial advice?",
        answer: 'Absolutely not. We\'re just a bunch of degenerates sharing what works for us. If you need financial advice, call your accountant, not a Discord channel full of people who think "risk management" means not eating ramen for every meal.',
    },
    {
        id: 3,
        question: "What do you guarantee?",
        answer: "We guarantee you'll see exactly how we trade, learn our setups, and get access to real-time analysis. What we don't guarantee is that you'll magically become profitable by osmosis. Results require effort, discipline, and probably more screen time than your chiropractor would recommend.",
    },
    {
        id: 4,
        question: "Why should I join you guys?",
        answer: " Because we're not selling dreams or Lambos. We're sharing real strategies that work in real markets with real money. If you want motivational quotes and get-rich-quick schemes, YouTube is free. If you want to learn from traders who've actually made it work, you're in the right place.",
    }
]