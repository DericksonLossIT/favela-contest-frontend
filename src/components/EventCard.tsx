export interface EventCardProps {
  name: string;
  description: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  name,
  description,
}: EventCardProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="mb-0.5 px-10 pt-10">
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn-primary btn">Conferir</button>
        </div>
      </div>
    </div>
  );
};
