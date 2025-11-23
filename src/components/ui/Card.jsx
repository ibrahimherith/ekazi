import { cn } from "../../lib/utils";

export function Card({ className, children }) {
  return (
    <div className={cn("rounded-xl border bg-background shadow-sm", className)}>
      {children}
    </div>
  );
}

export function CardContent({ className, children }) {
  return <div className={cn("p-6", className)}>{children}</div>;
}
