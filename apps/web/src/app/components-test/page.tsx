"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const CodeBlock = ({ code }: { code: string }) => (
  <div className="w-full bg-gray-900 p-4 rounded-lg overflow-x-hidden">
    <pre className="text-gray-100 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
      <code className="text-sm whitespace-pre text-wrap">{code}</code>
    </pre>
  </div>
);

const componentCategories = [
  { name: "Display", id: "display" },
  { name: "Feedback", id: "feedback" },
  { name: "Forms", id: "forms" },
  { name: "Navigation", id: "navigation" },
  { name: "Overlays", id: "overlays" },
  { name: "Layout", id: "layout" },
  { name: "Animations", id: "animations" },
];

const codeExamples = {
  avatar: `import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,

  badge: `import { Badge } from "@/components/ui/badge"

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`,

  card: `import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>`,

  skeleton: `import { Skeleton } from "@/components/ui/skeleton"

<Skeleton className="h-4 w-[250px]" />
<Skeleton className="h-4 w-[200px]" />
<Skeleton className="h-4 w-[150px]" />`,

  alert: `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

          <Alert>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
</Alert>`,

  progress: `import { Progress } from "@/components/ui/progress"

<Progress value={33} className="w-[60%]" />`,

  toast: `import { toast } from "@/hooks/use-toast"

toast({
  title: "Scheduled: Catch up",
  description: "Friday, February 10, 2023 at 5:57 PM",
})

// Don't forget to add <Toaster /> to your root layout`,

  button: `import { Button } from "@/components/ui/button"

// Variants
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// States
<Button disabled>Disabled</Button>`,

  input: `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// With Label
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
        </div>

// Different types
<Input type="password" placeholder="Password" />
<Input disabled placeholder="Disabled input" />`,

  checkbox: `import { Checkbox } from "@/components/ui/checkbox"

const [checked, setChecked] = useState(false)

<Checkbox
  id="terms"
  checked={checked}
  onCheckedChange={(value) => setChecked(value === true)}
/>`,

  switch: `import { Switch } from "@/components/ui/switch"

const [checked, setChecked] = useState(false)

<Switch
  id="airplane-mode"
  checked={checked}
  onCheckedChange={setChecked}
/>`,

  select: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
  </SelectContent>
</Select>`,

  textarea: `import { Textarea } from "@/components/ui/textarea"

<Textarea
  placeholder="Type your message here."
  className="max-w-sm"
/>`,

  dropdown: `import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,

  tabs: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <p>Make changes to your account here.</p>
  </TabsContent>
  <TabsContent value="password">
    <p>Change your password here.</p>
  </TabsContent>
</Tabs>`,

  dialog: `import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        Dialog description goes here.
      </DialogDescription>
    </DialogHeader>
    <div>
      Your content here
    </div>
  </DialogContent>
</Dialog>`,

  alertDialog: `import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Show Alert Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
</AlertDialog>`,

  popover: `import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Title</h4>
        <p className="text-sm text-muted-foreground">
          Content goes here.
        </p>
      </div>
    </div>
  </PopoverContent>
</Popover>`,

  accordion: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,

  separator: `import { Separator } from "@/components/ui/separator"

// Horizontal separator
<Separator />

// Vertical separator
<Separator orientation="vertical" />

// With custom spacing
<Separator className="my-4" />`,

  fadeAnimation: `import { motion, AnimatePresence } from "framer-motion"

<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Your content here
    </motion.div>
  )}
</AnimatePresence>`,

  scaleRotateAnimation: `import { motion } from "framer-motion"

<motion.div
  whileHover={{ scale: 1.2, rotate: 180 }}
  whileTap={{ scale: 0.9 }}
  transition={{ 
    type: "spring", 
    stiffness: 260, 
    damping: 20 
  }}
>
  Hover me!
</motion.div>`,

  staggerAnimation: `import { motion } from "framer-motion"

<motion.ul
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }}
>
  {items.map((item, i) => (
    <motion.li
      key={i}
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {item}
    </motion.li>
  ))}
</motion.ul>`,

  dragAnimation: `import { motion } from "framer-motion"

