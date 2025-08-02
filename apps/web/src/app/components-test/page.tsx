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
import { useState } from "react";

const componentCategories = [
  { name: "Display", id: "display" },
  { name: "Feedback", id: "feedback" },
  { name: "Forms", id: "forms" },
  { name: "Navigation", id: "navigation" },
  { name: "Overlays", id: "overlays" },
  { name: "Layout", id: "layout" },
];

export default function ComponentsTestPage() {
  const [switchChecked, setSwitchChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [progress, setProgress] = useState(33);

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container mx-auto p-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">UI Components Library</h1>
          <p className="text-muted-foreground text-lg">
            A comprehensive showcase of all available UI components
          </p>
        </header>

        <nav className="mb-12 sticky top-4 z-10 bg-white rounded-lg shadow-lg border border-gray-200 p-4 backdrop-blur-sm bg-white/95">
          <div className="flex flex-wrap gap-2">
            {componentCategories.map((category) => (
              <Button
                key={category.id}
                variant="ghost"
                size="sm"
                className="hover:bg-gray-100"
                onClick={() => {
                  document.getElementById(category.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </nav>

        <div className="space-y-16">
          <section id="display">
            <h2 className="text-3xl font-bold mb-8">Display Components</h2>
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Avatar</CardTitle>
                  <CardDescription>
                    User representation with image and fallback
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
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
                <CardContent>
                  <div className="flex gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
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
                <CardContent>
                  <Card className="w-[350px]">
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skeleton</CardTitle>
                  <CardDescription>
                    Loading placeholder for content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[150px]" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="feedback">
            <h2 className="text-3xl font-bold mb-8">Feedback Components</h2>
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Alert</CardTitle>
                  <CardDescription>
                    Displays important messages to users
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Progress</CardTitle>
                  <CardDescription>
                    Shows completion status of a task
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={progress} className="w-[60%]" />
                  <div className="mt-4">
                    <Button
                      onClick={() => setProgress(Math.min(100, progress + 10))}
                    >
                      Increase Progress
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Toast</CardTitle>
                  <CardDescription>Brief notification messages</CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="forms">
            <h2 className="text-3xl font-bold mb-8">Form Components</h2>
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Button</CardTitle>
                  <CardDescription>Trigger actions and events</CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Input & Label</CardTitle>
                  <CardDescription>
                    Text input fields with labels
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-w-sm">
                    <div className="space-y-2">
                      <Label htmlFor="email">Your email address</Label>
                      <Input type="email" id="email" placeholder="Email" />
                    </div>
                    <Input type="password" placeholder="Password" />
                    <Input disabled placeholder="Disabled input" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Checkbox</CardTitle>
                  <CardDescription>Binary choice input</CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Switch</CardTitle>
                  <CardDescription>Toggle between two states</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="airplane-mode"
                      checked={switchChecked}
                      onCheckedChange={setSwitchChecked}
                    />
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
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
                <CardContent>
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Textarea</CardTitle>
                  <CardDescription>Multi-line text input</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Type your message here."
                    className="max-w-sm"
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="navigation">
            <h2 className="text-3xl font-bold mb-8">Navigation Components</h2>
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Dropdown Menu</CardTitle>
                  <CardDescription>Menu of actions and options</CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tabs</CardTitle>
                  <CardDescription>
                    Organize content into sections
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="overlays">
            <h2 className="text-3xl font-bold mb-8">Overlay Components</h2>
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Dialog</CardTitle>
                  <CardDescription>
                    Modal dialog for user interactions
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alert Dialog</CardTitle>
                  <CardDescription>
                    Modal dialog for important confirmations
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popover</CardTitle>
                  <CardDescription>
                    Floating container for additional content
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="layout">
            <h2 className="text-3xl font-bold mb-8">Layout Components</h2>
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Accordion</CardTitle>
                  <CardDescription>
                    Collapsible content sections
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Separator</CardTitle>
                  <CardDescription>
                    Visual divider between content
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
