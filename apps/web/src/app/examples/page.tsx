"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Copy,
  CheckCircle2,
  Sparkles,
  Clock,
  Palette,
  Music,
  Gamepad2,
  Brush,
} from "lucide-react";

// Memory Card Game Component
function MemoryCardGame() {
  const emojis = ["🎮", "🎯", "🎨", "🎭", "🎪", "🎬", "🎸", "🎺"];
  const [cards, setCards] = useState(() => {
    const doubled = [...emojis, ...emojis];
    return doubled
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false,
      }));
  });
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  const handleCardClick = (id: number) => {
    if (selectedCards.length === 2) return;
    if (cards[id].isMatched || cards[id].isFlipped) return;

    const newCards = [...cards];
    newCards[id].isFlipped = true;
    setCards(newCards);

    const newSelected = [...selectedCards, id];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      setMoves(moves + 1);
      if (cards[newSelected[0]].emoji === cards[newSelected[1]].emoji) {
        setTimeout(() => {
          const matchedCards = [...cards];
          matchedCards[newSelected[0]].isMatched = true;
          matchedCards[newSelected[1]].isMatched = true;
          setCards(matchedCards);
          setSelectedCards([]);
        }, 500);
      } else {
        setTimeout(() => {
          const flippedCards = [...cards];
          flippedCards[newSelected[0]].isFlipped = false;
          flippedCards[newSelected[1]].isFlipped = false;
          setCards(flippedCards);
          setSelectedCards([]);
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    const doubled = [...emojis, ...emojis];
    setCards(
      doubled
        .sort(() => Math.random() - 0.5)
        .map((emoji, index) => ({
          id: index,
          emoji,
          isFlipped: false,
          isMatched: false,
        }))
    );
    setSelectedCards([]);
    setMoves(0);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">Moves: {moves}</p>
        <Button onClick={resetGame} size="sm" variant="outline">
          Reset Game
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`h-20 rounded-lg transition-all duration-300 ${
              card.isFlipped || card.isMatched
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            } ${card.isMatched ? "opacity-50" : ""}`}
          >
            <span className="text-2xl">
              {card.isFlipped || card.isMatched ? card.emoji : "?"}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// Animated Gradient Background Component
function AnimatedGradient() {
  return (
    <div className="relative h-64 rounded-lg overflow-hidden">
      <div
        className="absolute inset-0 animate-gradient-x"
        style={{
          background:
            "linear-gradient(270deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #667eea 100%)",
          backgroundSize: "400% 400%",
        }}
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h3 className="text-2xl font-bold text-white drop-shadow-lg text-center">
          Smooth Color Transitions
        </h3>
      </div>
    </div>
  );
}

// Analog Clock Component
function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useState(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  });

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = hours * 30 + minutes * 0.5;

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-48 h-48">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r="95"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-border"
          />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="10"
              x2="100"
              y2="20"
              transform={`rotate(${i * 30} 100 100)`}
              stroke="currentColor"
              strokeWidth="2"
              className="text-muted-foreground"
            />
          ))}
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="40"
            transform={`rotate(${hourAngle} 100 100)`}
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-foreground"
          />
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="25"
            transform={`rotate(${minuteAngle} 100 100)`}
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="text-foreground"
          />
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="20"
            transform={`rotate(${secondAngle} 100 100)`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-primary"
          />
          <circle
            cx="100"
            cy="100"
            r="5"
            fill="currentColor"
            className="text-primary"
          />
        </svg>
        <p className="text-center mt-4 text-sm text-muted-foreground">
          {time.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}

// Drawing Canvas Component
function DrawingCanvas() {
  const [isDrawing, setIsDrawing] = useState(false);
  const [paths, setPaths] = useState<string[]>([]);
  const [currentPath, setCurrentPath] = useState("");

  const startDrawing = (
    e: React.MouseEvent<SVGSVGElement> | React.TouchEvent<SVGSVGElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    setIsDrawing(true);
    setCurrentPath(`M ${x} ${y}`);
  };

  const draw = (
    e: React.MouseEvent<SVGSVGElement> | React.TouchEvent<SVGSVGElement>
  ) => {
    if (!isDrawing) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    setCurrentPath((prev) => `${prev} L ${x} ${y}`);
  };

  const stopDrawing = () => {
    if (isDrawing && currentPath) {
      setPaths([...paths, currentPath]);
      setCurrentPath("");
    }
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    setPaths([]);
    setCurrentPath("");
  };

  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg">
        <svg
          width="100%"
          height="300"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="cursor-crosshair touch-none"
        >
          {paths.map((path, index) => (
            <path
              key={index}
              d={path}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-primary"
            />
          ))}
          {currentPath && (
            <path
              d={currentPath}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-primary"
            />
          )}
        </svg>
      </div>
      <Button onClick={clearCanvas} size="sm" variant="outline">
        Clear Canvas
      </Button>
    </div>
  );
}

