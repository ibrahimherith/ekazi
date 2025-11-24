import { cn } from "../../lib/utils";

const variants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline:
    "border border-border text-foreground hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
};

const sizes = {
  sm: "h-9 px-3 rounded-md text-sm",
  md: "h-10 px-4 rounded-md",
  lg: "h-12 px-6 rounded-lg text-lg",
};

export function Button({
  children,
  variant = "default",
  size = "md",
  block = false,
  className,
  href,
  ...props
}) {
  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium cursor-pointer transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        block && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
