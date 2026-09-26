import { Link } from 'react-router';
import { Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function NotFoundPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 text-center min-h-[60vh] gap-6">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-muted">
        <Terminal className="h-8 w-8 text-muted-foreground" />
      </div>
      
      <div className="space-y-2 max-w-md">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">404</h1>
        <p className="text-lg text-muted-foreground">
          The requested system path could not be resolved.
        </p>
      </div>

      <div className="pt-4">
        <Button asChild size="lg">
          <Link to="/">Return to Base</Link>
        </Button>
      </div>
    </div>
  );
}