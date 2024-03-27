import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function ClassLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-24">
      <Suspense
        fallback={
          <div className="flex flex-col space-y-4">
            {Array.from({ length: 5 }, (_, index) => (
              <Skeleton className="h-4" key={index} />
            ))}
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
}
