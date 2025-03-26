"use client";

import ResultsContent from "./content";
import { Suspense } from "react";

export default function ResultsPage() {
  return (
    <Suspense>
      <ResultsContent />
    </Suspense>
  );
}
