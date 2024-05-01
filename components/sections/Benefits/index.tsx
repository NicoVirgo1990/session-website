import { BenefitsCard } from '@/components/cards';
import Container from '@/components/Container';
import { Headline } from '@/components/ui';
import { ReactElement } from 'react';
import classNames from 'classnames';

export default function Benefits(): ReactElement {
  const cardClasses = classNames('w-1/2 mb-5 text-green-500', 'lg:w-full lg:max-w-sm lg:px-8');
  const imageWidth = '500px';
  const imageHeight = '500px';
  return (
    <section className={'text-white bg-primary'}>
      <Headline
        color="gray-dark"
        classes={classNames('text-lg font-bold pt-16', 'lg:pt-20')}
        containerWidths={{
          small: '10rem',
          medium: '34rem',
          large: '67rem',
        }}
      >
    <h2 style={{ color: 'white' }}>Benefits</h2>
      </Headline>
      <Container
        hasMinHeight={true}
        heights={{
          small: '100%',
          medium: '100%',
          large: '100%',
          huge: '100%',
          enormous: '100vh - 84px',
        }}
        classes={classNames(
          'px-4 lg:max-w-none',
          '2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center'
        )}
      >
        <div
          className={classNames(
            'flex flex-wrap justify-center items-center -mx-3 max-w-screen-md',
            'md:mx-auto',
            'lg:max-w-screen-xl lg:pt-16',
            '2xl:mt-12',
            '3xl:-mt-16'
          )}
        >
          <BenefitsCard
            title="Anonymous"
            description={[
              'Kame Extreme accounts are anonymous.',
              'No phone number or email required.',
            ]}
            images={[
              '/assets/svgs/no-phone.svg',
              '/assets/svgs/no-phone-redacted.svg',
            ]}
            imageAlt="crossed out telephone"
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            classes={classNames(cardClasses, 'lg:mb-32')}
          />
          <BenefitsCard
            title="No user data"
            description={[
              'Kame doesn’t collect data,',
              'so there’s nothing to leak.',
            ]}
            images={[
              '/assets/svgs/no-data.svg',
              '/assets/svgs/no-data-redacted.svg',
            ]}
            imageAlt="restricted lock"
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            classes={classNames(cardClasses, 'lg:mb-32')}
          />
          <BenefitsCard
            title="Nobody track you"
            description={[
              'Send messages through our p2p network',
              'Kame Hardcore Antitracker leaves no trace',
            ]}
            images={[
              '/assets/svgs/no-footprint.svg',
              '/assets/svgs/no-footprint-redacted.svg',
            ]}
            imageAlt="footprint stop sign"
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            classes={classNames(cardClasses, 'lg:mb-32')}
          />
          <BenefitsCard
            title="Multiple Device Versions"
            description={[
              'Choose between Extreme or SE ',
              'Different Threats, different defenses'
            ]}
            images={[
              '/assets/svgs/open-source.svg',
              '/assets/svgs/open-source-redacted.svg',
            ]}
            imageAlt="open source logo"
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            classes={classNames(cardClasses, 'lg:mb-24')}
          />
          <BenefitsCard
            title="Censorship Resistant"
            description={[
              'With p2p communication,',
              'it’s impossible to shut Kame down.',
            ]}
            images={[
              '/assets/svgs/censorship-resistant.svg',
              '/assets/svgs/censorship-resistant-redacted.svg',
            ]}
            imageAlt="silenced person"
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            classes={classNames(cardClasses, 'lg:mb-24')}
          />
        </div>
      </Container>
    </section>
  );
}
