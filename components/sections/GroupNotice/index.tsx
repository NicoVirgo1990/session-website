import Link from 'next/link';
import { ReactElement } from 'react';
import classNames from 'classnames';

interface Props {
  classes?: string;
}

export default function GroupNotice(props: Props): ReactElement {
  const { classes } = props;
  return (
    <div
      className={classNames(
        'bg-gray-dark text-white font-helvetica px-10 py-16 border-b border-primary border-dashed',
        'md:py-12',
        classes
      )}
    >
      <h4 className={classNames('text-xl font-bold leading-none mb-2')}>
        Contact Kame Team to more information:
      </h4>
      <p className={classNames('leading-none')}>
        {' '}
        <Link href="/">
          <a
            className={classNames(
              'text-white',
              'transition-colors duration-300',
              'hover:text-white'
            )}
          >
            kamephone@tuta.com
          </a>
        </Link>
      </p>
    </div>
  );
}
