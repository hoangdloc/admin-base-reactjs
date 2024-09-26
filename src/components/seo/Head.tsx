import { Helmet, HelmetData } from 'react-helmet-async';

// ---------------------------------------–-------------------------------------
// Props
// ---------------------------------------–-------------------------------------

type THeadProps = {
  title?: string;
  description?: string;
};

// ---------------------------------------–-------------------------------------
// Component
// ---------------------------------------–-------------------------------------

const helmetData = new HelmetData({});

export const Head: React.FC<THeadProps> = ({ title, description }) => {
  const defaultTitle = 'React Admin Base';
  const helmetTitle = title ? `${title} | ${defaultTitle}` : undefined;

  return (
    <Helmet
      defaultTitle={defaultTitle}
      helmetData={helmetData}
      title={helmetTitle}
    >
      <meta
        content={description}
        name="description"
      />
    </Helmet>
  );
};
Head.displayName = 'Head';
