import { ContentAdder } from "./contentadder";
import { NotesCard } from "./notescard";
import { ThemeProvider } from "./theme-provider";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function MainComponents() {
  return (
    <div className="min-h-screen w-[1600px] pb-5">
      <ThemeProvider>
        <div className="flex items-center justify-between  mx-auto px-5 py-5">
          <div className="font-bold text-6xl">Notes</div>
          <div className="flex gap-5">
            <AlertDialog>
              <Button size="lg" variant="secondary">
                <AlertDialogTrigger>Share Brain</AlertDialogTrigger>
              </Button>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Copy the link to share your brain
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    <Card className="flex justify-center items-center font-mono h-1.5">
                      brainbucket.com/share/435rvdf23d
                    </Card>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <Button>Copy </Button>
                  <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <ContentAdder />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-x-100 justify-items-center">
            <NotesCard
              title="Random title"
              img="https://media.licdn.com/dms/image/v2/D5622AQHSs7Tx5lkMbw/feedshare-shrink_800/B56Zjc6r.pHkAo-/0/1756053029809?e=1758758400&v=beta&t=hZ15aj0YeAHLvSU6I1WA6TVatw4-GBo8Jcp2aKQAxBg"
              url="s;fsddf"
            />
            <NotesCard
              title="Random title"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            />
            <NotesCard
              title="Random title"
              img="https://media.licdn.com/dms/image/v2/D5610AQFG2aWkXlU44g/image-shrink_800/B56ZjiQWsHHMAk-/0/1756142595526/M365-Social-Cards-8jpg?e=1756756800&v=beta&t=4nj7P0MwMg_yJu2czZ_7V69-aa-OstBHoa-j_sJWtd0"
              url="s;fsddf"
            />
            <NotesCard
              title="Random title"
              img="https://media.licdn.com/dms/image/v2/D5610AQFG2aWkXlU44g/image-shrink_800/B56ZjiQWsHHMAk-/0/1756142595526/M365-Social-Cards-8jpg?e=1756756800&v=beta&t=4nj7P0MwMg_yJu2czZ_7V69-aa-OstBHoa-j_sJWtd0"
              url="s;fsddf"
            />
            <NotesCard
              title="Random title"
              img="https://media.licdn.com/dms/image/v2/D5622AQHSs7Tx5lkMbw/feedshare-shrink_800/B56Zjc6r.pHkAo-/0/1756053029809?e=1758758400&v=beta&t=hZ15aj0YeAHLvSU6I1WA6TVatw4-GBo8Jcp2aKQAxBg"
              url="s;fsddf"
            />
            <NotesCard
              title="Random title"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            />
            <NotesCard
              title="Random title"
              img="https://media.licdn.com/dms/image/v2/D5610AQFG2aWkXlU44g/image-shrink_800/B56ZjiQWsHHMAk-/0/1756142595526/M365-Social-Cards-8jpg?e=1756756800&v=beta&t=4nj7P0MwMg_yJu2czZ_7V69-aa-OstBHoa-j_sJWtd0"
              url="s;fsddf"
            />
            <NotesCard
              title="Random title"
              img="https://media.licdn.com/dms/image/v2/D5610AQFG2aWkXlU44g/image-shrink_800/B56ZjiQWsHHMAk-/0/1756142595526/M365-Social-Cards-8jpg?e=1756756800&v=beta&t=4nj7P0MwMg_yJu2czZ_7V69-aa-OstBHoa-j_sJWtd0"
              url="s;fsddf"
            />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
