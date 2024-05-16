export enum HeadersVariant {
  H1 = "h1",
  H2 = "h2",
  SUBHEADER = "subheader",
}

type HeaderProps = {
  children: React.ReactNode;
  variant: HeadersVariant;
};

export const Header = ({ children, variant }: HeaderProps) => {
  const getVariantClassNames = () => {
    switch (variant) {
      case HeadersVariant.H1:
        return "text-[56px] font-medium leading-[64px] text-primary-100";
      case HeadersVariant.H2:
        return "text-[24px] leading-[30px] md:text-[34px] font-medium md:leading-[38px] text-text-100";
      case HeadersVariant.SUBHEADER:
        return "text-[24px] font-medium leading-[28px] text-text-100";
    }
  };

  switch (variant) {
    case HeadersVariant.H1:
      return <h1 className={getVariantClassNames()}>{children}</h1>;
    case HeadersVariant.H2:
      return <h2 className={getVariantClassNames()}>{children}</h2>;
    case HeadersVariant.SUBHEADER:
      return <h3 className={getVariantClassNames()}>{children}</h3>;
  }
};
