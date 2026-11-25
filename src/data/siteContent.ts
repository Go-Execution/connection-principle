export interface SampleStory {
  id: string;
  number: string;
  bookTitle: string;
  title: string;
  subtitle: string;
  readTime: string;
  setting: string;
  purchaseUrl?: string;
  purchaseLabel?: string;
  excerpt: string[];
  reflectionPrompt: string;
}

export interface CruiseProgram {
  code: string;
  title: string;
  format: string;
  summary: string;
}

export interface PublishedBook {
  id: string;
  statusTag: string;
  title: string;
  subtitle: string;
  creditLine: string;
  description: string;
  highlights: string[];
  coverImage: string;
  coverAlt: string;
  purchaseUrl: string;
  purchaseCta: string;
  sampleStoryId: string;
  isExternalPurchase: boolean;
}

export const CREDENTIAL_METRICS = [
  {
    value: "30+ Years",
    label: "Corrections & Clinical MSW",
    detail: "Retired Washtenaw County Sheriff Corporal (1991 to 2016) & licensed MSW",
  },
  {
    value: "Distinction",
    label: "Hardenian Gems Academy",
    detail: "Inaugural Cohort graduate certified in Hardenian Mastery",
  },
  {
    value: "GSHA Role",
    label: "Continuing the Legacy",
    detail: "Stepping into the late Greg Harden's personal business role at GSHA Quality Services",
  },
  {
    value: "Times Square",
    label: "Published Author & Media",
    detail: "Author of What If I'm Right?, Co-Author of Serving Productive Time & upcoming NYC Times Square feature",
  },
];

export const CRUISE_PROGRAMS: CruiseProgram[] = [
  {
    code: "SEA DAY 01",
    title: "Sunrise Crystal Stillness: Guided Breath & Nervous System Reset",
    format: "45-Min Deck or Lounge Guided Meditation",
    summary:
      "A restorative morning meditation sequence designed for luxury voyage guests seeking calm, mental clarity, and presence over open water.",
  },
  {
    code: "SEA DAY 02",
    title: "It's Your Move: Strategy Over Emotion in Life's Next Chapter",
    format: "60-Min Enrichment Lecture",
    summary:
      "Drawing on the Queen Chess philosophy and 30 years of behavioral insight, Carla teaches guests how to pause, read the board, and act with intention.",
  },
  {
    code: "SEA DAY 03",
    title: "Beyond Survival: Emotional Intelligence & Self-Mastery",
    format: "60-Min Keynote & Interactive Q&A",
    summary:
      "Practical tools for self-awareness, healthy boundaries, and resilient communication rooted in real stories of reinvention and personal truth.",
  },
  {
    code: "WORKSHOP",
    title: "Unplugged Reflection Salon: Stillness, Journaling & Inner Peace",
    format: "75-Min Small-Group Facilitation (No WiFi Needed)",
    summary:
      "A tactile, screen-free group session pairing guided stillness with reflective writing so guests return home renewed.",
  },
];

export const LEGACY_CHAMPIONS = [
  {
    name: "Greg Harden",
    role: "Founder, Hardenian Gems Academy",
    note: "Legendary University of Michigan counselor & performance strategist",
  },
  {
    name: "Tom Brady",
    role: "7x Super Bowl Champion",
    note: "Mentored by Greg Harden from Ann Arbor to NFL history",
  },
  {
    name: "Michael Phelps",
    role: "23x Olympic Gold Medalist",
    note: "Most decorated Olympian of all time, guided in personal mastery",
  },
  {
    name: "Desmond Howard",
    role: "Heisman Trophy Winner",
    note: "Super Bowl XXXI MVP & ESPN College GameDay analyst",
  },
  {
    name: "Warde Manuel",
    role: "U of M Athletic Director",
    note: "Championing discipline, truth, growth, and athletic leadership",
  },
];

export const SELF_MASTERY_PILLARS = [
  {
    index: "01",
    name: "Self-Awareness",
    line: "Recognizing the thought patterns shaping every decision before you make a move.",
  },
  {
    index: "02",
    name: "Self-Regulation",
    line: "Replacing reactive impulse with calm breath, steady posture, and deliberate timing.",
  },
  {
    index: "03",
    name: "Empathy",
    line: "Listening beneath surface conflict to build respectful, durable human connection.",
  },
  {
    index: "04",
    name: "Relationship Management",
    line: "Holding clear boundaries where protecting your peace creates genuine freedom.",
  },
  {
    index: "05",
    name: "Purpose",
    line: "Turning lived adversity into disciplined service, clarity, and daily direction.",
  },
];

