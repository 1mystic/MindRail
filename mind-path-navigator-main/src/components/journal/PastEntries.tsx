
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PenTool } from "lucide-react";
import { format } from "date-fns";

interface JournalEntry {
  id: number;
  date: string;
  content: string;
  prompt: string;
}

interface PastEntriesProps {
  entries: JournalEntry[];
  onWriteClick: () => void;
}

const PastEntries = ({ entries, onWriteClick }: PastEntriesProps) => {
  return (
    <>
      {entries.length > 0 ? (
        <div className="space-y-6">
          {entries.map((entry) => (
            <Card key={entry.id} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-grow">
                    <div className="font-semibold mb-1">
                      {format(new Date(entry.date), "MMMM d, yyyy")}
                    </div>
                    <div className="italic text-sm text-mind-gray mb-3">
                      Prompt: {entry.prompt}
                    </div>
                    <p className="text-mind-gray-dark line-clamp-3">{entry.content}</p>
                  </div>
                  <Button variant="outline" className="flex-shrink-0">View</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <PenTool size={48} className="mx-auto mb-4 text-mind-gray" />
          <p className="text-mind-gray mb-4">You haven't written any journal entries yet.</p>
          <Button onClick={onWriteClick}>
            Write Your First Entry
          </Button>
        </div>
      )}
    </>
  );
};

export default PastEntries;
