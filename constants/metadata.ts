export interface IMetadata {
  DESCRIPTION: string;
  TYPE?: string;
  CANONICAL_URL?: string;
  OG_IMAGE?: {
    URL: string;
    WIDTH: number;
    HEIGHT: number;
    ALT: string;
  };
  TAGS?: string[];
  ARTICLE_SECTION?: string;
  PUBLISHED_TIME?: string;
}

const METADATA = {
  HOST_URL:
    process.env.NEXT_PUBLIC_SITE_ENV === 'production'
      ? 'https://kamesystem.com'
      : 'https://kamesystem.com',
  SITE_NAME: 'Kame',
  TITLE: 'Kame | Stay Safe, Stay Kame.',
  DESCRIPTION:
    'Kame is a secure android smartphone, ideal for activist, journalist, business leader and CEO .',
  TAGS: [
    'Privacy',
    'co-op',
    'Community contribution',
    'decentralisation',
    'decentralised',
    'messaging',
    'Private messaging',
  ],
  OG_TYPE: 'website',
  OG_IMAGE: {
    URL: '/assets/images/logo-black.png',
    WIDTH: 804,
    HEIGHT: 665,
    ALT: 'Session Logo Black Background',
  },
  LOCALE: 'en_US',
  FAVICON: {
    MEDIUM: '/favicon-32x32.png',
    SMALL: '/favicon-16x16.png',
    APPLE_TOUCH_ICON: '/apple-touch-icon.png',
  },
  MANIFEST: '/site.webmanifest',
  MASK_ICON: { PATH: '/safari-pinned-tab.svg', COLOR: '#00f782' },
  MSAPPLICATION_TILECOLOR: '#343132',
  THEME_COLOR: '#ffffff',
  TWITTER_CREATOR: 'session_app',
  ITUNES_ID: '',
  404: {
    DESCRIPTION: 'It looks like the link pointing here was faulty.',
  },
  DOWNLOAD_PAGE: {
    TYPE: 'article',
    DESCRIPTION:
      'Download Session Today | Session is an end-to-end encrypted messenger that removes sensitive metadata collection for all operating systems.',
    OG_IMAGE: {
      URL: '/assets/images/send-messages-not-metadata.jpg',
      WIDTH: 1024,
      HEIGHT: 1024,
      ALT: 'Mysterious man on the phone. Heading is Use Session.',
    },
  },
  FAQ_PAGE: {
    TYPE: 'FAQPage',
    DESCRIPTION:
      "Session's FAQ. Find answers to some of the most frequently asked questions about Session — info on the team, the tech, and the technicalities.",
    OG_IMAGE: {
      URL: '/assets/images/faq.png',
      WIDTH: 800,
      HEIGHT: 800,
      ALT: 'Frequently Asked Questions heading with redacted text below',
    },
  },
  HELP_PAGE: {
    DESCRIPTION: 'How you can help. A Session Community Help Guide Document.',
  },
  LIGHTPAPER_PAGE: {
    DESCRIPTION:
      'Session is a decentralised messenger that supports completely private, secure, and anonymous communications.',
    OG_IMAGE: {
      URL: '/assets/images/lightpaper.jpg',
      WIDTH: 1200,
      HEIGHT: 627,
      ALT: 'Black background with a neon white Session logo with Lightpaper written as a heading',
    },
    TAGS: [
      'Session',
      'lightpaper',
      'metadata',
      'messenger',
      'encryption',
      'encrypted',
      'onion routing',
      'decentralisation',
      'Oxen',
      'blockchain',
      'messaging',
      'private',
      'privacy',
    ],
  },
  COMMUNITY_PAGE: {
    DESCRIPTION:
      'Join the movement to keep the internet private! Chat with like-minded individuals in the Session Community. Join Now',
    OG_IMAGE: {
      URL: '/assets/images/faq.png',
      WIDTH: 1024,
      HEIGHT: 1024,
      ALT: 'Frequently Asked Questions heading with redacted text below',
    },
  },
};

export default METADATA;
