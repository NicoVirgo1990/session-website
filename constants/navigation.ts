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
  About: {
    href: '/technicals',
    alt: 'Heading of Session Technical Links',
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
