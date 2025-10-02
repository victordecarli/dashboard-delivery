import { API_FAKE } from '../../data/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const restaurantes = API_FAKE.restaurantes;

export default function Localizacao() {
  return (
    <div className="p-6">
      <div className="w-full bg-gray-100 rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 tracking-tight">
          Restaurantes
        </h1>
        <Accordion type="single" collapsible>
          {restaurantes.map((rest) => (
            <AccordionItem key={rest.id} value={String(rest.id)}>
              <AccordionTrigger className="flex items-center gap-3">
                <img
                  src={rest.imagem}
                  alt={rest.nome}
                  className="w-12 h-12 object-cover rounded-md border border-gray-200 bg-gray-50 shadow-sm"
                />
                <span className="font-medium">{rest.nome}</span>
              </AccordionTrigger>
              <AccordionContent className="flex gap-1 justify-between">
                <span className="text-sm text-gray-700">{rest.endereco}</span>
                <span className="text-gray-400">
                  Distância: {rest.distancia}
                </span>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
