import { useState } from 'react';
import { format } from 'date-fns';

// import UI components
import {
  Check,
  SquarePenIcon,
  X,
  Trash2,
  Calendar as CalendarIcon,
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from '../ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Calendar } from '../ui/calendar';

// import custom components
import { ITask } from '../../@types/coloc';
import getFormattedFallback from '../../utils/getFormattedFallback';
import { useAppSelector } from '../../hooks/redux';

interface TaskElementProps {
  task: ITask;
}

function TaskElement({ task }: TaskElementProps) {
  const [date, setDate] = useState<Date>();
  const flatmatesList = useAppSelector(
    (state) => state.colocReducer.flatmatesList
  );
  const tasksList = useAppSelector((state) => state.tasksReducer.tasksList);

  // get assignee first name
  const assigneeFirstName =
    flatmatesList.find((flatmate) => flatmate.user_id === task.user_id)
      ?.firstname || 'Utilisateur inconnu';

  // get assignee color
  const assigneeColor = flatmatesList.find(
    (flatmate) => flatmate.user_id === task.user_id
  )?.color;

  return (
    <Card className="flex flex-col w-full mx-auto p-1 bg-cardinal-100 content-center min-h-24">
      <CardContent className="flex flex-col max-h-full space-y-2 w-full content-center ">
        <div className="flex task-details w-full items-center justify-center">
          <div className="checkbox flex w-[10%] items-center justify-center">
            <Checkbox className="w-4 h-4" id="is-complete" />
          </div>
          <div className="task-instructions flex flex-col w-[70%]">
            <p className="text-sm">{task.description}</p>
            <p className="text-xs">
              Avant le : {format(new Date(task.due_date), 'dd/MM/yyyy')}
            </p>
          </div>
          <div className="avatar-container flex w-[20%] items-center justify-center ">
            <Avatar
              className="flex h-10 w-10 sm:flex align rounded-3xl
                  justify-center items-center"
            >
              <AvatarFallback className="border-[1px] border-solid">
                {getFormattedFallback(assigneeFirstName)}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex btns-container w-full space-x-3 justify-end">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="p-2" variant="ghost">
                <SquarePenIcon size={16} />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-jet-50">
              <DialogHeader>
                <DialogTitle>Modifier une tâche</DialogTitle>
                <DialogDescription>
                  Vous pouvez modifier les détails d&rsquo;une tâche ici.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="task-title" className="text-right">
                    Intitulé
                  </Label>
                  <Input
                    id="task-title"
                    defaultValue="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          'w-[280px] justify-start text-left font-normal',
                          !date && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? (
                          format(date, 'PPP')
                        ) : (
                          <span>Choisissez une date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-jet-100">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="task-title" className="text-right">
                    Pour
                  </Label>
                  <Select>
                    <SelectTrigger className="w-[250px]">
                      <SelectValue placeholder="Colocataire" />
                    </SelectTrigger>
                    <SelectContent className="bg-jet-50">
                      <SelectGroup>
                        <SelectLabel>Colocataire déjà choisi</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <div className="flex btns-container w-full space-x-3 bg-cardinal-200 justify-center">
                  <Button className="bg-eden-800 hover:bg-eden-600">
                    <Check size={16} />
                  </Button>
                  <Button className="bg-cardinal-600 hover:bg-cardinal-400">
                    <X size={16} />
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <Button className="p-2" variant="ghost">
                <Trash2 size={16} />
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-jet-100">
              <DialogHeader>
                <DialogTitle>
                  Voulez-vous vraiment supprimer cette tâche ?
                </DialogTitle>
                <DialogDescription className="flex flex-col space-y-6 items-center">
                  <p>Cette action est irréversible.</p>
                  <DialogFooter>
                    <div className="flex btns-container w-full space-x-3 bg-cardinal-200 justify-center">
                      <Button className="bg-cardinal-600 hover:bg-cardinal-400">
                        Supprimer
                      </Button>
                    </div>
                  </DialogFooter>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}

export default TaskElement;
