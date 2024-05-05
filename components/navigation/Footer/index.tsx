import { ReactComponent as GithubSVG } from '@/assets/svgs/github.svg';
import { GroupNotice } from '@/components/sections';
import Image from 'next/image';
import { ReactComponent as InstagramSVG } from '@/assets/svgs/instagram.svg';
import Link from 'next/link';
import { ReactElement } from 'react';
import { ReactComponent as RssSVG } from '@/assets/svgs/rss.svg';
import { ReactComponent as TwitterSVG } from '@/assets/svgs/twitter.svg';
import { ReactComponent as YouTubeSVG } from '@/assets/svgs/youtube.svg';
import classNames from 'classnames';
import redact from '@/utils/redact';
import { useScreen } from '@/contexts/screen';

export default function Footer(): ReactElement {
  const { isSmall } = useScreen();
  const redactedClasses = redact({
    redactColor: 'white',
    textColor: 'white',
    animate: true,
    classes: 'py-0.5 py-1',
  });
  const headingClasses = classNames(
    'text-white uppercase text-xl font-bold mb-2'
  );
  const linkClasses = classNames(
    'text-sm py-2 mr-2 font-semibold',
    'lg:py-0 lg:my-0',
    'transition-colors duration-300',
    'hover:text-white'
  );
  const socialLinkClasses = classNames(
    'text-primary',
    'transition duration-300',
    'hover:text-white'
  );
  const svgClasses = classNames(
    'fill-current w-7 h-7 m-1',
    'lg:my-0 lg:ml-0',
    'hover:animate-push'
  );
  return (
    <div className={classNames('bg-gray-dark')}>
      <div
        className={classNames(
          'lg:flex lg:justify-end lg:max-w-screen-xl lg:mx-auto'
        )}
      >
        {!isSmall && (
          <GroupNotice
            classes={classNames(
              'lg:flex lg:flex-col lg:justify-center lg:w-full lg:max-w-xl lg:px-0 lg:border-b-0 lg:border-r lg:my-2'
            )}
          />
        )}
        <footer className={classNames('text-primary-dark', 'lg:w-1/2 lg:mt-2')}>
          <div
            className={classNames(
              'flex flex-wrap pt-6 pb-4 px-8 border-b border-primary border-dashed',
              'md:pb-8',
              'lg:pt-2'
            )}
          >
            <div
              className={classNames(
                'flex flex-col w-1/2 mb-4 text-white',
                'md:w-1/4',
                'lg:w-1/3'
              )}
            >
              <h3 className={headingClasses}>About</h3>
              <Link href="/privacy-policy">
                <a className={linkClasses}>Privacy Policy</a>
              </Link>
              <Link href="/terms-of-service">
                <a className={linkClasses}>Terms of Service</a>
              </Link>
              <Link href="/faq">
                <a className={linkClasses}>Features</a>
              </Link>
            </div>
     
            <div
              className={classNames(
                'flex w-full',
                'md:w-1/2',
                'lg:block lg:w-1/3'
              )}
            >
              <div className={classNames('w-1/2 mb-4', 'lg:w-full')}>
                <h3 className={headingClasses}>Links</h3>
                <div className={classNames('flex flex-wrap -ml-1 text-white')}>
             
                  <Link href="https://www.instagram.com/kame_system">
                    <a
                      className={socialLinkClasses}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramSVG className={svgClasses} />
                    </a>
                  </Link>
             
              
                </div>
              </div>
              <div
                className={classNames('flex flex-col w-1/2 mb-4', 'lg:w-full')}
              >
              
            
              </div>
            </div>
          </div>
          <div
            className={classNames(
              'py-6 px-8',
              'md:p-10 md:w-full md:max-w-3xl',
              'lg:py-5 lg:px-7 lg:mb-2 lg:max-w-lg'
            )}
          >
            <Image
              src="/assets/images/logo-white.png"
              alt="session logo"
              width="120px"
              height="26px"
            />
            <p
              className={classNames(
                'group text-white text-sm leading-6 tracking-wide'
              )}
            >
                Kame is an <span className={redactedClasses}>integrated</span>{' '}
                Android system equipped with a secure message application{' '}
                <span className={redactedClasses}>engineered</span> with multi layer encryption,{' '}
                <span className={redactedClasses}>designed and built</span> for people
                who want be safe from <span className={redactedClasses}>hackers</span> cyber attacks and <span className={redactedClasses}>absolute</span> privacy and
                freedom from <span className={redactedClasses}>governments</span>{' '}
                surveillance.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
