"use client";
import { Boxes } from "./backgroundboxes";
import React, { useState } from "react";
import { IconCheck, IconCopy, IconPlayerPlay } from "@tabler/icons-react";

type Tab = {
  name: string;
  code: string;
  language: string;
};

const initialTabs: Tab[] = [
  {
    name: "JavaScript",
    code: `console.log("Hello, World!");`,
    language: "javascript",
  },
  {
    name: "Python",
    code: `print("Hello, World!")`,
    language: "python",
  },
  {
    name: "Java",
    code: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`,
    language: "java",
  },
];

export function BackgroundBoxesDemo() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState<Tab[]>(initialTabs);
  const [output, setOutput] = useState<string | null>(null);

  const copyToClipboard = async () => {
    const textToCopy = tabs[activeTab].code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTabs = [...tabs];
    newTabs[activeTab].code = e.target.value;
    setTabs(newTabs);
  };

  const executeCode = () => {
    const activeCode = tabs[activeTab].code;
    const activeLang = tabs[activeTab].language;

    if (activeLang === "javascript") {
      try {
        // Override console.log to capture output
        let capturedOutput = "";
        const originalLog = console.log;
        
        console.log = (...args) => {
          capturedOutput += args.join(" ") + "\n";
        };

        // Execute the JavaScript code
        eval(activeCode);

        // Restore console.log and update output
        console.log = originalLog;
        setOutput(capturedOutput || "No output from execution.");
      } catch (error) {
        setOutput("Error: " + error.message);
      }
    } else {
      setOutput(`Execution for ${activeLang} is not supported yet.`);
    }
  };

  return (
    <div className="h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      
      <div className="relative w-full rounded-lg bg-slate-900 p-4 font-mono text-sm">
        {/* Tab Navigation */}
        <div className="flex overflow-x-auto border-b border-slate-700 mb-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-3 py-2 text-xs transition-colors font-sans ${
                activeTab === index
                  ? "text-white border-b-2 border-blue-500"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Code Editor */}
        <div className="relative bg-[#1c1c1c] rounded-md overflow-hidden">
          <textarea
            value={tabs[activeTab].code}
            onChange={handleCodeChange}
            className="w-full h-60 bg-transparent text-white font-mono p-4 resize-none outline-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={executeCode}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            <IconPlayerPlay size={16} />
            Execute
          </button>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200"
          >
            {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
            Copy
          </button>
        </div>

        {/* Output Section */}
        {output !== null && (
          <div className="mt-6 p-4 bg-black text-green-400 rounded-md">
            <strong>Output:</strong>
            <pre className="mt-2">{output}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
