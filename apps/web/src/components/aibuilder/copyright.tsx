import { ShimmerText } from "../ui/shimmer-text";

export function Copyright() {
  return (
    <a
      href="https://aibuilders.mx"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary hover:underline transition-colors text-muted-foreground"
    >
      <ShimmerText className="text-sm">⚡ made by aibuilders.mx</ShimmerText>
    </a>
  );
}
