export interface SupportCardProps {
  name: string;
  picture: string;
}

export const SupportCard: React.FC<SupportCardProps> = ({
  name,
  picture,
}: SupportCardProps) => {
  return (
    <div className="card w-64 bg-base-100 shadow-xl">
      <figure className="px-6">
        <img src={picture} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title mt-[-2rem]">{name}</h2>
        <div className="card-actions">
          <button className="btn-primary btn">Apoiar</button>
        </div>
      </div>
    </div>
  );
};
