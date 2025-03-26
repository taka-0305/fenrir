"use client";

import PageLayout from "@/layouts/page/pageLayout";
import DetailContent from "./content";
import { Suspense } from "react";

export default function DetailPage() {
  return (
    <PageLayout>
      <Suspense>
        <DetailContent />
      </Suspense>
    </PageLayout>
  );
}
