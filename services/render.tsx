import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { Block, Inline } from '@contentful/rich-text-types';
import sanitize from '@/utils/sanitize';

import EmbedContent from '@/components/EmbedContent';

function renderMarkup(node: any) {
  const frontTags: string[] = [];
  const endTags: string[] = [];
  const styles: any = {};

  if (node.color) {
    styles.color = sanitize(node.color);
  }

  frontTags.push(
    node.strikethrough && '<s>',
    node.subscript && '<sub>',
    node.superscript && '<sup>'
  );
  endTags.push(
    node.strikethrough && '</s>',
    node.subscript && '</sub>',
    node.superscript && '</sup>'
  );

  let htmlContent = frontTags.join('') + node.content + endTags.join('');
  htmlContent = sanitize(htmlContent);
  return (
    <span dangerouslySetInnerHTML={{ __html: htmlContent }} style={styles} />
  );
}

function renderEmbeddedLink(node: any, isInline = false) {
  const figureClasses = classNames(
    isInline && [
      node.position && 'md:w-3/5 lg:w-1/2',
      node.position === 'left' && 'md:float-left',
      node.position === 'right' && 'md:float-right',
    ]
  );
  const inlineClasses = classNames(
    isInline && [!node.position && 'inline-block align-middle mx-1']
  );
  const captionClasses = classNames(inlineClasses, !isInline && 'pb-4');
  return (
    <figure className={figureClasses}>
      <EmbedContent content={node.meta} classes={inlineClasses} />
      {node.caption && (
        <figcaption className={captionClasses}>
          <em>{node.caption}</em>
        </figcaption>
      )}
    </figure>
  );
}

function renderEmbeddedMedia(node: any, isInline = false) {
  const media = node.file.fields;
  const url = media.file.url.replace('//', 'https://');
  switch (media.file.contentType) {
    case 'image/jpeg':
    case 'image/png':
      const imageWidth = node.width ?? media.file.details.image.width;
      const imageHeight = node.height ?? media.file.details.image.height;
      const inlineClasses = classNames(
        isInline && [
          node.position
            ? 'mx-auto mb-8 md:mx-4'
            : 'inline-block align-middle mx-1',
          node.position === 'left' && 'md:float-left',
          node.position === 'right' && 'md:float-right',
        ]
      );
      const figureClasses = classNames(
        inlineClasses,
        !isInline && 'text-center mb-8 lg:px-24'
      );
      const captionClasses = classNames([
        !node.position && 'mt-1',
        isInline &&
          !node.position &&
          'text-center md:inline-block md:align-middle md:mx-1',
      ]);
      return (
        <figure
          className={figureClasses}
          style={{ width: node.position ? imageWidth : '' }}
        >
          <Image
            src={url}
            alt={node.title}
            width={imageWidth}
            height={imageHeight}
          />
          {node.caption && (
            <figcaption className={captionClasses}>
              <em>
                {node.sourceUrl ? (
                  <Link href={node.sourceUrl}>
                    <a
                      className={classNames(
                        'text-primary-dark font-extralight'
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {node.caption}
                    </a>
                  </Link>
                ) : (
                  <>{node.caption}</>
                )}
              </em>
            </figcaption>
          )}
        </figure>
      );
    default:
      return null;
  }
}

interface IEmbedEntry {
  node: Block | Inline;
  isInline?: boolean;
}

export function renderEmbeddedEntry(props: IEmbedEntry) {
  const { node, isInline = false } = props;
  const target = node.data.target;
  const asset = target.fields;
  if (target.sys.contentType.sys.id === 'markup') {
    return renderMarkup(asset);
  }
  if (!asset.file) {
    return renderEmbeddedLink(asset, isInline);
  } else {
    return renderEmbeddedMedia(asset, isInline);
  }
}
