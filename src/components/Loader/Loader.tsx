// import UI components
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { LoadingSpinner } from '../ui/loading';

function Loader() {
  return (
    <div className="flex justify-center h-1/5 min-w-full">
      <Card className=" w-2/4 p-4 vertical items-center">
        <CardHeader>
          <CardTitle>En cours de chargement...</CardTitle>
        </CardHeader>
        <CardContent>
          <LoadingSpinner />
        </CardContent>
      </Card>
    </div>
  );
}

export default Loader;
