// import UI components
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

function MyProfileWidget() {
  return (
    <Card className="flex flex-col w-full mx-auto h-full bg-jet-50 dark:bg-jet-700">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Votre profil</CardTitle>
      </CardHeader>
      <CardContent className=" grid grid-cols-1 grid-rows-2 gap-4 grow">
        <div className="flex flex-col min-h-3/5">Profile Elements</div>
        <div className="flex flex-col min-h-2/5">
          <img
            src="../../../public/RollerSkatingDoodle.svg"
            alt="Doodle showing a woman rollerskating"
            className="flex place-self-end mt-auto"
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default MyProfileWidget;
