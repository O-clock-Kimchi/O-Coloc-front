import { useState } from 'react';

// import UI components
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

// import custom elements
import { useAppSelector } from '../../hooks/redux';

interface AddFlatmateModalProps {
  onClose: () => void;
}

function AddFlatmateModal({ onClose }: AddFlatmateModalProps) {
  const [codeIsCopied, setCodeIsCopied] = useState(false);
  const secretCode = useAppSelector(
    (state) => state.colocReducer.coloc.colocCode
  );
  const { toast } = useToast();

  const onCopyCode = () => {
    setCodeIsCopied(true);
    setTimeout(() => setCodeIsCopied(false), 3000);
  };

  return (
    <div className="modal-container flex w-4/5 mx-auto">
      <Card className="bg-jet-50 w-4/5 dark:bg-jet-700">
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
              value={secretCode}
              id="code"
              className="flex w-3/5"
              disabled
            />
            <CopyToClipboard text={secretCode} onCopy={onCopyCode}>
              <Button
                className=""
                variant="ghost"
                onClick={() => {
                  toast({
                    description: 'Copié dans le presse-papiers !',
                    className: 'bg-jet-50 text-eden-800',
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
