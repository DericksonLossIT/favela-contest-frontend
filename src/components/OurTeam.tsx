import { Avatar } from "./Avatar";

export const OurTeam: React.FC = () => {
  return (
    <section className="prose-l prose flex min-w-full flex-col bg-base-200 px-80">
      <h1 className="self-center md:py-10">Nossa Equipe</h1>
      <div className="grid grid-cols-3 self-center md:gap-64">
        <Avatar name="Pablo Abreu" role="Idealizador / Produtor Executivo" />
        <Avatar name="Derickson Loss" role="Idealizador / Produtor Executivo" />
        <Avatar name="Inaê Mônaco" role="Produção Executiva / Gestão" />
        <Avatar name="Nicolas Collar" role="Diretor de Arte / Filmmaker" />
        <Avatar name="Gabriel Garcia" role="Diretor de Arte / Filmmaker" />
        <Avatar
          name="Giovana Rossato"
          role="Diretora Criativa / Social Media"
        />
        <Avatar name="Matheus Brown" role="Fotógrafo" />
        <Avatar name="Luis Felipe Tasca" role="Diretor de som" />
        <Avatar name="Laura Padilha" role="Produção Geral" />
      </div>
    </section>
  );
};
