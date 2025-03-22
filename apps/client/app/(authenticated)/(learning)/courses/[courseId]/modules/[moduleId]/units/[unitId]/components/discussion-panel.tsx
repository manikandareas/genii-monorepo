import { useState } from "react";
import { Button } from "@genii/ui/components";
import { Send } from "lucide-react";
import type { Discussion } from "./types";

interface DiscussionPanelProps {
  discussions: Discussion[];
}

export function DiscussionPanel({ discussions }: DiscussionPanelProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be logic to submit the message
    setMessage("");
  };

  return (
    <div className="lg:col-span-4 space-y-4">
      {/* Discussion list */}
      <div className="space-y-4">
        {discussions.map((discussion) => (
          <div key={discussion.id} className="p-4 bg-white rounded-lg border border-gray-100">
            <div className="flex items-start mb-2">
              <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                {discussion.user.avatar ? (
                  <img
                    src={discussion.user.avatar}
                    alt={discussion.user.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-gray-500">
                    {discussion.user.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{discussion.user.name}</h3>
                  <span className="text-xs text-muted-foreground">{discussion.timestamp}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{discussion.message}</p>
              </div>
            </div>
            <div className="flex justify-between items-center ml-12">
              <div className="text-xs text-muted-foreground flex items-center">
                {discussion.replies > 0 ? (
                  <span>{discussion.replies} replies</span>
                ) : (
                  <span>Be the first to reply</span>
                )}
              </div>
              <Button variant="ghost" size="sm" className="text-xs h-8 px-2">
                Reply
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* New discussion input */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center mt-6 pt-4 border-t border-gray-100"
      >
        <input
          type="text"
          placeholder="Write a message..."
          className="flex-1 mr-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg p-2"
          disabled={!message.trim()}
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
