import { Helmet } from 'react-helmet-async';

// ---------------------------------------–-------------------------------------
// Props
// ---------------------------------------–-------------------------------------

type TTwitterProps = {
  type?: string;
  username: string;
  title: string;
  desc: string;
  image: string;
};

// ---------------------------------------–-------------------------------------
// Components
// ---------------------------------------–-------------------------------------

export const Twitter: React.FC<TTwitterProps> = ({
  type = 'summary_large_image',
  username,
  title,
  desc,
  image,
}) => (
  <Helmet>
    {!!username && (
      <meta
        content={username}
        name="twitter:creator"
      />
    )}
    <meta
      content={type}
      name="twitter:card"
    />
    <meta
      content={title}
      name="twitter:title"
    />
    <meta
      content={desc}
      name="twitter:description"
    />
    <meta
      content={image}
      name="twitter:image"
    />
    <meta
      content={desc}
      name="twitter:image:alt"
    />
  </Helmet>
);
Twitter.displayName = 'Twitter';
