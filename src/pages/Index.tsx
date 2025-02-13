
import { SearchForm } from "@/components/SearchForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-md">
        <img 
          src="/lovable-uploads/baipass-logo.png" 
          alt="Baipass" 
          className="h-8 mx-auto mb-8"
        />
        <div className="w-full space-y-6 bg-white rounded-2xl p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-center">
            Encontre sua Reserva
          </h1>
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
