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
    <div className="modal-container flex w-4/5 h-1/4 mx-auto">
      <Card className="bg-jet-50 w-4/5">
        <CardHeader className="flex">
          <Button className="flex self-end" variant="ghost">
            <X onClick={onClose} />
          </Button>

          <CardTitle>Ajouter un.e coloc&rsquo;</CardTitle>
          <CardDescription>
            Transmettez-lui le code secret de la colocation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="copy-to-clipboard-container flex space-x-3">
            <Input
              type="text"
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
    </div>
  );
}

export default AddFlatmateModal;