export const PUBLISHED_BOOKS: PublishedBook[] = [
  {
    id: "what-if-im-right",
    statusTag: "AVAILABLE ON AMAZON",
    title: "What If I'm Right?",
    subtitle: "A Book That Celebrates Spiritual Intuition",
    creditLine: "By Carla Wilson, MSW",
    description:
      "Drawing on her career inside correctional facilities and clinical social work, Carla explores spiritual intuition, faith, recovery, and reclaiming personal power from toxic patterns.",
    highlights: [
      "Featured inside Carla's official Washtenaw County Sheriff retirement shadowbox",
      "Practical guidance for individuals, families, and criminal justice professionals",
      "Paperback and digital editions available right now on Amazon",
    ],
    coverImage: "/images/cover-what-if-im-right.webp",
    coverAlt: "Book cover of What If I'm Right?: A Book That Celebrates Spiritual Intuition by Carla Wilson, MSW",
    purchaseUrl: "https://a.co/d/0btsX1XG",
    purchaseCta: "Purchase on Amazon",
    sampleStoryId: "spiritual-intuition",
    isExternalPurchase: true,
  },
  {
    id: "serving-productive-time",
    statusTag: "CO-AUTHOR & EDITOR",
    title: "Serving Productive Time",
    subtitle: "Stories, Poems, and Tips to Inspire Positive Change",
    creditLine: "By Tom Lagana • Co-Author & Editor: Carla Bragg Wilson",
    description:
      "Credited under her full name Carla Bragg Wilson, Carla served as co-author and editor of this widely respected correctional transformation volume, sharing how guided meditation and creative visualization de-escalate conflict and rebuild lives.",
    highlights: [
      "Documents Carla's pioneering guided meditation work at Washtenaw County Jail",
      "Used across re-entry programs, correctional libraries, and counseling circles",
      "Available via Amazon and national book retailers",
    ],
    coverImage: "/images/cover-serving-productive-time.webp",
    coverAlt: "Book cover of Serving Productive Time co-authored and edited by Carla Bragg Wilson with Tom Lagana",
    purchaseUrl: "https://www.amazon.com/dp/0974998207",
    purchaseCta: "View on Amazon",
    sampleStoryId: "productive-time-meditation",
    isExternalPurchase: true,
  },
  {
    id: "your-move-forthcoming",
    statusTag: "MANUSCRIPT IN PRODUCTION • NYC TIMES SQUARE FEATURE",
    title: "Your Move: Heal Your Thoughts. Change Your Life.",
    subtitle: "Forthcoming Release (Manuscript Delivered to Publisher)",
    creditLine: "By Carla Wilson, MSW",
    description:
      "Carla's newest manuscript has just entered production with her publishing and book marketing team and is slated for an upcoming New York Times Square billboard feature.",
    highlights: [
      "Manuscript freshly delivered to production and marketing team",
      "Scheduled for a New York Times Square billboard showcase (footage coming soon)",
      "Read early chapter samples below or inquire for bulk event and cruise orders",
    ],
    coverImage: "/images/crop-book-your-move.webp",
    coverAlt: "Prototype cover of Your Move: Heal Your Thoughts. Change Your Life. featuring the golden Queen chess piece",
    purchaseUrl: "#booking",
    purchaseCta: "Reserve Pre-Order & Event Copies",
    sampleStoryId: "queens-position",
    isExternalPurchase: false,
  },
];

