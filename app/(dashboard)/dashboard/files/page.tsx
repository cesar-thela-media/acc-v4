import { hasRobollyConfig } from "@/lib/env";
import { FilesClient } from "./FilesClient";

export default function FilesPage() {
  return <FilesClient hasCertificates={hasRobollyConfig} />;
}
