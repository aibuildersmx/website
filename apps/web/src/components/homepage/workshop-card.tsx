import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users } from "lucide-react";

interface WorkshopCardProps {
  month: string;
  day: string;
  title: string;
  location: string;
  spotsAvailable: number;
  description: string;
  price: string;
  link?: string;
  badgeText?: string;
  badgeVariant?: "default" | "secondary";
  isCompleted?: boolean;
  buttonText?: string;
  buttonDisabled?: boolean;
}

export function WorkshopCard({
  month,
  day,
  title,
  location,
  spotsAvailable,
  description,
  price,
  link,
  badgeText = "Próximo",
  badgeVariant = "default",
  isCompleted = false,
  buttonText = "Inscríbete",
  buttonDisabled = false,
}: WorkshopCardProps) {
  return (
    <Card
      className={`relative overflow-hidden bg-neutral-900 border-neutral-800 flex flex-col transition-transform duration-200 hover:-translate-y-1 ${
        isCompleted ? "opacity-60" : ""
      }`}
    >
      <CardContent className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-6">
          <div className="text-center">
            <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
              {month}
            </div>
            <div className="text-4xl font-bold text-white mt-1">{day}</div>
          </div>
          {badgeText && (
            <Badge
              className={`${
                badgeVariant === "secondary"
                  ? "bg-neutral-700 text-neutral-300 hover:bg-neutral-600"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              } px-4 py-1 text-xs font-medium rounded-full`}
            >
              {badgeText.toUpperCase()}
            </Badge>
          )}
        </div>
        <div className="space-y-4 flex-1">
          <h3 className="text-xl font-semibold text-white leading-tight">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <MapPin className="h-4 w-4 text-red-500" />
            {location}
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between pt-4 mt-6 border-t border-neutral-800">
          <div className="flex items-center gap-6">
            {spotsAvailable > 0 && (
              <div className="text-sm">
                <span className="text-blue-400 font-medium">
                  {spotsAvailable} lugares
                </span>
                <br />
                <span className="text-blue-400">disponibles</span>
              </div>
            )}
            <span className="text-lg font-semibold text-white">{price}</span>
          </div>
          {!isCompleted &&
            (link ? (
              <Button
                size="default"
                asChild
                disabled={buttonDisabled}
                className={
                  buttonDisabled
                    ? "bg-neutral-700 text-neutral-400"
                    : "bg-white text-black hover:bg-neutral-200"
                }
              >
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {buttonText}
                </a>
              </Button>
            ) : (
              <Button
                size="default"
                disabled={buttonDisabled}
                className={
                  buttonDisabled
                    ? "bg-neutral-700 text-neutral-400"
                    : "bg-white text-black hover:bg-neutral-200"
                }
              >
                {buttonText}
              </Button>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
