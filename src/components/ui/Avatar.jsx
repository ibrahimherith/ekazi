import { cn } from "../../lib/utils";

export function Avatar({ className, children }) {
  return (
    <div
      className={cn(
        "w-12 h-12 rounded-full overflow-hidden bg-secondary flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt }) {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
}

export function AvatarFallback({ children }) {
  return (
    <span className="text-sm font-medium text-muted-foreground">
      {children}
    </span>
  );
}
