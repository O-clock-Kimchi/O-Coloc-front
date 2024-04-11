// import UI components
import { CirclePlus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import TaskElement from './Dashboard_TaskElement';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from '../ui/select';

import { Input } from '../ui/input';

function TodoListWidget() {
  return (
    <Card className="flex flex-col w-full mx-auto h-full grow bg-jet-200/70 hover:drop-shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-2xl">To-do list</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col h-full grow space-y-12 w-full">
        <div className="to-do-settings flex flex-col w-full p-3 h-[20%] space-y-3">
          <p>Afficher</p>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Toutes les tâches</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Uniquement mes tâches</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="tasks-list flex flex-col w-full space-y-3 h-[80%] max-h-[85%] overflow-y-auto">
          <TaskElement />
        </div>

        <Sheet>
          <SheetTrigger className="button-container flex flex-col h-[10%] w-full justify-end  items-center">
            <Button className="flex space-x-3" variant="default">
              <CirclePlus color="#FFFCF1" />
              <p>Ajouter une tâche</p>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px] bg-jet-50">
            <SheetHeader className="space-y-10">
              <SheetTitle>Ajouter une tâche</SheetTitle>
              <SheetDescription>
                <form className="space-y-6">
                  <div className="grid gap-2">
                    <Label htmlFor="task-title">Intitulé de la tâche</Label>
                    <Input
                      id="task-title"
                      name="task-title"
                      type="text"
                      placeholder="Acheter des oeufs"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="days">Délai (en jours)</Label>
                    <Input id="days" name="days" type="number" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="assignee">Attribuer la tâche</Label>
                    <Select id="assignee">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Prénom" />
                      </SelectTrigger>
                      <SelectContent className="bg-jet-50">
                        <SelectGroup>
                          <SelectLabel>Choisir...</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="">
                    <Button className="bg-eden-800">Créer la tâche</Button>
                  </div>
                </form>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
}

export default TodoListWidget;
