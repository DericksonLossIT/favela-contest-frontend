export const Hero: React.FC = () => {
  return (
    <main className="bg-base-200 px-12 pt-12 md:px-24">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://placeimg.com/260/260/arch"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Favela Contest</h1>
            <h1 className="py-3 text-3xl font-semibold">O game dos crias</h1>
            <p className="pt-4 pb-8">
              O favela contest é bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla bla bla bla
            </p>
            <div className="flex flex-row gap-6">
              <button className="btn-primary btn">Conheça o evento!</button>
              <button className="btn-primary btn">Apoie o evento!</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