export const SAMPLE_STORIES: SampleStory[] = [
  {
    id: "spiritual-intuition",
    number: "CHAPTER SAMPLE 01",
    bookTitle: "What If I'm Right?: A Book That Celebrates Spiritual Intuition",
    title: "Listening to the Quiet Voice Before the Storm",
    subtitle: "From What If I'm Right?: A Book That Celebrates Spiritual Intuition (By Carla Wilson, MSW)",
    readTime: "3 min sample",
    setting: "Spiritual Intuition & Personal Power",
    purchaseUrl: "https://a.co/d/0btsX1XG",
    purchaseLabel: "Buy What If I'm Right? on Amazon",
    excerpt: [
      "Every one of us has experienced that quiet inner nudge that arrives before logic finishes its argument. You walk into a room, a relationship, or a crossroads, and something deep in your spirit whispers the truth. Too often, we talk ourselves out of what we already know.",
      "Working inside corrections and clinical recovery showed me what happens when good people silence their spiritual intuition to keep the peace or fit someone else's script. When you override your inner compass, you hand the steering wheel of your life to confusion.",
      "What if that still voice inside you is right? Honoring your spiritual intuition is not arrogance; it is alignment. The moment you trust the wisdom placed inside you, the chains of codependency and self-doubt begin to open.",
    ],
    reflectionPrompt:
      "Where in your life has your quiet inner intuition been telling you a truth that you are finally ready to trust?",
  },
  {
    id: "productive-time-meditation",
    number: "CHAPTER SAMPLE 02",
    bookTitle: "Serving Productive Time (Co-Author & Editor: Carla Bragg Wilson)",
    title: "Guided Visualization Behind Locked Doors",
    subtitle: "From Serving Productive Time (Tom Lagana • Co-Authored & Edited by Carla Bragg Wilson)",
    readTime: "4 min sample",
    setting: "Guided Meditation & Correctional Transformation",
    purchaseUrl: "https://www.amazon.com/dp/0974998207",
    purchaseLabel: "View Serving Productive Time on Amazon",
    excerpt: [
      "During my twenty-five years as a Corporal with the Washtenaw County Sheriff's Office, people asked how guided meditation could possibly belong inside a county jail. Yet nowhere on earth is the human nervous system under louder pressure than behind steel doors.",
      "When I guided incarcerated men and women to close their eyes, breathe slowly, and visualize a calm sanctuary where they were safe, respected, and whole, the entire temperature of the room changed. Anger lost its grip. Shoulders dropped. Clarity returned.",
      "You can serve time, or you can make time serve your growth. Whether a person is behind concrete walls or trapped in the invisible walls of daily stress, guided stillness proves that your mind remains a sanctuary you can enter at will.",
    ],
    reflectionPrompt:
      "Close your eyes for three slow breaths and picture a place where your spirit feels completely unhurried and safe.",
  },
  {
    id: "queens-position",
    number: "CHAPTER SAMPLE 03",
    bookTitle: "Forthcoming Manuscript: Your Move (In Production)",
    title: "The Queen's Position: Strategy Over Emotion",
    subtitle: "Early Manuscript Preview • Slated for New York Times Square Feature",
    readTime: "3 min sample",
    setting: "Emotional Intelligence & Self-Mastery",
    purchaseUrl: "#booking",
    purchaseLabel: "Request Pre-Order Notification",
    excerpt: [
      "On a chessboard, the Queen is the single piece capable of moving any distance forward, backward, sideways, or diagonally. Yet her strength means nothing if she moves in panic. One rushed reaction into an unguarded square costs the entire game.",
      "She remembered who she was, and the game changed. For three decades, I watched brilliant, capable people hand away their power in five seconds of unexamined emotion. Somebody pushed a button, old hurt answered the call, and before a single breath entered their lungs, they made a move they spent years trying to undo.",
      "Self-mastery begins in the quiet three seconds before your hand touches the piece. When you still the mind first, nobody else gets to dictate where you land next. Heal the thought, steady the breath, and choose your square on purpose.",
    ],
    reflectionPrompt:
      "Where in your life right now is an old emotion asking you to rush a move that deserves calm strategy?",
  },
  {
    id: "carrying-the-torch",
    number: "CHAPTER SAMPLE 04",
    bookTitle: "Forthcoming Manuscript: Beyond Survival & Hardenian Mastery",
    title: "Practice Controlling the One Person You Can Control",
    subtitle: "Carrying Forward the Hardenian Standard at GSHA Quality Services",
    readTime: "4 min sample",
    setting: "Legacy & Performance Mindset",
    purchaseUrl: "#booking",
    purchaseLabel: "Inquire for Speaking & Group Workshops",
    excerpt: [
      "When Greg Harden looked across a room at an Olympic swimmer, a championship quarterback, or a community leader, he never started with trophies. He started with the person behind the performance. Can you tell yourself the truth? Can you bet on yourself without apology?",
      "Graduating with distinction in the inaugural Hardenian Gems Academy cohort and stepping into Greg's role at GSHA Quality Services affirmed a truth I had lived for decades: excellence and emotional healing belong in the very same conversation.",
      "You cannot control headlines, weather, critics, or other people's choices. The single person on earth within your authority is staring back from your mirror. Train that person in truth, kindness, and discipline, and every room you enter changes.",
    ],
    reflectionPrompt:
      "If you treated yourself today like someone worthy of championship care, what is the first promise you would keep?",
  },
];

export const BROADCAST_TOPICS = [
  {
    outletType: "Network News & Cable (CNN, MSNBC, National Morning Desks)",
    headline: "Accountability, Justice & Re-Entry: What 25+ Years at Washtenaw County Sheriff & MSW Reveals",
    angle:
      "Clear, grounded commentary from a retired Sheriff Corporal and MSW on justice reform, behavioral accountability, trauma recovery, and what truly helps individuals rebuild.",
  },
  {
    outletType: "Sports, Leadership & High-Performance Features",
    headline: "Strengthening the Person Behind the Performance: Inside the Greg Harden Lineage",
    angle:
      "How the mindset principles that guided Tom Brady and Michael Phelps translate to everyday executives, educators, and communities through GSHA Quality Services.",
  },
  {
    outletType: "Wellness, Publishing & NYC Times Square Spotlight",
    headline: "Guided Stillness & Spiritual Intuition: Moving From Survival to Self-Mastery",
    angle:
      "Why seasoned professionals burn out when they rely on grit alone, and how guided breath, spiritual intuition, and emotional regulation restore clarity.",
  },
];
