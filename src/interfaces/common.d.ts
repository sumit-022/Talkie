interface HomeHeroProps {
  heroTitle: string;
  heroSubtitle: string;
  heroText: string;
  heroButton1: {
    text: string;
    link: string;
  };
  heroButton2: string;
  className?: string;
}

interface AtomProps {
  className?: string;
  children?: React.ReactNode;
}

interface LoginData {
  message: string;
  data: {
    email: string;
    firstName: string;
    lastName: string;
  };
}

