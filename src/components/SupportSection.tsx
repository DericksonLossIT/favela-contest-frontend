import { SupportCard } from "./SupportCard";

export const SupportSection: React.FC = () => {
  return (
    <section className="prose flex min-w-full flex-col bg-base-200 py-12 px-80">
      <h1>Apoie o Favela Contest</h1>
      <div className="flex columns-2 gap-6 ">
        <SupportCard
          name="PicPay"
          picture="https://placeimg.com/400/225/arch"
        />
        <SupportCard
          name="Vakinha"
          picture="https://placeimg.com/400/225/arch"
        />
      </div>
    </section>
  );
};
