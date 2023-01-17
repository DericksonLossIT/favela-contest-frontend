import { EventCard } from "./EventCard";

export const Events: React.FC = () => {
  return (
    <section className="prose-l prose flex min-w-full   flex-col bg-base-200 px-12 md:columns-3 md:px-24 lg:pt-12">
      <h1 className="pb-6 text-left md:text-center">Eventos</h1>
      <div className="md:flex-column sm:flex-column flex flex-col items-center  gap-6 md:flex-row">
        <EventCard
          name="Favela Contest 1"
          description="O evento que iniciou tudo, realizado no início de 2022, na Vila
          Brasília, em Porto Alegre"
        />
        <EventCard
          name="Favela Contest 2"
          description="Segundo evento realizado no fim de 2022, na pista da Apampa, no Bairro Restinga, extrema zona sul de Porto Alegre"
        />
        <EventCard
          name="Favela Contest 3"
          description="O evento que iniciou tudo, realizado no início de 2022, na Vila
          Brasília, em Porto Alegre"
        />
      </div>
    </section>
  );
};
