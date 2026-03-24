interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ tag, title, description, center = true }: SectionHeadingProps) => (
  <div className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}>
    {tag && (
      <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary font-display">
        {tag}
      </span>
    )}
    <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg leading-relaxed mx-auto">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
