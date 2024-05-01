import { FormEventHandler, ReactElement, useRef, useState } from 'react';

import { Button } from '@/components/ui';
import Container from '@/components/Container';
import { GroupNotice } from '@/components/sections';
import classNames from 'classnames';
import { useScreen } from '@/contexts/screen';

export default function EmailSignup(): ReactElement {
  const { isSmall } = useScreen();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const setButtonText = (value: string) => {
    if (null !== buttonRef.current) {
      buttonRef.current.innerText = value;
    }
  };
  const [email, setEmail] = useState('');
  const handleSubscription: FormEventHandler = async (event) => {
    event.preventDefault();
    setButtonText('Subscribing...');
    let response;
    try {
      response = await fetch('/api/email/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      switch (response.status) {
        case 201:
          setEmail('');
          setButtonText('Signed up ✓');
          break;
        case 400:
        default:
          setButtonText('Signup failed ✗');
          console.error(
            'Email API Code',
            response.status,
            await response.json()
          );
          break;
      }
    } catch (error) {
      response = error;
    }
  };
  return (
    <section className="bg-primary text-gray-dark">
      {isSmall && <GroupNotice />}
      <Container
        id="signup"
        classes={classNames('px-8', 'md:px-10', 'lg:py-24')}
      >
        <h3
          className={classNames(
            'text-xl font-bold leading-none mb-2 text-white',
            'lg:text-3xl lg:mb-0'
          )}
        >
         KAME:  next generation cybersecurity smartphone
        </h3>
        <p className={classNames('leading-none mb-4 text-green-400', 'md:mb-8', 'lg:text-xl')}>
          STAY SAFE, STAY KAME!
        </p>
       
      </Container>
    </section>
  );
}
