import { useState } from "react";
import { Button } from "@genii/ui/components";
import { Clock, Pin, PlusCircle, Save, Trash } from "lucide-react";
import type { Note } from "./types";

interface NotesPanelProps {
  notes: Note[];
}

export function NotesPanel({ notes }: NotesPanelProps) {
  const [newNote, setNewNote] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to save the new note would go here
    setNewNote("");
    setIsEditing(false);
  };

  return (
    <div className="lg:col-span-4 space-y-6">
      {/* Notes list */}
      <div className="space-y-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`p-4 rounded-lg border ${
              note.pinned ? "bg-yellow-50 border-yellow-200" : "bg-white border-gray-100"
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{note.timestamp}</span>
              </div>
              <div className="flex space-x-1">
                {note.pinned && <Pin className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Trash className="h-4 w-4 text-gray-400" />
                </Button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{note.content}</p>
          </div>
        ))}
      </div>

      {/* Add new note */}
      {isEditing ? (
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <textarea
              placeholder="Write your note here..."
              className="w-full px-4 py-3 text-sm focus:outline-none min-h-[120px] resize-none"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
            />
            <div className="flex justify-between items-center p-2 bg-gray-50 border-t border-gray-200">
              <div className="flex space-x-2">
                <Button
                  type="submit"
                  variant="ghost"
                  size="sm"
                  className="text-xs h-8"
                  disabled={!newNote.trim()}
                >
                  <Save className="h-4 w-4 mr-1" />
                  Save
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-xs h-8"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-xs h-8"
                title="Pin note"
              >
                <Pin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <Button
          onClick={() => setIsEditing(true)}
          variant="outline"
          className="w-full justify-start text-muted-foreground border-dashed mt-4"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add a new note for this chapter
        </Button>
      )}
    </div>
  );
}
