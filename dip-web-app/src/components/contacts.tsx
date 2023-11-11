"use client"

import * as React from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; description: string }[] = [
  {
    title: "Mayank",
    description:
      "Responsible for the entire web app, helping with action detection and consultations, project report",
  },
  {
    title: "LiJinyuang",
    description:
      "Implemented the Temporal Shift Module for Action Recognition",
  },
  {
    title: "Cyrus",
    description:
      "Implemented YOLOV7 for Object Recognition and writing project report",
  },
  {
    title: "Dominic",
    description: "Implemented the Alert Model for Object Detection",
  },
  {
    title: "Bing Hong",
    description:
      "Demo preparation and video making to test the models",
  },
  {
    title: "Hadee",
    description:
      "A Demo preparation and video making to test the models",
  },
]

export function Contacts() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Group Blogs
                </NavigationMenuLink>
            </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
    <NavigationMenuTrigger>Meet the Team</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <li key={component.title} className="flex items-center space-x-4">
                  <div>
                    <Avatar>
                      <AvatarImage src={`/images/${component.title}.jpeg`} alt="Avatar"/> 
                      <AvatarFallback>{component.title[0]}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <ListItem title={component.title}>{component.description}</ListItem>
                  </div>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <a href="#" target="_blank" rel="noopener noreferrer">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
            </NavigationMenuLink>
        </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <a href="https://github.com/cyprus09/Car-Cabin-Monitoring" target="_blank" rel="noopener noreferrer">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Github
            </NavigationMenuLink>
        </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"