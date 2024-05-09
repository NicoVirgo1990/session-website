import { Footer, Nav } from '@/components/navigation';
import { ReactElement, ReactNode, useEffect, useState } from 'react';

//import { Banner } from '@/components/ui';
import CustomHead from '@/components/CustomHead';
import { EmailSignup } from '@/components/sections';
import { IMetadata } from '@/constants/metadata';
import LockedPage from '@/components/LockedPage';
import { useRouter } from 'next/router';

interface Props {
  title?: string;
  metadata?: IMetadata;
  children: ReactNode;
  showBanner?: false;
}

export default function Layout({
  title,
  metadata,
  children,
  showBanner = false,
}: Props): ReactElement {
  const router = useRouter();
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    // deny access to the staging environment unless you login with the correct token
    if (
      process.env.NODE_ENV === 'production' &&
      process.env.NEXT_PUBLIC_SITE_ENV === 'development' &&
      !router.isPreview
    ) {
      setLocked(true);
    }
  }, [router.isPreview]);

  return (
    <>
      <CustomHead title={title} metadata={metadata} />
      <Nav />
      {locked ? <LockedPage /> : <main>{children}</main>}
      <EmailSignup />
      <Footer />
    </>
  );
}
