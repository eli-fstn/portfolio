import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hey, I'm Elijah! feel free to ask anything about me.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history: nextMessages }),
      });

      if (!res.ok) throw new Error("Request failed");

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply ?? "Sorry, I couldn't get a response." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Something went wrong on my end, try again in a bit." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-998 flex flex-col items-end gap-3">
      {/* Chat panel */}
      {open && (
        <div className="w-80 sm:w-96 h-120 flex flex-col rounded-xl border border-[#2a2a30] bg-[#0c0c0f] shadow-2xl overflow-hidden animate-chat-in">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#2a2a30] bg-[#0f0f12]">
            <div>
              <p className="font-pixel font-bold text-[#f4f4f5] text-sm">Elijah Festin</p>
              <p className="font-mono text-[10px] text-[#8a8a92] flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
                Online
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-[#a0a0a8] transition duration-200 hover:text-[#f4f4f5]"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] font-mono text-xs leading-relaxed px-3 py-2 rounded-lg ${
                  m.role === "user"
                    ? "self-end bg-white text-[#0c0c0f]"
                    : "self-start bg-[#151518] border border-[#2a2a30] text-[#e4e4e7]"
                }`}
              >
                {m.content}
              </div>
            ))}

            {loading && (
              <div className="self-start bg-[#151518] border border-[#2a2a30] rounded-lg px-3 py-2.5 flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a0a0a8] animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#a0a0a8] animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#a0a0a8] animate-bounce" />
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-[#2a2a30] p-3 flex gap-2 items-center bg-[#0f0f12]">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="ask me something..."
              className="flex-1 bg-transparent font-mono text-xs text-[#f4f4f5] placeholder:text-[#8a8a92] outline-none max-h-24"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              aria-label="Send message"
              className="flex items-center justify-center w-7 h-7 rounded-md bg-white text-[#0c0c0f] transition duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90"
            >
              <Send size={13} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="w-14 h-14 rounded-full bg-white text-[#0c0c0f] flex items-center justify-center shadow-lg transition duration-200 hover:scale-105 active:scale-95"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      <style>{`
        @keyframes chat-in {
          from { opacity: 0; transform: translateY(12px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-chat-in {
          animation: chat-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}