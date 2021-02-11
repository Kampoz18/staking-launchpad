import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { useIntl } from 'react-intl';

interface LinkProps {
  primary?: boolean | undefined;
  theme?: any;
  className?: string;
  href?: string;
  inline?: boolean;
  isTextLink?: boolean;
}

const styles = `
  line-height: 33px;
  color:inherit;
  display: inherit;
  text-decoration: none;
  &:hover {
    font-weight: 400;
  };
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  };
 `;

const StyledExternalLink = styled.a<
  Pick<LinkProps, 'primary' | 'theme' | 'inline' | 'isTextLink'>
>`
  ${styles};
  color: ${(props: any) =>
    props.primary ? props.theme.blue.medium : 'inherit'};
  display: ${(props: any) => (props.inline ? 'inline' : 'inherit')};
  &:after {
    display: ${(props: any) => (props.isTextLink ? `inline` : `none`)};
    margin-left: 0.125em;
    margin-right: 0.3em;
    content: '↗';
    transition: all 0.1s ease-in-out;
    font-style: normal;
  }
`;
const StyledLink = styled(RouterLink)`
  ${styles};
  color: ${(props: any) =>
    props.primary ? props.theme.blue.medium : 'inherit'};
  display: ${(props: any) => (props.inline ? 'inline' : 'inherit')};
`;

interface LinkProps {
  to: string;
  key?: string;
  children: React.ReactNode;
  className?: string;
  primary?: boolean | undefined;
  onClick?: (param?: any) => void;
  isTextLink?: boolean;
  inline?: boolean;
  shouldOpenNewTab?: boolean;
}

export const Link = (props: LinkProps) => {
  const {
    children,
    className,
    to,
    primary,
    inline,
    isTextLink = true,
    shouldOpenNewTab = false,
  } = props;
  const { locale } = useIntl();
  const isExternal = to && to.includes('http');
  if (isExternal) {
    return (
      <StyledExternalLink
        className={className}
        href={to}
        primary={primary}
        target="_blank"
        inline={inline}
        isTextLink={isTextLink}
      >
        {children}
      </StyledExternalLink>
    );
  }
  const langPath = `/${locale}${to}`;
  return (
    <StyledLink
      target={shouldOpenNewTab ? '_blank' : '_self'}
      className={className}
      {...props}
      to={langPath}
    >
      {children}
    </StyledLink>
  );
};
