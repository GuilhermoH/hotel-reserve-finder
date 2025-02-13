
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, User2Icon, QrCodeIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";

export const SearchForm = () => {
  const [date, setDate] = useState<Date>();
  const [surname, setSurname] = useState("");
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/results", { 
      state: { 
        date: date?.toISOString(),
        surname,
        code 
      } 
    });
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-md space-y-6 animate-fadeIn">
      <div className="space-y-2">
        <label className="text-lg font-medium flex items-center gap-2">
          Data de checkin ou checkout
          <span className="text-red-500">*</span>
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
              {date ? format(date, "PPP", { locale: ptBR }) : "Insira a data da sua reserva"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              locale={ptBR}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <label className="text-lg font-medium">Sobrenome da reserva</label>
        <div className="relative">
          <User2Icon className="absolute left-3 top-3 h-5 w-5 text-primary" />
          <Input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="pl-10"
            placeholder="Insira o sobrenome"
          />
        </div>
      </div>

      <div className="text-center text-gray-500">ou</div>

      <div className="space-y-2">
        <label className="text-lg font-medium">Código da reserva</label>
        <div className="relative">
          <QrCodeIcon className="absolute left-3 top-3 h-5 w-5 text-primary" />
          <Input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="pl-10"
            placeholder="Código da reserva"
          />
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-primary hover:bg-primary/90 text-white"
        disabled={!date && !surname && !code}
      >
        Encontrar Reserva
      </Button>
    </form>
  );
};
