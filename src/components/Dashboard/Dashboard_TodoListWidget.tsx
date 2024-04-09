import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

function TodoListWidget() {
  return (
    <Card className="flex flex-col w-full mx-auto h-full bg-jet-50">
      <CardHeader>
        <CardTitle className="text-center text-2xl">To-do list</CardTitle>
      </CardHeader>
      <CardContent className=" grid grid-cols-1 grid-rows-2 gap-4 h-full max-h-full">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="main-stack-tasks">À faire</TabsTrigger>
            <TabsTrigger value="past-tasks">Passées</TabsTrigger>
          </TabsList>
          <TabsContent value="main-stack-tasks">
            {/* Donner la possibilité de filtrer par utilisateur actif ou toute la
            coloc Gérer ici les tâches dont la deadline n&rsquo;est pas encore
            passée même si elles sont terminées + les tâches non faites malgré
            deadline passée ? */}
          </TabsContent>
          <TabsContent value="past-tasks">
            {/* Gérer ici les tâches terminées dont la date d&rsquo;échéance est
            passée */}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

export default TodoListWidget;
