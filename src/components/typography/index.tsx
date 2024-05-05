type Props = {
  children: React.ReactNode;
  className?: string;
};

export function TypographyH1({ children, className }: Props) {
  return (
    <h1
      className={
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl " + className || ""
      }
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }: Props) {
  return (
    <h2
      className={"scroll-m-20 text-2xl lg:text-3xl font-bold tracking-tight first:mt-0 " + className || ""}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }: Props) {
  return (
    <h3 className={"scroll-m-20 text-xl lg:text-2xl font-semibold tracking-tight " + className || ""}>
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className }: Props) {
  return (
    <h4 className={"scroll-m-20 text-xl font-semibold tracking-tight " + className || ""}>
      {children}
    </h4>
  );
}

export function TypographyP({ children, className }: Props) {
  return <p className={"leading-7 [&:not(:first-child)]:mt-6 " + className || ""}>{children}</p>;
}

export function TypographyBlockquote({ children, className }: Props) {
  return (
    <blockquote className={"mt-6 border-l-2 pl-6 italic " + className || ""}>
      {/* "After all," he said, "everyone enjoys a good joke, so it's only fair that
        they should pay for the privilege." */}
      {children}
    </blockquote>
  );
}

export function TypographyInlineCode({ children, className }: Props) {
  return (
    <code
      className={
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold " +
          className || ""
      }
    >
      {children}
    </code>
  );
}

export function TypographyLead({ children, className }: Props) {
  return <p className={"text-xl text-muted-foreground " + className || ""}>{children}</p>;
}

export function TypographyLarge({ children, className }: Props) {
  return <div className={"text-lg font-semibold " + className || ""}>{children}</div>;
}

export function TypographySmall({ children, className }: Props) {
  return (
    <small className={"text-sm font-medium leading-none " + className || ""}>{children}</small>
  );
}

export function TypographyMuted({ children, className }: Props) {
  return <p className={"text-sm text-muted-foreground " + className || ""}>{children}</p>;
}
