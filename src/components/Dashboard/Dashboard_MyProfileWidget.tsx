import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

function MyProfileWidget() {
  return (
    <Card className="flex flex-col w-full mx-auto h-full bg-jet-100">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Votre profil</CardTitle>
      </CardHeader>
      <CardContent className=" grid grid-cols-1 grid-rows-2 gap-4 h-full bg-cardinal-400 max-h-full">
        Elements
      </CardContent>
    </Card>
  );
}

export default MyProfileWidget;