// Music Visualizer Component
function MusicVisualizer() {
  const [bars] = useState(Array(20).fill(0));
  const [animatedBars, setAnimatedBars] = useState(bars);

  useState(() => {
    const interval = setInterval(() => {
      setAnimatedBars(bars.map(() => Math.random() * 100));
    }, 100);
    return () => clearInterval(interval);
  });

  return (
    <div className="flex items-end justify-center h-48 gap-1">
      {animatedBars.map((height, index) => (
        <div
          key={index}
          className="w-4 bg-gradient-to-t from-primary to-primary/50 rounded-t transition-all duration-100"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}

export default function ExamplesPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const examples = [
    {
      id: "memory-game",
      icon: Gamepad2,
      title: "Interactive Memory Card Game",
      prompt: "Turn the homepage into a simple memory card game with emojis",
      component: MemoryCardGame,
    },
    {
      id: "gradient",
      icon: Sparkles,
      title: "Animated Gradient Background",
      prompt: "Add a gradient background that shifts colors smoothly",
      component: AnimatedGradient,
    },
    {
      id: "clock",
      icon: Clock,
      title: "Live Analog Clock",
      prompt: "Create a beautiful analog clock that shows real time",
      component: AnalogClock,
    },
    {
      id: "canvas",
      icon: Brush,
      title: "Drawing Canvas",
      prompt: "Make a mini drawing app where I can doodle with my mouse",
      component: DrawingCanvas,
    },
    {
      id: "visualizer",
      icon: Music,
      title: "Music Visualizer",
      prompt: "Create animated bars that dance to microphone input",
      component: MusicVisualizer,
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl py-10 px-4">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Cursor AI Examples
          </h1>
          <p className="text-xl text-muted-foreground">
            See what you can build with simple prompts in Agent Mode
          </p>
          <div className="flex justify-center gap-2">
            <Badge variant="secondary">Interactive Demos</Badge>
            <Badge variant="secondary">Copy & Try</Badge>
            <Badge variant="secondary">Agent Mode</Badge>
          </div>
        </div>

        <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-green-600 mt-0.5" />
              <div className="space-y-2">
                <p className="text-sm font-medium text-green-900 dark:text-green-100">
                  This entire page was one-shot created with the following
                  prompt in agent mode:
                </p>
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <p className="text-sm font-mono text-green-800 dark:text-green-200">
                    &quot;Let&apos;s do something crazy. I want to create a new
                    page called examples, where we add the prompt to cursor
                    (like the ones we have in the getting started page) and then
                    show the user what that final product looks like&quot;
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Alert className="border-purple-200 bg-purple-50 dark:bg-purple-950/20">
          <Sparkles className="h-4 w-4 text-purple-600" />
          <AlertDescription className="text-purple-800 dark:text-purple-200">
            <strong>Try it yourself:</strong> Press{" "}
            <kbd className="px-1.5 py-0.5 text-xs bg-muted rounded">
              Cmd/Ctrl + I
            </kbd>{" "}
            in Cursor and paste any of these prompts to see the magic happen!
          </AlertDescription>
        </Alert>

        <div className="grid gap-8">
          {examples.map((example, index) => {
            const Icon = example.icon;
            const Component = example.component;
            return (
              <Card key={example.id} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="h-5 w-5" />
                    {example.title}
                  </CardTitle>
                  <CardDescription>
                    See the prompt and the final result side by side
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="demo" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="demo">Live Demo</TabsTrigger>
                      <TabsTrigger value="prompt">Prompt</TabsTrigger>
                    </TabsList>
                    <TabsContent value="demo" className="mt-6">
                      <div className="p-6 bg-muted/20 rounded-lg">
                        <Component />
                      </div>
                    </TabsContent>
                    <TabsContent value="prompt" className="mt-6">
                      <div className="space-y-4">
                        <div className="relative group">
                          <div className="p-4 bg-muted rounded-lg">
                            <p className="text-sm font-mono">
                              {example.prompt}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() =>
                              copyToClipboard(example.prompt, index)
                            }
                          >
                            {copiedIndex === index ? (
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                          <p className="text-sm font-medium text-purple-900 dark:text-purple-100 mb-2">
                            How to use this prompt:
                          </p>
                          <ol className="space-y-1 text-sm text-purple-800 dark:text-purple-200">
                            <li>1. Open any file in Cursor</li>
                            <li>
                              2. Press{" "}
                              <kbd className="px-1 py-0.5 text-xs bg-purple-200 dark:bg-purple-800 rounded">
                                Cmd/Ctrl + I
                              </kbd>
                            </li>
                            <li>3. Paste this prompt</li>
                            <li>4. Watch Cursor create something amazing!</li>
                          </ol>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Create Your Own!
            </CardTitle>
            <CardDescription>
              These examples are just the beginning
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              The beauty of Cursor AI is that you can describe anything you
              imagine and watch it come to life. Try these ideas or come up with
              your own:
            </p>
            <div className="grid gap-2">
              <div className="p-3 bg-muted/50 rounded">
                <p className="text-sm">
                  &quot;Create a todo list that celebrates when I complete tasks
                  with confetti&quot;
                </p>
              </div>
              <div className="p-3 bg-muted/50 rounded">
                <p className="text-sm">
                  &quot;Build a color palette generator with export
                  functionality&quot;
                </p>
              </div>
              <div className="p-3 bg-muted/50 rounded">
                <p className="text-sm">
                  &quot;Make a typing speed test with real-time WPM
                  calculation&quot;
                </p>
              </div>
              <div className="p-3 bg-muted/50 rounded">
                <p className="text-sm">
                  &quot;Design a particle system that follows my mouse
                  cursor&quot;
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
