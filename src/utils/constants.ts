import coachImage from "../images/hero.jpeg";

export const SITE_NAME = "Extreme Fitness Center";
export const SITE_TAGLINE = "Premium Coaching. Measurable Results.";

export const CONTACT = {
  phone: "071 537 7857",
  phoneLink: "tel:0715377857",
  whatsappLink: "https://wa.me/94715377857",
  addressLine1: "Welcome Tyre House, No 257, 3rd Floor",
  addressLine2: "New Kandy - Colombo Rd, Mawanella 71500",
};

export const BOOKING_PACKAGES = [
  { name: "Monthly", registrationFee: "LKR 3,500", amount: "LKR 6,500" },
  { name: "3 Month", registrationFee: "Free", amount: "LKR 16,000" },
  { name: "6 Month", registrationFee: "Free", amount: "LKR 32,000" },
  { name: "Annual", registrationFee: "Free", amount: "LKR 52,000" },
  { name: "School", registrationFee: "LKR 3,500", amount: "LKR 5,500" },
  {
    name: "Couple package",
    registrationFee: "LKR 3,500",
    amount: "LKR 12,000",
  },
  { name: "Day payment", registrationFee: "-", amount: "LKR 1,000" },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Coach", href: "#trainers" },
  { label: "Training Options", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const STATS = [
  { value: "7", label: "Training Services" },
  { value: "All Ages", label: "Youth Classes" },
  { value: "1:1", label: "Private Lessons" },
  { value: "Personal", label: "Nutrition Support" },
];

export const SERVICES = [
  {
    icon: "User",
    title: "Private Lessons",
    description:
      "One-on-one sessions tailored to your goals and current fitness level.",
    features: ["Personalized coaching", "Flexible scheduling", "Goal tracking"],
  },
  {
    icon: "Apple",
    title: "Nutrition Consulting",
    description:
      "Practical nutrition guidance to support your training and recovery.",
    features: ["Meal planning tips", "Healthy habits", "Sustainable routines"],
  },
  {
    icon: "Users",
    title: "Youth Classes",
    description: "Safe, energetic classes for young athletes and beginners.",
    features: [
      "Age-appropriate workouts",
      "Confidence building",
      "Team energy",
    ],
  },
  {
    icon: "Trophy",
    title: "Body Building",
    description:
      "Focused strength and muscle-building programs for serious goals.",
    features: [
      "Hypertrophy training",
      "Strength progression",
      "Technique coaching",
    ],
  },
  {
    icon: "Activity",
    title: "Fitness Training",
    description:
      "Full-body conditioning to improve stamina, mobility, and overall fitness.",
    features: ["Cardio conditioning", "Mobility work", "Balanced routines"],
  },
  {
    icon: "Scale",
    title: "Weight Training",
    description: "Progressive resistance training to build strength safely.",
    features: [
      "Beginner to advanced",
      "Safe lifting cues",
      "Progressive overload",
    ],
  },
];

export const MEMBERSHIPS = [
  {
    name: "Private Lessons",
    price: "Call",
    period: "for rates",
    description: "One-on-one coaching tailored to you.",
    features: ["Personalized sessions", "Flexible scheduling", "Goal tracking"],
    cta: "Book a Session",
    highlighted: false,
  },
  {
    name: "Personal Training",
    price: "Call",
    period: "for rates",
    description: "Ongoing guidance with a structured plan.",
    features: ["Custom plan", "Form coaching", "Progress check-ins"],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Youth Classes",
    price: "Call",
    period: "for rates",
    description: "Safe, fun training for young athletes.",
    features: [
      "Age-appropriate workouts",
      "Confidence building",
      "Team motivation",
    ],
    cta: "View Schedule",
    highlighted: false,
  },
];

export const TESTIMONIALS = [
  {
    name: "Gym Member",
    role: "Personal Training",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    content:
      "Friendly coaches and clear guidance. The personal training sessions keep me motivated and consistent.",
    rating: 5,
  },
  {
    name: "Youth Parent",
    role: "Youth Classes",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    content:
      "My child enjoys the youth classes and feels more confident every week.",
    rating: 5,
  },
  {
    name: "Private Client",
    role: "Private Lessons",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    content:
      "Private lessons helped me focus on form and make steady progress.",
    rating: 5,
  },
  {
    name: "Fitness Member",
    role: "Fitness Training",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    content:
      "Clean facility, supportive staff, and great training options for all levels.",
    rating: 5,
  },
];

export const TRAINERS = [
  {
    name: "D.P.I.N. Somarathna",
    title: "Head Coach & Powerlifting Specialist",
    specialty: "Powerlifting & Strength Coaching",
    image: coachImage,
    bio: "National and Asian-level powerlifting athlete with decades of hands-on coaching and gym leadership.",
    achievements: [
      "1997 - 1st Place, Sri Lanka Powerlifting Federation Novices Powerlifting Championship (Body weight: 56 kg).",
      "1998 - Best Lifter, Sri Lanka Powerlifting Federation; set a squat record of 180 kg at 56 kg body weight.",
      "1999 - Won the bronze medal in Asian powerlifting.",
    ],
    experience: "Own gym since 2004 - 22 years of coaching experience.",
  },
];

export const FAQ = [
  {
    question: "Where is Extreme Fitness Center located?",
    answer: `${CONTACT.addressLine1}, ${CONTACT.addressLine2}.`,
  },
  {
    question: "How do I book a private lesson or personal training?",
    answer: `Call us at ${CONTACT.phone} and we will schedule a session that fits your goals.`,
  },
  {
    question: "Do you offer youth classes?",
    answer:
      "Yes. We run youth classes designed for safe, age-appropriate training.",
  },
  {
    question: "Do you provide nutrition consulting?",
    answer:
      "Yes. Our nutrition consulting supports your training and recovery goals.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Private lessons, personal training, nutrition consulting, youth classes, body building, fitness training, and weight training.",
  },
  {
    question: "What should I bring for my first session?",
    answer:
      "Comfortable workout clothes, water, and a willingness to learn. Our coaches will guide you.",
  },
];

export const TRANSFORMATIONS = [
  {
    before:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=400&fit=crop",
    after:
      "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=300&h=400&fit=crop",
    name: "Member Story",
    duration: "Consistent Training",
    result: "Improved strength, mobility, and confidence.",
  },
  {
    before:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=400&fit=crop",
    after:
      "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=300&h=400&fit=crop",
    name: "Member Progress",
    duration: "Steady Routine",
    result: "Better endurance and healthy training habits.",
  },
  {
    before:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=400&fit=crop",
    after:
      "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=300&h=400&fit=crop",
    name: "Member Journey",
    duration: "Ongoing Coaching",
    result: "Focused technique and long-term progress.",
  },
];
