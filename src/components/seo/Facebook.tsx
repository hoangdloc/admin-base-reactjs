import { Helmet } from 'react-helmet-async';

// ---------------------------------------–-------------------------------------
// Props
// ---------------------------------------–-------------------------------------

type TFacebookProps = {
  url: string;
  type: string;
  title: string;
  desc: string;
  image: string;
  locale: string;
};

// ---------------------------------------–-------------------------------------
// Component
// ---------------------------------------–-------------------------------------

export const Facebook: React.FC<TFacebookProps> = ({
  url,
  type,
  title,
  desc,
  image,
  locale,
}) => (
  <Helmet>
    <meta
      content={locale}
      property="og:locale"
    />
    <meta
      content={url}
      property="og:url"
    />
    <meta
      content={type}
      property="og:type"
    />
    <meta
      content={title}
      property="og:title"
    />
    <meta
      content={desc}
      property="og:description"
    />
    <meta
      content={image}
      property="og:image"
    />
    <meta
      content={desc}
      property="og:image:alt"
    />
  </Helmet>
);
Facebook.displayName = 'Facebook';
