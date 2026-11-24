export interface SampleStory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  readTime: string;
  setting: string;
  excerpt: string[];
  reflectionPrompt: string;
}

export interface CruiseProgram {
  code: string;
  title: string;
  format: string;
  summary: string;
}

export interface CollectionItem {
  id: string;
  tag: string;
  name: string;
  subtitle: string;
  details: string[];
  image: string;
  imageAlt: string;
  highlight: string;
}

export const CREDENTIAL_METRICS = [
  {
    value: "30+ Years",
    label: "Human Transformation",
    detail: "Retired Corrections Deputy & licensed MSW guiding real-world change",
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
    value: "Global & At Sea",
    label: "Cruise, Stage & Broadcast",
    detail: "Guided meditation immersions, luxury voyages, keynotes, and network media",
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
    title: "Unplugged Reflection Salon: Coloring, Journaling & Inner Peace",
    format: "75-Min Small-Group Facilitation (No WiFi Needed)",
    summary:
      "A tactile, screen-free group session pairing guided stillness with Carla's travel-ready reflection pages so guests return home renewed.",
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

export const SAMPLE_STORIES: SampleStory[] = [
  {
    id: "queens-position",
    number: "STORY 01",
    title: "The Queen's Position: Strategy Over Emotion",
    subtitle: "From the forthcoming book Your Move: Heal Your Thoughts. Change Your Life.",
    readTime: "3 min sample",
    setting: "Emotional Intelligence & Self-Mastery",
    excerpt: [
      "On a chessboard, the Queen is the single piece capable of moving any distance forward, backward, sideways, or diagonally. Yet her strength means nothing if she moves in panic. One rushed reaction into an unguarded square costs the entire game.",
      "For three decades, I watched brilliant, capable people hand away their power in five seconds of unexamined emotion. Somebody pushed a button, old hurt answered the call, and before a single breath entered their lungs, they made a move they spent years trying to undo.",
      "Self-mastery begins in the quiet three seconds before your hand touches the piece. When you still the mind first, nobody else gets to dictate where you land next. Heal the thought, steady the breath, and choose your square on purpose.",
    ],
    reflectionPrompt:
      "Where in your life right now is an old emotion asking you to rush a move that deserves calm strategy?",
  },
  {
    id: "beyond-the-gate",
    number: "STORY 02",
    title: "What Thirty Years Behind the Gate Taught Me About Freedom",
    subtitle: "Reflections of a Retired Corrections Deputy & Clinical Social Worker",
    readTime: "4 min sample",
    setting: "Accountability & Human Reinvention",
    excerpt: [
      "People often assume a career in corrections is defined by steel doors and concrete walls. What thirty years inside taught me is far simpler: the heaviest prison most human beings ever inhabit is built out of unspoken shame and unchallenged habits.",
      "I met men and women behind locked gates who discovered more honesty, discipline, and spiritual clarity than people walking free on the outside. I also met people in luxury boardrooms who were completely captive to resentment and exhaustion.",
      "Freedom starts the morning you stop rehearsing yesterday's survival story. Survival kept you standing through the storm, and it deserves respect. Yet survival is a shelter, never a destination. Stepping into accountability is how you walk out of your own cage.",
    ],
    reflectionPrompt:
      "Which survival habit once protected you in a hard season, yet quietly limits your peace today?",
  },
  {
    id: "stillness-at-sea",
    number: "STORY 03",
    title: "The Stillness Before the Horizon",
    subtitle: "Guided Meditation & Group Facilitation Notes",
    readTime: "3 min sample",
    setting: "Guided Meditation Practice",
    excerpt: [
      "When I guide a room of fifty people into stillness, the first thing you hear is how loud everybody's shoulders are. High achievers carry invisible armor into every chair they sit in, convinced that letting go for ten minutes means losing their edge.",
      "Watch what happens after four slow breaths. Unclench the jaw. Drop the shoulders away from the ears. Let the exhale last two counts longer than the inhale. Within three minutes, the room shifts from guarded performance to honest presence.",
      "Guided meditation is never about escaping real life. It is the practice laboratory where you reclaim ownership of your nervous system so that when life tests you at noon, your center holds steady.",
    ],
    reflectionPrompt:
      "Take one slow four-count breath right now and let the exhale last six counts. Notice what softens first.",
  },
  {
    id: "carrying-the-torch",
    number: "STORY 04",
    title: "Practice Controlling the One Person You Can Control",
    subtitle: "Carrying Forward the Hardenian Standard at GSHA Quality Services",
    readTime: "4 min sample",
    setting: "Legacy & Performance Mindset",
    excerpt: [
      "When Greg Harden looked across a room at an Olympic swimmer, a championship quarterback, or a community leader, he never started with trophies. He started with the person behind the performance. Can you tell yourself the truth? Can you bet on yourself without apology?",
      "Graduating with distinction in the inaugural Hardenian Gems Academy cohort and stepping into Greg's role at GSHA Quality Services affirmed a truth I had lived for decades: excellence and emotional healing belong in the very same conversation.",
      "You cannot control headlines, weather, critics, or other people's choices. The single person on earth within your authority is staring back from your mirror. Train that person in truth, kindness, and discipline, and every room you enter changes.",
    ],
    reflectionPrompt:
      "If you treated yourself today like someone worthy of championship care, what is the first promise you would keep?",
  },
];

export const COLLECTION_ITEMS: CollectionItem[] = [
  {
    id: "your-move-book",
    tag: "NEW BOOK RELEASE",
    name: "Your Move: Heal Your Thoughts. Change Your Life.",
    subtitle: "Forthcoming Flagship Book (Official Cover Confirmation This Week)",
    details: [
      "Practical emotional intelligence strategies for real-life transformation",
      "Companion to Carla Wilson's acclaimed first book What If I'm Right?",
      "Bulk signing editions available for cruise voyages, universities, and conferences",
    ],
    image: "/images/crop-book-your-move.webp",
    imageAlt: "Your Move book prototype featuring golden Queen chess piece by Carla Wilson MSW",
    highlight: "Pre-Release & Bulk Event Reservations Open",
  },
  {
    id: "your-move-journal",
    tag: "REFLECTION JOURNAL",
    name: "Your Move Guided Journal & Coloring Edition",
    subtitle: "A Strategic Guide to Emotional Mastery Through Reflection",
    details: [
      "Structured daily prompts for clarity, boundaries, and calm decision-making",
      "Mindful geometric and chess-inspired coloring pages for nervous system ease",
      "Designed as the hands-on workbook for group workshops and retreats",
    ],
    image: "/images/crop-journal-heal.webp",
    imageAlt: "Your Move Journal and Heal Your Thoughts reflective edition",
    highlight: "Ideal Workshop & Retreat Companion",
  },
  {
    id: "mastery-pen-set",
    tag: "SIGNATURE INSTRUMENT",
    name: "The Mastery Pen Executive Trio",
    subtitle: "A Tool for Thought. A Statement of Intent.",
    details: [
      "Weighted balance in Matte Black, Deep Cobalt, and Ivory with Gold trim",
      "Engraved affirmations: You Determine Your Destination & Focus. Decide. Move.",
      "Includes direct QR access to a private Carla Wilson Guided Meditation",
    ],
    image: "/images/crop-mastery-pen.webp",
    imageAlt: "The Mastery Pen luxury weighted pen set in black, cobalt, and ivory gold",
    highlight: "Includes QR Guided Meditation Access",
  },
  {
    id: "essentials-travel-kit",
    tag: "VOYAGE READY",
    name: "It's Your Move Essentials Travel Kit",
    subtitle: "A Moment to Breathe. A Space to Reflect.",
    details: [
      "Curated multi-tone marker palette paired with portable reflection cards",
      "Built for ocean crossings, flights, and unplugged sanctuary sessions",
      "Zero WiFi required: ready for luxury cruise staterooms and deck lounges",
    ],
    image: "/images/crop-travel-essentials.webp",
    imageAlt: "It's Your Move Essentials travel kit with markers and reflection prompts",
    highlight: "Perfect for Travel • No WiFi Required",
  },
];

export const BROADCAST_TOPICS = [
  {
    outletType: "Network News & Cable (CNN, MSNBC, National Morning Desks)",
    headline: "Accountability, Justice & Re-Entry: What 30 Years as a Deputy & MSW Reveals",
    angle:
      "Clear, grounded commentary on criminal justice reform, behavioral accountability, trauma recovery, and what truly helps individuals rebuild after crisis.",
  },
  {
    outletType: "Sports, Leadership & High-Performance Features",
    headline: "Strengthening the Person Behind the Performance: Inside the Greg Harden Lineage",
    angle:
      "How the mindset principles that guided Tom Brady and Michael Phelps translate to everyday executives, educators, and communities through GSHA Quality Services.",
  },
  {
    outletType: "Wellness, Burnout & TED-Style Stages",
    headline: "Guided Stillness for High-Stakes Lives: Moving From Survival to Self-Mastery",
    angle:
      "Why seasoned professionals burn out when they rely on grit alone, and how three-minute guided breath and emotional regulation practices restore clarity.",
  },
];
