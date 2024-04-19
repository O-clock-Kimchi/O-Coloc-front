import { useState, FormEvent } from 'react';

// import UI components
import { CirclePlus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
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
import { useToast } from '../ui/use-toast';
import { Switch } from '../ui/switch';

// import custom components
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { createTask } from '../../store/action/actions';

function TodoListWidget() {
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const flatmatesList = useAppSelector(
    (state) => state.colocReducer.flatmatesList
  );
  const tasksList = useAppSelector((state) => state.tasksReducer.tasksList);
  const currentUserId = useAppSelector(
    (state) => state.userReducer.user.userId
  );

  const [data, setData] = useState({
    description: '',
    frequency: 0,
    user_id: 0,
    is_done: false,
  });

  const [errors, setErrors] = useState({
    descriptionError: '',
    frequencyError: '',
    assigneeError: '',
  });
  const [formSubmitError, setFormSubmitError] = useState<null | string>(null);
  const [sheetIsOpen, setSheetIsOpen] = useState(false);
  const [displayUserTasksOnly, setDisplayUserTasksOnly] = useState(false);

  const filteredTasksList = tasksList.filter(
    (task) => task.user_id === currentUserId
  );

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setData({ ...data, [name]: value });
    if (name === 'description') {
      const descriptionIsValid = value.length >= 5;
      if (!descriptionIsValid) {
        setErrors({
          ...errors,
          descriptionError:
            "L'intitulé de la tâche doit contenir au moins 5 caractères.",
        });
      } else {
        setErrors({
          ...errors,
          descriptionError: '',
        });
      }
    }
    if (name === 'frequency') {
      const frequencyIsValid = parseInt(value, 10) >= 1;
      if (!frequencyIsValid) {
        setErrors({
          ...errors,
          frequencyError: 'Le nombre de jours ne peut pas être inférieur à 1.',
        });
      } else {
        setErrors({
          ...errors,
          frequencyError: '',
        });
      }
    }
  };

  // handle assignee selection in Select component (special function onInputChange())
  const handleAssigneeIdChange = (assigneeId: string) => {
    const parsedUserId = parseInt(assigneeId, 10);
    setData({ ...data, user_id: parsedUserId });
    const assigneeIsSelected = parsedUserId !== 0;
    if (!assigneeIsSelected) {
      setErrors({
        ...errors,
        assigneeError: 'Veuillez sélectionner un prénom dans la liste.',
      });
    } else {
      setErrors({
        ...errors,
        assigneeError: '',
      });
    }
  };

  const handleCreateTaskFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitError(null);

    const formIsValid =
      errors.descriptionError === '' &&
      errors.frequencyError === '' &&
      errors.assigneeError === '';
    if (!formIsValid) {
      setFormSubmitError('Veuillez vérifier votre saisie.');
      return;
    }

    try {
      const response = await dispatch(createTask(data));
      console.log('Response status:', response.payload?.status);
      if (response.payload?.status === 201) {
        console.log('Request successful:', response);
        setData({
          description: '',
          frequency: 0,
          user_id: 0,
          is_done: false,
        });
        setErrors({
          descriptionError: '',
          frequencyError: '',
          assigneeError: '',
        });
        toast({
          description: 'La tâche a bien été créée',
          className: 'bg-jet-50 text-eden-600',
        });
        setSheetIsOpen(false);
      } else if (response.payload?.status === 401) {
        console.log('Request failed:', response);
        setFormSubmitError('Une erreur est survenue. Veuillez réessayer.');
        setData({
          description: '',
          frequency: 0,
          user_id: 0,
          is_done: false,
        });
        setErrors({
          descriptionError: '',
          frequencyError: '',
          assigneeError: '',
        });
        toast({
          description: 'Votre session a expiré. Veuillez vous reconnecter.',
          className: 'bg-jet-50 text-cardinal-600',
        });
      }
    } catch (error: any) {
      console.error('Error:', error);
      setFormSubmitError('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <Card className="flex flex-col w-full mx-auto h-full grow bg-jet-50 content-between  dark:bg-jet-700">
      <CardHeader>
        <CardTitle className="text-center text-2xl">To-do list</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col h-full grow space-y-6 w-full">
        <div className="to-do-settings flex flex-col w-full p-3 max-h[300px] space-y-3">
          <div className="flex items-center space-x-2">
            <Switch
              id="user-tasks"
              onCheckedChange={() =>
                setDisplayUserTasksOnly(!displayUserTasksOnly)
              }
              className="data-[state=checked]:bg-eden-600 data-[state=unchecked]:bg-jet-500"
            />
            <Label htmlFor="user-tasks" className="">
              Afficher uniquement mes tâches
            </Label>
          </div>
        </div>
        <div className="tasks-list flex flex-col w-full space-y-3 h-[70%] max-h-[70%] overflow-y-scroll pt-6">
          {displayUserTasksOnly
            ? filteredTasksList.map((task) => (
                <TaskElement key={task.tasks_id} task={task} />
              ))
            : tasksList.map((task) => (
                <TaskElement key={task.tasks_id} task={task} />
              ))}
        </div>
        {/* handling opening/closing on submission with: https://github.com/shadcn-ui/ui/issues/2839 */}
        <div className="flex flex-col-reverse grow items-center content-end">
          <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
            <SheetTrigger className="button-container w-[50%] flex flex-col">
              <Button className="flex space-x-3" variant="default">
                <CirclePlus color="#FFFCF1" />
                <p>Ajouter une tâche</p>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px] bg-jet-50 dark:text-jet-50">
              <SheetHeader className="space-y-10">
                <SheetTitle>Ajouter une tâche</SheetTitle>
                {formSubmitError && (
                  <p className="text-cardinal-600 text-xs">{formSubmitError}</p>
                )}
                <SheetDescription>
                  <form
                    className="space-y-6"
                    onSubmit={handleCreateTaskFormSubmit}
                  >
                    <div className="grid gap-2">
                      <Label htmlFor="description">Intitulé de la tâche</Label>
                      <Input
                        id="description"
                        name="description"
                        type="text"
                        placeholder="Acheter des oeufs"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    {errors.descriptionError && (
                      <p className="text-cardinal-600 text-xs">
                        {errors.descriptionError}
                      </p>
                    )}
                    <div className="grid gap-2">
                      <Label htmlFor="frequency">Délai (en jours)</Label>
                      <Input
                        id="frequency"
                        name="frequency"
                        type="number"
                        value={data.frequency}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    {errors.frequencyError && (
                      <p className="text-cardinal-600 text-xs">
                        {errors.frequencyError}
                      </p>
                    )}
                    <div className="grid gap-2">
                      <Label htmlFor="user_id">Assigner la tâche à</Label>
                      <Select onValueChange={handleAssigneeIdChange}>
                        <SelectTrigger className="w-full bg-jet-50 ">
                          <SelectValue
                            placeholder="Choisissez..."
                            className="bg-jet-50 "
                          />
                        </SelectTrigger>
                        <SelectContent className="bg-jet-50 ">
                          <SelectGroup>
                            <SelectLabel>Choisir...</SelectLabel>
                            {flatmatesList.map((flatmate) => (
                              <SelectItem
                                key={flatmate.user_id}
                                value={flatmate.user_id.toString()}
                              >
                                {flatmate.firstname}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    {errors.assigneeError && (
                      <p className="text-cardinal-600 text-xs">
                        {errors.assigneeError}
                      </p>
                    )}

                    <div className="">
                      <Button className="bg-eden-800">Créer la tâche</Button>
                    </div>
                  </form>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </CardContent>
    </Card>
  );
}

export default TodoListWidget;
