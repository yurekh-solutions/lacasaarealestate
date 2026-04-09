interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ title, subtitle, center = true }: SectionHeadingProps) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">{title}</h2>
    {subtitle && <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>}
    <div className={`w-20 h-0.5 bg-accent mt-6 ${center ? "mx-auto" : ""}`} />
  </div>
);

export default SectionHeading;
