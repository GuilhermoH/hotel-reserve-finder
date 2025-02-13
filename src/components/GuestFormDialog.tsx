
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";

interface GuestFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const GuestFormDialog = ({ open, onOpenChange }: GuestFormDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <DialogTitle className="text-xl">Hóspede 1</DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-base font-medium">Nome Completo</label>
            <Input placeholder="Insira seu nome completo aqui" />
          </div>

          <div className="space-y-2">
            <label className="text-base font-medium">E-mail</label>
            <Input type="email" placeholder="name@example.com" />
          </div>

          <div className="space-y-2">
            <label className="text-base font-medium">Gênero</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="masculino">Masculino</SelectItem>
                <SelectItem value="feminino">Feminino</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
                <SelectItem value="nao-informar">Prefiro não informar</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-base font-medium">Nacionalidade</label>
            <Select defaultValue="brasil">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="brasil">
                  🇧🇷 Brasil
                </SelectItem>
                <SelectItem value="portugal">
                  🇵🇹 Portugal
                </SelectItem>
                <SelectItem value="eua">
                  🇺🇸 Estados Unidos
                </SelectItem>
                <SelectItem value="outro">
                  Outro
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600">
            Prosseguir
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
