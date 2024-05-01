import { ReactComponent as AndroidSVG } from '@/assets/svgs/android_robot_head.svg';
import { ReactComponent as AppleSVG } from '@/assets/svgs/apple.svg';
import { Button } from '@/components/ui';
import Container from '@/components/Container';
import { ReactComponent as DesktopSVG } from '@/assets/svgs/desktop.svg';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import classNames from 'classnames';
import { useScreen } from '@/contexts/screen';
import { ReactComponent as FDroidSVG } from '@/assets/svgs/fdroid-logo.svg';

export default function Hero(): ReactElement {
  const { isSmall, isMedium, isLarge, isHuge, isEnormous } = useScreen();
  const headingClasses = classNames(
    'text-5xl font-semibold text-gray-dark',
    'lg:text-6xl'
  );
  const downloadLinkClasses = 'text-3xl font-bold text-primary mb-7';
  const downloadSVGClasses = 'inline-block mx-3 -mt-2 fill-current';
  return (
    <section>
      <Container
        hasMinHeight={true}
        heights={{ small: '100%', medium: '100%', large: '100vh - 112px' }}
        classes={classNames(
          'mt-12',
          'lg:mt-16 lg:flex lg:flex-col lg:justify-center lg:items-center'
        )}
      >
        <div
          className={classNames(
            'lg:-mt-16 lg:w-full lg:flex lg:justify-between lg:items-center',
            '3xl:-mt-64'
          )}
        >
          <div className={classNames('lg:-mt-16 lg:mr-8', 'xl:-mr-1')}>
            <h1 className={classNames(headingClasses)}>
              <span className="block">Stay</span>
              <span className={'block glitch'} data-glitch-text={'Encrypted'}>
                Safe,
              </span>
              <span className="block">with Kame</span>
            </h1>
     
          </div> 
          {(isSmall || isMedium) && (
            <div className={classNames('-mt-4 -ml-1')}>
              <Image
                src="/assets/images/logoHero.webp"
                alt="mobile app creat account screenshot"
                width="574px"
                height="700px"
                layout="responsive"
                priority={true}
              />
            </div>
          )}
          {(isLarge || isHuge || isEnormous) && (
            <div className={classNames('max-w-2xl')}>
              <Image
                src="/assets/images/logoHero.webp"
                alt="mobile app ui showcase"
                width="1900px"
                height="1903px"
                priority={true}
                loading="eager"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
