
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { date } = location.state || {};

  const mockData = {
    hotelName: "Hotel Kollet",
    reservationId: "#U7X1202",
    checkIn: "2024-01-20T15:00:00",
    checkOut: "2024-01-21T12:00:00",
    guests: 3,
    price: 1520.19,
    address: "Rua Luiz de Camões, 151, 90150-002 - Porto Alegre/RS",
    status: "Aguardando confirmações"
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm animate-fadeIn">
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-xl font-semibold">
                {mockData.hotelName}
              </h1>
              <p className="text-sm text-gray-500">
                {mockData.reservationId}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Check-in</p>
                    <p className="text-sm text-gray-600">
                      {format(new Date(mockData.checkIn), "PPp", { locale: ptBR })}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Check-out</p>
                    <p className="text-sm text-gray-600">
                      {format(new Date(mockData.checkOut), "PPp", { locale: ptBR })}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Número de Pessoas</h3>
                <p className="text-sm text-gray-600">{mockData.guests} Hóspedes</p>
                <div className="flex items-center text-sm text-red-500 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2" />
                  {mockData.status}
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Confirmar Hóspedes
              </Button>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Informações de Pagamento</h3>
                <p className="text-2xl font-semibold">
                  R${mockData.price.toFixed(2).replace(".", ",")}
                </p>
                <div className="flex items-center text-sm text-red-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2" />
                  Aguardando pagamento
                </div>
                <p className="text-sm text-gray-500">
                  Aguardando a confirmação de algum hóspede para liberar área de pagamento.
                </p>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Realizar Pagamento
              </Button>
            </div>

            <div className="space-y-4">
              <div className="h-64 bg-gray-100 rounded-lg" />
              <div className="space-y-2">
                <h3 className="flex items-center gap-2 font-medium">
                  <MapPin className="h-5 w-5" />
                  Endereço
                </h3>
                <p className="text-sm text-gray-600">{mockData.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t p-6">
          <Button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600">
            Realizar Check-in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
