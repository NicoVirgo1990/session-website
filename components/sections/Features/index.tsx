import Container from '@/components/Container';
import { Headline } from '@/components/ui';
import Image from 'next/image';
import { ReactElement } from 'react';
import classNames from 'classnames';
import { useScreen } from '@/contexts/screen';

export default function Features(): ReactElement {
  const { isSmall, isMedium, isLarge, isHuge, isEnormous } = useScreen();
  const headingClasses = classNames(
    'font-helvetica text-4xl font-bold text-gray-dark mb-1'
  );
  const paragraphClasses = classNames(
    'text-gray-lighter leading-6 mb-8',
    'md:mb-12'
  );
  return (
    <section className={classNames(' text-gray-dark')}>
      <Headline
        color="gray-dark"
        classes={classNames('text-lg font-bold pt-16', 'lg:pt-20')}
        containerWidths={{
          small: '10rem',
          medium: '34rem',
          large: '67rem',
        }}
      >
        <h2>Features</h2>
      </Headline>
      <Container
        hasMinHeight={true}
        heights={{
          small: '100%',
          medium: '100%',
          large: '100vh - 12rem',
          huge: '100vh - 84px',
          enormous: '100vh - 84px',
        }}
        classes={classNames(
          '2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center'
        )}
      >
        <div
          className={classNames(
            'lg:mx-auto lg:flex lg:justify-between lg:items-center lg:mt-36',
            '2xl:mt-0 2xl:w-full',
            '3xl:-mt-24'
          )}
        >
          {(isSmall || isMedium) && (
            <div
              className={classNames('-mt-4 -ml-1 mb-12', 'md:mb-16 md:px-20')}
            >
              <Image
                src="/assets/images/mockup-desktop.png"
                alt="mobile app direct message screenshot"
                width="2000px"
                height="2700px"
                layout="responsive"
                priority={true}
                loading="eager"
              />
            </div>
          )}
          <div
            className={classNames(
              'px-3',
              'md:max-w-xl',
              'lg:max-w-sm lg:px-0 lg:-mt-8 lg:mr-8',
              '2xl:mt-0'
            )}
          >
            <h3 className={headingClasses}>P2P communication</h3>
            <p className={paragraphClasses}>
            Utilizing P2P communication with cascading symmetric encryption (AES-256 and Salsa20) provides substantial security and privacy benefits. This layered approach ensures strong protection against interceptions, boosts network resilience, enhances scalability, and improves resistance to censorship. Additionally, the decentralization of P2P systems reduces surveillance risks, enhancing overall user security and privacy.
      
            </p>
            <h3 className={headingClasses}>Hardened OS</h3>
            <p className={paragraphClasses}> With a unique read-only format and blockchain-based update verification, Kame ensures that only authorized applications are installed and that updates are tamper-proof and genuine. Our proprietary Shield application conducts regular system checks to swiftly detect and respond to potential intrusions, providing unparalleled protection for your devices and data. Experience peace of mind with Kame&apos;s advanced security features.

            </p>
            <h3 className={headingClasses}>Kame Network</h3>
            <p className={paragraphClasses}>

A controlled network every device provides security. Anti-tracking tools protect online privacy by preventing monitoring and enhancing data security.
            </p>
          </div>
          {(isLarge || isHuge || isEnormous) && (
            <div
              className={classNames(
                'w-full -mt-12',
                'xl:ml-8 xl:-mr-8',
                '3xl:-mr-16'
              )}
            >
              <Image
                src="/assets/images/mockup-desktop.png"
                alt="desktop app screenshot"
                width="2477px"
                height="3000px"
                layout="responsive"
                loading="eager"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
