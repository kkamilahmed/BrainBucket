import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { Button } from "../components/ui/button";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";



export function ContentAdder() {
            const [url, setUrl] = useState("");
            const [description, setDescription] = useState("");
  return (
    <Sheet>
      <Button size="lg" >
        <SheetTrigger>Add Content</SheetTrigger>
      </Button>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Note</SheetTitle>
          <SheetDescription>
            Add text, links, or ideas as notes — everything you save can be
            easily found later with search.
          </SheetDescription>
        </SheetHeader>
        <div className="px-3.5 -mt-4 flex flex-col gap-3">
          <Label> Title</Label>
          <Input placeholder="Enter Title" />
          <Label> Description</Label>
          <Textarea
            placeholder="Enter Description"
            className="h-80"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={url.length > 0} // disable if URL is filled
          />
          <Label>URL</Label>
          <Input
            placeholder="Enter URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={description.length > 0} // disable if Description is filled
          />
          <Button> Add</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
