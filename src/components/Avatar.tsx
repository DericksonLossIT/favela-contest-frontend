export interface AvatarProps {
  name: string;
  role: string;
}

export const Avatar: React.FC<AvatarProps> = ({ name, role }: AvatarProps) => {
  return (
    <div className="not-prose avatar flex flex-col items-center">
      <div className="w-60 rounded-full">
        <img src="https://placeimg.com/240/240/people" />
      </div>
      <h1 className="-mb-1 pt-10 text-3xl">{name}</h1>
      <p className="pt-5 text-xs">
        <b>{role}</b>
      </p>
    </div>
  );
};