<motion.div
  drag
  dragConstraints={{
    top: -100,
    left: -100,
    right: 100,
    bottom: 100,
  }}
  dragElastic={0.2}
  whileDrag={{ scale: 1.1 }}
>
  Drag me!
</motion.div>`,

  layoutAnimation: `import { motion, AnimatePresence } from "framer-motion"

const [selectedId, setSelectedId] = useState(null)

<div className="grid grid-cols-3 gap-2">
  {items.map((id) => (
    <motion.div
      key={id}
      layoutId={id}
      onClick={() => setSelectedId(id)}
    >
      {id}
    </motion.div>
  ))}
</div>

<AnimatePresence>
  {selectedId && (
    <motion.div
      layoutId={selectedId}
      className="fixed inset-0"
      onClick={() => setSelectedId(null)}
    >
      Expanded view
    </motion.div>
  )}
</AnimatePresence>`,

  pathAnimation: `import { motion } from "framer-motion"

<svg width="200" height="200" viewBox="0 0 200 200">
  <motion.path
    d="M 10 100 Q 100 10 190 100 T 190 100"
    stroke="#3b82f6"
    strokeWidth="3"
    fill="none"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  />
</svg>`,

  gestureAnimation: `import { motion } from "framer-motion"

<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log("Hover started")}
  onHoverEnd={() => console.log("Hover ended")}
  onTap={() => console.log("Tapped!")}
>
  Interactive Button
</motion.button>`,

  scrollAnimation: `import { motion } from "framer-motion"

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ 
    once: false,  // Animate every time it comes into view
    amount: 0.5   // Trigger when 50% visible
  }}
  transition={{ duration: 0.6 }}
>
  Scroll-triggered content
