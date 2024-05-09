export interface INavItem {
  href: string;
  alt: string;
  target: '_self' | '_blank';
  rel?: string;
  items?: INavList;
}

interface INavList {
  [key: string]: INavItem; // key is what user sees
}

const NAV_ITEMS: INavList = {
  Team: {
    href: '/team',
    alt: 'Heading of Session Team Links',
    target: '_self',
  },
  Manifesto: {
    href: '/manifesto',
    alt: `Link to Session's FAQs`,
    target: '_self',
  },
  Features: {
    href: '/faq',
    alt: `Link to Session's FAQs`,
    target: '_self',
  }
};

const NAVIGATION = {
  NAV_ITEMS,
};

export default NAVIGATION;
