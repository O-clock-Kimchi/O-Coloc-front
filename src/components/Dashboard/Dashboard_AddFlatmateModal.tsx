import React, { useState } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { X, Copy } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

import { Toaster } from '../ui/toaster';
import { useToast } from '../ui/use-toast';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

interface AddFlatmateModalProps {
  onClose: () => void;
  secretCode: number;
}

function AddFlatmateModal({ onClose, secretCode }: AddFlatmateModalProps) {
  const [codeIsCopied, setCodeIsCopied] = useState(false);
  const { toast } = useToast();

  const onCopyCode = () => {
    setCodeIsCopied(true);
    setTimeout(() => setCodeIsCopied(false), 3000);
  };

  return (
    <Card className="flex flex-col bg-jet-100 w-full h-fit">
      <CardHeader className="flex">
        <Button className="flex self-end" variant="ghost">
          <X onClick={onClose} />
        </Button>
        <CardTitle className="text-md">Ajouter un.e coloc&rsquo;</CardTitle>

        <CardDescription>
          Transmettez-lui le code secret de la colocation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="copy-to-clipboard-container flex space-x-3">
          <Input
            type="text"
            name="copy-code"
            value={String(secretCode)}
            id="code"
            className="flex w-3/5"
            disabled
          />
          <CopyToClipboard text={String(secretCode)} onCopy={onCopyCode}>
            <Button
              className=""
              variant="ghost"
              onClick={() => {
                toast({
                  description: 'Copié dans le presse-papiers !',
                });
              }}
            >
              <Copy />
            </Button>
          </CopyToClipboard>
        </div>
        {codeIsCopied && <Toaster />}
      </CardContent>
    </Card>
  );
}

export default AddFlatmateModal;