</motion.div>`,
};

export default function ComponentsTestPage() {
  const [switchChecked, setSwitchChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [progress, setProgress] = useState(33);
  const [isVisible, setIsVisible] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showCode, setShowCode] = useState<{ [key: string]: boolean }>({});

  const toggleCode = (componentName: string) => {
    setShowCode((prev) => ({ ...prev, [componentName]: !prev[componentName] }));
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container mx-auto p-8 max-w-full overflow-x-hidden">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">
            UI Components & Animation Library
          </h1>
          <p className="text-muted-foreground text-lg">
            A comprehensive showcase of UI components and Framer Motion
            animations
          </p>
        </header>

        <nav className="mb-12 sticky top-4 z-50 bg-white rounded-lg shadow-lg border border-gray-200 p-4 backdrop-blur-sm bg-white/95">
          <div className="flex flex-wrap gap-2">
            {componentCategories.map((category) => (
              <motion.div
                key={category.id}
                animate={
                  category.id === "animations"
                    ? {
                        rotate: [0, -5, 5, -5, 5, 0],
                        transition: {
                          duration: 0.5,
                          repeat: Infinity,
                          repeatDelay: 3,
                        },
                      }
                    : {}
                }
              >
                <Button
                  variant="secondary"
                  size="sm"
                  className="shadow-sm hover:shadow-md transition-shadow"
                  onClick={() => {
                    document.getElementById(category.id)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  {category.name}
                </Button>
              </motion.div>
            ))}
          </div>
        </nav>

        <div className="space-y-16">
          <section id="display" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8">Display Components</h2>
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Avatar</CardTitle>
                  <CardDescription>
                    User representation with image and fallback
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </div>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("avatar")}
                      className="mb-2"
                    >
                      {showCode.avatar ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.avatar && (
                      <CodeBlock code={codeExamples.avatar} />
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Badge</CardTitle>
                  <CardDescription>
                    Small status descriptors for UI elements
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <div className="flex gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </div>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("badge")}
                      className="mb-2"
                    >
                      {showCode.badge ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.badge && <CodeBlock code={codeExamples.badge} />}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Card</CardTitle>
                  <CardDescription>
                    Container for grouping related content
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <Card className="max-w-[350px] w-full">
                    <CardHeader>
                      <CardTitle>Create project</CardTitle>
                      <CardDescription>
                        Deploy your new project in one-click.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form>
                        <div className="grid w-full items-center gap-4">
                          <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input
                              id="name"
                              placeholder="Name of your project"
                            />
                          </div>
                        </div>
                      </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Cancel</Button>
                      <Button>Deploy</Button>
                    </CardFooter>
                  </Card>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("card")}
                      className="mb-2"
                    >
                      {showCode.card ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.card && <CodeBlock code={codeExamples.card} />}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skeleton</CardTitle>
                  <CardDescription>
                    Loading placeholder for content
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[150px]" />
                  </div>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("skeleton")}
                      className="mb-2"
                    >
                      {showCode.skeleton ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.skeleton && (
                      <CodeBlock code={codeExamples.skeleton} />
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="feedback" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8">Feedback Components</h2>
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Alert</CardTitle>
                  <CardDescription>
                    Displays important messages to users
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <div className="space-y-4">
                    <Alert>
                      <AlertTitle>Heads up!</AlertTitle>
                      <AlertDescription>
                        You can add components to your app using the cli.
                      </AlertDescription>
                    </Alert>
                    <Alert variant="destructive">
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>
                        Your session has expired. Please log in again.
                      </AlertDescription>
                    </Alert>
                  </div>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("alert")}
                      className="mb-2"
                    >
                      {showCode.alert ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.alert && <CodeBlock code={codeExamples.alert} />}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Progress</CardTitle>
                  <CardDescription>
                    Shows completion status of a task
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <div>
                    <Progress value={progress} className="w-[60%]" />
                    <div className="mt-4">
                      <Button
                        onClick={() =>
                          setProgress(Math.min(100, progress + 10))
                        }
                      >
                        Increase Progress
                      </Button>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("progress")}
                      className="mb-2"
                    >
                      {showCode.progress ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.progress && (
                      <CodeBlock code={codeExamples.progress} />
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Toast</CardTitle>
                  <CardDescription>Brief notification messages</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <Button
                    onClick={() => {
                      toast({
                        title: "Scheduled: Catch up",
                        description: "Friday, February 10, 2023 at 5:57 PM",
                      });
                    }}
                  >
                    Show Toast
                  </Button>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("toast")}
                      className="mb-2"
                    >
                      {showCode.toast ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.toast && <CodeBlock code={codeExamples.toast} />}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="forms" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8">Form Components</h2>
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Button</CardTitle>
                  <CardDescription>Trigger actions and events</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <div className="flex flex-wrap gap-2">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                    <Button size="sm">Small</Button>
                    <Button size="lg">Large</Button>
                    <Button disabled>Disabled</Button>
                  </div>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("button")}
                      className="mb-2"
                    >
                      {showCode.button ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.button && (
                      <CodeBlock code={codeExamples.button} />
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Input & Label</CardTitle>
                  <CardDescription>
                    Text input fields with labels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <div className="space-y-4 max-w-sm">
                    <div className="space-y-2">
                      <Label htmlFor="email">Your email address</Label>
                      <Input type="email" id="email" placeholder="Email" />
                    </div>
                    <Input type="password" placeholder="Password" />
                    <Input disabled placeholder="Disabled input" />
                  </div>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("input")}
                      className="mb-2"
                    >
                      {showCode.input ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.input && <CodeBlock code={codeExamples.input} />}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Checkbox</CardTitle>
                  <CardDescription>Binary choice input</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={checkboxChecked}
                      onCheckedChange={(value) =>
                        setCheckboxChecked(value === true)
                      }
                    />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("checkbox")}
                      className="mb-2"
                    >
                      {showCode.checkbox ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.checkbox && (
                      <CodeBlock code={codeExamples.checkbox} />
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Switch</CardTitle>
                  <CardDescription>Toggle between two states</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="airplane-mode"
                      checked={switchChecked}
                      onCheckedChange={setSwitchChecked}
                    />
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
                  </div>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("switch")}
                      className="mb-2"
                    >
                      {showCode.switch ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.switch && (
                      <CodeBlock code={codeExamples.switch} />
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Select</CardTitle>
                  <CardDescription>
                    Choose from a list of options
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="orange">Orange</SelectItem>
                    </SelectContent>
                  </Select>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("select")}
                      className="mb-2"
                    >
                      {showCode.select ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.select && (
                      <CodeBlock code={codeExamples.select} />
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Textarea</CardTitle>
                  <CardDescription>Multi-line text input</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <Textarea
                    placeholder="Type your message here."
                    className="max-w-sm"
                  />
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("textarea")}
                      className="mb-2"
                    >
                      {showCode.textarea ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.textarea && (
                      <CodeBlock code={codeExamples.textarea} />
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="navigation" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8">Navigation Components</h2>
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Dropdown Menu</CardTitle>
                  <CardDescription>Menu of actions and options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">Open Menu</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("dropdown")}
                      className="mb-2"
                    >
                      {showCode.dropdown ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.dropdown && (
                      <CodeBlock code={codeExamples.dropdown} />
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tabs</CardTitle>
                  <CardDescription>
                    Organize content into sections
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList>
                      <TabsTrigger value="account">Account</TabsTrigger>
                      <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                      <p>Make changes to your account here.</p>
                    </TabsContent>
                    <TabsContent value="password">
                      <p>Change your password here.</p>
                    </TabsContent>
                  </Tabs>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("tabs")}
                      className="mb-2"
                    >
                      {showCode.tabs ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.tabs && <CodeBlock code={codeExamples.tabs} />}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="overlays" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8">Overlay Components</h2>
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Dialog</CardTitle>
                  <CardDescription>
                    Modal dialog for user interactions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when
                          you&apos;re done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="dialog-name" className="text-right">
                            Name
                          </Label>
                          <Input
                            id="dialog-name"
                            defaultValue="Pedro Duarte"
                            className="col-span-3"
                          />
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("dialog")}
                      className="mb-2"
                    >
                      {showCode.dialog ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.dialog && (
                      <CodeBlock code={codeExamples.dialog} />
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alert Dialog</CardTitle>
                  <CardDescription>
                    Modal dialog for important confirmations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline">Show Alert Dialog</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("alertDialog")}
                      className="mb-2"
                    >
                      {showCode.alertDialog ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.alertDialog && (
                      <CodeBlock code={codeExamples.alertDialog} />
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popover</CardTitle>
                  <CardDescription>
                    Floating container for additional content
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline">Open popover</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <h4 className="font-medium leading-none">
                            Dimensions
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Set the dimensions for the layer.
                          </p>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("popover")}
                      className="mb-2"
                    >
                      {showCode.popover ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.popover && (
                      <CodeBlock code={codeExamples.popover} />
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="layout" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8">Layout Components</h2>
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Accordion</CardTitle>
                  <CardDescription>
                    Collapsible content sections
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Is it accessible?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Is it styled?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It comes with default styles that matches the other
                        components&apos; aesthetic.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("accordion")}
                      className="mb-2"
                    >
                      {showCode.accordion ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.accordion && (
                      <CodeBlock code={codeExamples.accordion} />
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Separator</CardTitle>
                  <CardDescription>
                    Visual divider between content
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium leading-none">
                        Radix Primitives
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        An open-source UI component library.
                      </p>
                    </div>
                    <Separator className="my-4" />
                    <div className="flex h-5 items-center space-x-4 text-sm">
                      <div>Blog</div>
                      <Separator orientation="vertical" />
                      <div>Docs</div>
                      <Separator orientation="vertical" />
                      <div>Source</div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("separator")}
                      className="mb-2"
                    >
                      {showCode.separator ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.separator && (
                      <CodeBlock code={codeExamples.separator} />
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="animations" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8">
              Framer Motion Animations
            </h2>
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Fade In/Out Animation</CardTitle>
                  <CardDescription>
                    Simple opacity transitions with AnimatePresence
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <div>
                    <Button
                      onClick={() => setIsVisible(!isVisible)}
                      className="mb-4"
                    >
                      Toggle Visibility
                    </Button>
                    <AnimatePresence>
                      {isVisible && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="p-4 bg-blue-100 rounded-lg"
                        >
                          <p>This content fades in and out smoothly</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("fadeAnimation")}
                      className="mb-2"
                    >
                      {showCode.fadeAnimation ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.fadeAnimation && (
                      <CodeBlock code={codeExamples.fadeAnimation} />
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Scale & Rotate Animation</CardTitle>
                  <CardDescription>
                    Hover to see scale and rotation effects
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <motion.div
                    className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mx-auto"
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  />
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("scaleRotateAnimation")}
                      className="mb-2"
                    >
                      {showCode.scaleRotateAnimation ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.scaleRotateAnimation && (
                      <CodeBlock code={codeExamples.scaleRotateAnimation} />
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Stagger Children Animation</CardTitle>
                  <CardDescription>
                    Sequential animations for list items
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <motion.ul
                    className="space-y-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                  >
                    {[
                      "First item",
                      "Second item",
                      "Third item",
                      "Fourth item",
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="p-3 bg-gray-100 rounded"
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("staggerAnimation")}
                      className="mb-2"
                    >
                      {showCode.staggerAnimation ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.staggerAnimation && (
                      <CodeBlock code={codeExamples.staggerAnimation} />
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Drag Animation</CardTitle>
                  <CardDescription>
                    Drag the box around with constraints
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <div className="relative h-64 bg-gray-50 rounded-lg overflow-hidden">
                    <motion.div
                      className="w-20 h-20 bg-green-500 rounded-lg cursor-move absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      drag
                      dragConstraints={{
                        top: -100,
                        left: -100,
                        right: 100,
                        bottom: 100,
                      }}
                      dragElastic={0.2}
                      whileDrag={{ scale: 1.1 }}
                    />
                  </div>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("dragAnimation")}
                      className="mb-2"
                    >
                      {showCode.dragAnimation ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.dragAnimation && (
                      <CodeBlock code={codeExamples.dragAnimation} />
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Layout Animation</CardTitle>
                  <CardDescription>
                    Click items to see smooth layout transitions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <div>
                    <div className="grid grid-cols-3 gap-2">
                      {["1", "2", "3", "4", "5", "6"].map((id) => (
                        <motion.div
                          key={id}
                          layoutId={id}
                          onClick={() => setSelectedId(id)}
                          className="p-8 bg-orange-400 rounded cursor-pointer text-white font-bold text-center"
                          whileHover={{ scale: 0.95 }}
                        >
                          {id}
                        </motion.div>
                      ))}
                    </div>
                    <AnimatePresence>
                      {selectedId && (
                        <motion.div
                          layoutId={selectedId}
                          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                          onClick={() => setSelectedId(null)}
                        >
                          <motion.div className="bg-orange-400 p-20 rounded-lg text-white text-4xl font-bold">
                            {selectedId}
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("layoutAnimation")}
                      className="mb-2"
                    >
                      {showCode.layoutAnimation ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.layoutAnimation && (
                      <CodeBlock code={codeExamples.layoutAnimation} />
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Path Animation</CardTitle>
                  <CardDescription>SVG path drawing animation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    className="mx-auto"
                  >
                    <motion.path
                      d="M 10 100 Q 100 10 190 100 T 190 100"
                      stroke="#3b82f6"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    />
                  </svg>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("pathAnimation")}
                      className="mb-2"
                    >
                      {showCode.pathAnimation ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.pathAnimation && (
                      <CodeBlock code={codeExamples.pathAnimation} />
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Gesture-Based Animation</CardTitle>
                  <CardDescription>
                    Different animations based on user gestures
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <motion.button
                    className="px-6 py-3 bg-indigo-500 text-white rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log("Hover started")}
                    onHoverEnd={() => console.log("Hover ended")}
                  >
                    Hover and Click Me
                  </motion.button>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("gestureAnimation")}
                      className="mb-2"
                    >
                      {showCode.gestureAnimation ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.gestureAnimation && (
                      <CodeBlock code={codeExamples.gestureAnimation} />
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Scroll-Triggered Animation</CardTitle>
                  <CardDescription>
                    Animation that triggers when scrolling into view
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 overflow-hidden">
                  <motion.div
                    className="p-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                  >
                    <p className="text-lg font-semibold">
                      I animate when you scroll to me!
                    </p>
                  </motion.div>
                  <Separator />
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode("scrollAnimation")}
                      className="mb-2"
                    >
                      {showCode.scrollAnimation ? "Hide" : "Show"} Code
                    </Button>
                    {showCode.scrollAnimation && (
                      <CodeBlock code={codeExamples.scrollAnimation} />
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
