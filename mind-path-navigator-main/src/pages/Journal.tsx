import { useState } from "react";
import { format } from "date-fns";
import DashboardLayout from "@/components/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import JournalEditor from "@/components/journal/JournalEditor";
import PastEntries from "@/components/journal/PastEntries";

const Journal = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [journalContent, setJournalContent] = useState("");
  const [prompt, setPrompt] = useState("What's on your mind today?");
  
  const prompts = [
    "What's on your mind today?",
    "What are three things you're grateful for today?",
    "Describe a challenge you faced recently and how you handled it.",
    "What values guided your decisions today?",
    "Reflect on something that made you feel anxious and how you responded.",
    "What biases might have influenced your thinking today?"
  ];
  
  const changePrompt = () => {
    const currentIndex = prompts.indexOf(prompt);
    const nextIndex = (currentIndex + 1) % prompts.length;
    setPrompt(prompts[nextIndex]);
  };
  
  const handleSave = () => {
    // In a real app, this would save to the database
    console.log({
      date: format(date, "yyyy-MM-dd"),
      content: journalContent,
      prompt
    });
    
    setJournalContent("");
    alert("Journal entry saved successfully!");
  };

  const pastEntries = [
    {
      id: 1,
      date: "2025-04-25",
      content: "Today I practiced the mindfulness exercise from the anxiety module...",
      prompt: "What coping strategies did you use today?"
    },
    {
      id: 2,
      date: "2025-04-23",
      content: "I noticed I was catastrophizing about my upcoming performance review...",
      prompt: "What cognitive distortions did you notice today?"
    },
    {
      id: 3,
      date: "2025-04-20",
      content: "I'm grateful for my conversation with Sam today...",
      prompt: "What are three things you're grateful for today?"
    }
  ];

  return (
    <DashboardLayout>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-mind-gray-dark">Journal</h1>
        <p className="text-mind-gray mt-1">
          Reflect on your thoughts, feelings, and experiences
        </p>
      </header>
      
      <Tabs defaultValue="write">
        <TabsList className="mb-6">
          <TabsTrigger value="write">Write</TabsTrigger>
          <TabsTrigger value="past-entries">Past Entries</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>
        
        <TabsContent value="write">
          <JournalEditor
            date={date}
            setDate={setDate}
            journalContent={journalContent}
            setJournalContent={setJournalContent}
            prompt={prompt}
            onPromptChange={changePrompt}
            onSave={handleSave}
          />
        </TabsContent>
        
        <TabsContent value="past-entries">
          <PastEntries 
            entries={pastEntries}
            onWriteClick={() => {
              const writeTab = document.querySelector('button[value="write"]') as HTMLButtonElement;
              if (writeTab) {
                writeTab.click();
              }
            }}
          />
        </TabsContent>
        
        <TabsContent value="calendar">
          <Card>
            <CardContent className="py-6">
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(date) => date && setDate(date)}
                  className="mx-auto"
                  modifiers={{
                    entry: pastEntries.map(entry => new Date(entry.date))
                  }}
                  modifiersStyles={{
                    entry: { backgroundColor: "hsl(var(--mind-purple))", color: "white" }
                  }}
                />
              </div>
              <div className="mt-4 text-center text-sm text-mind-gray">
                Dates highlighted in purple indicate days with journal entries.
                Click on a date to view or create an entry.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Journal;
