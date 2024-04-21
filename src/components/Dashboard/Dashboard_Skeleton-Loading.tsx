// import UI components
import { Skeleton } from '../ui/skeleton';

function SkeletonDashboard() {
  return (
    <main className="px-6 flex flex-col p-12 space-y-6 rounded-xl  h-full grow bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] ">
      <Skeleton className="h-6 w-2/4 self-center m-5" />
      <div className="grid grid-rows-1 grid-cols-1 p-12 lg:p-0 lg:grid-cols-3 gap-8 w-full grow">
        <Skeleton className="flex flex-col w-full mx-auto h-full max-h-full bg-jet-200/70 hover:drop-shadow-lg" />
        <Skeleton className="flex flex-col w-full mx-auto h-full max-h-full bg-jet-200/70 hover:drop-shadow-lg" />
        <Skeleton className="flex flex-col w-full mx-auto h-full max-h-full bg-jet-200/70 hover:drop-shadow-lg" />
      </div>
    </main>
  );
}

export default SkeletonDashboard;
