import { graphql, useStaticQuery } from 'gatsby';

export const Footer = () => {

  const { allContentfulFooter } = useStaticQuery(
    graphql`query GET_FOOTER_CONTENT {
      allContentfulFooter(filter: {name: {eq: "Portfolio footer"}}) {
        nodes {
          span
        }
      }
    }`
  );
  
  interface Footer {
    span: string;
  };

  const footer : Footer = allContentfulFooter.nodes[0];
  
  return (
    <footer>
      <span>{footer.span}</span>
    </footer>
  );
};
