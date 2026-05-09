export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Membership {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

export interface Trainer {
  name: string;
  title: string;
  specialty: string;
  image: string;
  bio: string;
  achievements: string[];
  experience: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Transformation {
  before: string;
  after: string;
  name: string;
  duration: string;
  result: string;
}

export interface NavLink {
  label: string;
  href: string;
}
