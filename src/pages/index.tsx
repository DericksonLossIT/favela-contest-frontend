import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Favela Contest</title>
        <meta
          name="description"
          content="Favela Contest - O Game dos Crias, é um evento esportivo de skateboard voltado para o público das quebradas brasileiras! "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Events />
      <Bio />
      <SupportSection />
      <OurTeam />
      <Gallery />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;

const Footer: React.FC = () => {
  return (
    <footer className="footer items-center bg-neutral p-4 text-neutral-content">
      <div className="grid-flow-col items-center">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p>Copyright Favela Contest© 2023 - Todos os direitos reservados</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </div>
    </footer>
  );
};

const Navbar: React.FC = () => {
  return (
    <div className="navbar sticky top-0 z-10 bg-base-100">
      <div className="navbar-start">
        <a className="btn-ghost btn text-xl normal-case">
          <Image
            src="/logo.png"
            alt="Logo Favela Contest"
            width={64}
            height={64}
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Eventos</a>
          </li>
          <li>
            <a>Quem somos</a>
          </li>
          <li>
            <a>Galeria</a>
          </li>
          <li>
            <a>Como apoiar</a>
          </li>
          <li>
            <a>Contato</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

const Hero: React.FC = () => {
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

const Bio: React.FC = () => {
  return (
    <article className="prose-l prose flex min-w-full flex-col bg-base-200 px-12 pt-12 md:px-24">
      <div className="">
        <h1 className="text-left md:text-center">Quem Somos?</h1>
        <p>
          O Favela Contest é um projeto social realizado de maneira independente
          e que possui como objetivo impactar positivamente jovens em situação
          de vulnerabilidade social, especialmente aqueles residentes nas
          comunidades do Estado, sendo isto feito por meio de eventos em que se
          busca inserir o skateboarding perante a tal público alvo, bem como o
          desenvolvimento destes no esporte.
        </p>
        <p>
          Nesse sentido, o Favela visa minimizar as mazelas sociais e ser como
          um instrumento para o desenvolvimento socioemocional da juventude
          vulnerável, demonstrando que é possível a socialização entre todos,
          sem a divisão entre gêneros, com cooperativismo e, ainda, haver a
          melhora no aprendizado escolar e no condicionamento físico dos jovens,
          de sua coordenação motora e concentração, através da imersão na
          cultura do skateboarding.
        </p>
        <p>
          Com esse objetivo, o Favela Contest já realizou duas edições do evento
          “Favela Contest – O game dos crias” em duas comunidades de Porto
          Alegre, localizadas nos bairros Bom Jesus e Restinga, os quais
          proporcionaram à população de tais comunidades atrações no esporte,
          desafios com premiações, apresentações musicais de artistas locais e
          alimentação no local do evento.
        </p>
      </div>
    </article>
  );
};

const OurTeam: React.FC = () => {
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

interface AvatarProps {
  name: string;
  role: string;
}

const Avatar: React.FC<AvatarProps> = ({ name, role }: AvatarProps) => {
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

const Events: React.FC = () => {
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

interface EventCardProps {
  name: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({
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

const Gallery: React.FC = () => {
  return (
    <div className="prose-lg prose flex min-w-full flex-col bg-base-200 px-80 py-16">
      <h1 className="text-center">Galeria</h1>
      <div className="carousel rounded-box">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/800/arch" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn-circle btn">
              ❮
            </a>
            <a href="#slide2" className="btn-circle btn">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn-circle btn">
              ❮
            </a>
            <a href="#slide3" className="btn-circle btn">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn-circle btn">
              ❮
            </a>
            <a href="#slide4" className="btn-circle btn">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn-circle btn">
              ❮
            </a>
            <a href="#slide1" className="btn-circle btn">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactForm: React.FC = () => {
  return (
    <div className="prose-lg flex min-h-screen items-center justify-center bg-base-200">
      <div className="mx-auto w-full max-w-lg">
        <h1 className="text-4xl font-medium">Quer falar com a gente?</h1>
        <p className="mt-3">
          Envie um e-mail para{" "}
          <a href="mailto:favelacontest@gmail.com">favelacontest@gmail.com</a>{" "}
          ou através do formulário abaixo:
        </p>

        <form action="https://api.web3forms.com/submit" className="mt-10">
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <input
                type="text"
                name="name"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm  focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Seu nome
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                name="email"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm  focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Seu e-mail
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                name="message"
                rows={5}
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm  focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              ></textarea>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Sua mensagem
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="btn-primary btn  mt-5 rounded-md px-10 py-2"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
};

interface SupportCardProps {
  name: string;
  picture: string;
}

const SupportCard: React.FC<SupportCardProps> = ({
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

const SupportSection: React.FC = () => {
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
