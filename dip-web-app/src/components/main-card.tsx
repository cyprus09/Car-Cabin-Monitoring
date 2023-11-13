"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CardWithForm() {

  return (
    <div className="gradient min-h-screen display-flex justify-center align-center">
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Model</CardTitle>
        <CardDescription>Select which model you wish to explore.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Model</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="https://youtu.be/sHLLUrXlKNo">COCO (Object Recognition)</SelectItem>
                  <SelectItem value="https://youtu.be/7qzvKsNlfH0">Action (Drive&Act) + Object Recognition(COCO)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button onClick={() => {const selectElement = document.querySelector('select');
                if (selectElement) {
                  const url = selectElement.value;
                  window.open(url, '_blank');
                }
                }}>Show</Button>
      </CardFooter>
    </Card>
    </div>
  )
}
