import Link from 'next/link';

import { Terminal } from 'lucide-react';

import { CatalogTabs } from '@/components/habbo/catalog/catalog-tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { fetchCatalogData } from '@/data/catalogData';

export default async function CatalogPage() {
  const catalogData = await fetchCatalogData();

  return (
    <div className="container mx-auto p-4">
      <Alert className="p-4 rounded-md mb-4">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Warning!</AlertTitle>
        <AlertDescription className="text-muted-foreground">
          The data is yet test data.
        </AlertDescription>
      </Alert>
      <div className="flex justify-end mb-4">
        <Link href="/catalog/compare" passHref>
          <Button>Compare Items</Button>
        </Link>
      </div>
      <CatalogTabs catalogData={catalogData} />
    </div>
  );
}
