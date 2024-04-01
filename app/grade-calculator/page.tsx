"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function GradeCalculatorPage() {
  const [values, setValues] = useState({
    homework: "",
    midterm: "",
    final: "",
  });

  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <main className="py-16 container flex items-center justify-center min-h-screen">
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle>Grade Calculator</CardTitle>
          <CardDescription>
            Enter your grades and see what you need to get on your final to get
            the grade you want.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <Label htmlFor="currentGrade">Current Grade</Label>
            <Input name="currentGrade" />
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
