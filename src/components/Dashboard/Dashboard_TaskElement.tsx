import React, { useState, FormEvent, ChangeEvent } from 'react';
import { format } from 'date-fns';

// import UI components
import { Check, SquarePenIcon, Trash2 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
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
import { useToast } from '../ui/use-toast';

// import custom components
import { ITask } from '../../@types/coloc';
import getFormattedFallback from '../../utils/getFormattedFallback';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { deleteTask, updateTask } from '../../store/action/tasks';
import getLighterColor from '../../utils/getLighterShade';

interface TaskElementProps {
  task: ITask;
}

function TaskElement({ task }: TaskElementProps) {
  const [formData, setFormData] = useState({
    description: task.description,
    frequency: task.frequency,
    user_id: task.user_id,
    is_done: task.is_done,
  });
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const flatmatesList = useAppSelector(
    (state) => state.colocReducer.flatmatesList
  );
  const [errors, setErrors] = useState({
    descriptionError: '',
    frequencyError: '',
    assigneeError: '',
  });
  const [formSubmitError, setFormSubmitError] = useState<null | string>(null);

  // get assignee first name
  const assigneeFirstName =
    flatmatesList.find((flatmate) => flatmate.user_id === task.user_id)
      ?.firstname || 'Utilisateur inconnu';

  // get assignee color
  const assignee = flatmatesList.find(
    (flatmate) => flatmate.user_id === task.user_id
  );
  const assigneeColor = assignee ? assignee.color : '#f6f6f6';

  const lightenedAssigneeColor = getLighterColor(assigneeColor, 30);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const handleAssigneeIdChange = (assigneeId: string) => {
    const parsedUserId = parseInt(assigneeId, 10);
    setFormData({ ...formData, user_id: parsedUserId });
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

  const handleCheckboxChange = async () => {
    const updatedTaskStatus = { ...formData, is_done: !formData.is_done };
    setFormData(updatedTaskStatus);
    try {
      const response = await dispatch(
        updateTask({ tasks_id: task.tasks_id, ...updatedTaskStatus })
      );
      if (response.payload?.status === 200) {
        toast({
          description: 'Tâche mise à jour avec succès.',
          className: 'bg-jet-50 text-eden-600',
        });
      } else if (response.payload?.status === 401) {
        toast({
          description: 'Une erreur est survenue, veuillez réessayer.',
          className: 'bg-jet-50 text-cardinal-600',
        });
      }
    } catch (error: any) {
      toast({
        description: 'Une erreur est survenue, veuillez réessayer.',
        className: 'bg-jet-50 text-cardinal-600',
      });
    }
  };

  // define specific conditional classes to update syle and layout according to task status
  const cardStyleDetails = `flex flex-col items-center justify-center w-full mx-auto p-2 content-center min-h-24 border-solid[1px] dark:text-jet-600 dark:brightness-[0.6] ${
    formData.is_done ? 'opacity-50' : ''
  }`;
  const taskDescriptionStyleDetails = `text-sm ${
    formData.is_done ? 'line-through' : ''
  }`;
  const isTaskComplete = formData.is_done;

  const handleUpdateTaskFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
      const response = await dispatch(
        updateTask({ tasks_id: task.tasks_id, ...formData, is_done: false })
      );
      if (response.payload?.status === 200) {
        toast({
          description: 'La tâche a bien été mise à jour.',
          className: 'bg-jet-50 text-eden-600',
        });
        setDialogIsOpen(false);
      } else if (response.payload?.status === 401) {
        toast({
          description: 'Une erreur est survenue, veuillez réessayer.',
          className: 'bg-jet-50 text-cardinal-600',
        });
      }
    } catch (error: any) {
      setFormSubmitError('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  const handleDeleteTask = async () => {
    const taskId = task.tasks_id;
    if (taskId) {
      try {
        const response = await dispatch(deleteTask(taskId));
        if (response.payload?.status === 200) {
          toast({
            description: 'La tâche a bien été supprimée.',
            className: 'bg-jet-50 text-eden-600',
          });
        } else if (response.payload?.status === 401) {
          toast({
            description: 'Une erreur est survenue, veuillez réessayer.',
            className: 'bg-jet-50 text-cardinal-600',
          });
        }
      } catch (error: any) {
        setFormSubmitError('Une erreur est survenue. Veuillez réessayer.');
      }
    }
  };

  return (
    <Card
      className={cardStyleDetails}
      style={{
        backgroundColor: lightenedAssigneeColor,
        borderColor: assigneeColor,
      }}
    >
      <CardContent className="flex flex-col max-h-full space-y-2 w-full content-center items-center justify-center">
        <div className="flex task-details w-full items-center justify-center gap-4">
          <div className="checkbox flex w-[10%] items-center justify-center">
            <Checkbox
              className="w-4 h-4 bg-jet-50"
              id="is_done"
              onCheckedChange={handleCheckboxChange}
              checked={isTaskComplete}
            />
          </div>
          <div className="avatar-container flex w-[20%] items-center justify-center ">
            <Avatar
              className="flex h-10 w-10 sm:flex align rounded-3xl
                  justify-center items-center"
            >
              <AvatarFallback
                className="border-[1px] text-xs border-none"
                style={{ backgroundColor: assigneeColor }}
              >
                {getFormattedFallback(assigneeFirstName)}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="task-instructions flex flex-col w-[70%]">
            <p className={taskDescriptionStyleDetails}>{task.description}</p>
            <p className="text-xs">
              Avant le : {format(new Date(task.due_date), 'dd/MM/yyyy')}
            </p>
          </div>
          <div className="flex btns-container w-full space-x-3 justify-end">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="p-2"
                  variant="ghost"
                  disabled={isTaskComplete}
                >
                  <SquarePenIcon size={16} />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-jet-50 dark:bg-jet-700 dark:text-jet-50">
                <DialogHeader>
                  <DialogTitle>Modifier une tâche</DialogTitle>
                  <DialogDescription>
                    Vous pouvez modifier les détails d&rsquo;une tâche ici.
                  </DialogDescription>
                  {formSubmitError && (
                    <p className="text-cardinal-600 text-xs">
                      {formSubmitError}
                    </p>
                  )}
                </DialogHeader>
                <form
                  className="grid gap-4 py-4"
                  onSubmit={handleUpdateTaskFormSubmit}
                >
                  <div className="grid gap-2">
                    <Label htmlFor="description">Intitulé de la tâche</Label>
                    <Input
                      id="description"
                      name="description"
                      type="text"
                      value={formData.description}
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
                      value={formData.frequency}
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
                    <Select
                      onValueChange={handleAssigneeIdChange}
                      value={formData.user_id.toString()}
                    >
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
                    {errors.assigneeError && (
                      <p className="text-cardinal-600 text-xs">
                        {errors.assigneeError}
                      </p>
                    )}
                  </div>
                  <div className="flex btns-container w-full justify-center">
                    <Button className="bg-eden-800 hover:bg-eden-600 dark:bg-eden-800 dark:hover:bg-eden-600">
                      <Check size={16} />
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger disabled={isTaskComplete}>
                <Button
                  className="p-2"
                  variant="ghost"
                  disabled={isTaskComplete}
                >
                  <Trash2 size={16} />
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-jet-100 dark:bg-jet-500 dark:text-jet-50">
                <DialogHeader>
                  <DialogTitle>
                    Voulez-vous vraiment supprimer cette tâche ?
                  </DialogTitle>
                  <DialogDescription className="flex flex-col space-y-6 items-center">
                    <p>Cette action est irréversible.</p>
                    <DialogFooter>
                      <div className="flex btns-container w-full space-x-3 justify-center">
                        <Button
                          className="bg-cardinal-600 hover:bg-cardinal-400 dark:bg-cardinal-800 dark:hover:bg-cardinal-600 dark:text-jet-50"
                          onClick={handleDeleteTask}
                        >
                          Supprimer
                        </Button>
                      </div>
                    </DialogFooter>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TaskElement;
