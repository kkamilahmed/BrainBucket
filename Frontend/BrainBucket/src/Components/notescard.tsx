import { Star, Trash } from "lucide-react";
import { useState } from "react";
import { ThemeProvider } from "./theme-provider";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface NoteCardProps {
  title: string;
  content?: string;
  img?: string;
  url?: string;
}

export function NotesCard({ title, content, img, url }: NoteCardProps) {
  const [isFav, setIsFav] = useState(false);

  return (
    <ThemeProvider>
      <Card className="w-90">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">{title}</CardTitle>
            <div className="flex gap-2" onClick={() => setIsFav(!isFav)}>
              <Star strokeWidth={1} fill={isFav ? "currentColor" : "none"} />
              <Trash strokeWidth={1} />
            </div>
          </div>
        </CardHeader>

        <CardContent className="-my-2">
          {content ? (
            <p className="text-left whitespace-pre-line">{content}</p>
          ) : img && url ? (
            <div
              onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
              className="cursor-pointer relative group"
            >
              <img
                src={img}
                alt="Image"
                className="rounded-md object-cover transition-transform duration-200 group-hover:scale-101 group-hover:shadow-lg"
              />
              <div className="absolute inset-0 rounded-md bg-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          ) : null}
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
