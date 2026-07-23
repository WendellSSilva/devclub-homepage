"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Smartphone,
  Layers,
} from "lucide-react";


const formations = [
  {
    icon: Monitor,
    title: "Front-end",
    description:
      "Aprenda HTML, CSS, JavaScript, React e Next.js criando interfaces modernas e profissionais.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
    ],
  },

  {
    icon: Server,
    title: "Back-end",
    description:
      "Construa aplicações completas com APIs, bancos de dados e arquitetura profissional.",
    technologies: [
      "Node.js",
      "APIs",
      "Banco de Dados",
      "TypeScript",
    ],
  },

  {
    icon: Smartphone,
    title: "Mobile",
    description:
      "Desenvolva aplicativos modernos preparados para dispositivos móveis.",
    technologies: [
      "React Native",
      "Expo",
      "JavaScript",
    ],
  },

  {
    icon: Layers,
    title: "Full Stack",
    description:
      "Domine front-end e back-end criando projetos completos do início ao fim.",
    technologies: [
      "React",
      "Node.js",
      "Next.js",
      "SQL",
    ],
    featured: true,
  },
];


export default function Formations() {

  return (
    <section
      id="formations"
      className="px-6 py-24 sm:px-8"
    >

      <div className="mx-auto max-w-7xl">


        {/* Título */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.7,
          }}

          className="text-center"
        >

          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-yellow-400
            "
          >
            Formações
          </span>


          <h2
            className="
              mt-5
              text-4xl
              font-black
              text-white
              sm:text-5xl
            "
          >
            Escolha sua jornada
            <br />
            dentro da programação
          </h2>


          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-zinc-400
            "
          >
            Trilhas completas para você aprender as tecnologias mais utilizadas
            no mercado e construir projetos reais.
          </p>


        </motion.div>



        {/* Cards */}


        <div
          className="
            mt-14
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >


          {formations.map((formation, index) => {

            const Icon = formation.icon;


            return (

              <motion.div

                key={formation.title}


                initial={{
                  opacity: 0,
                  y: 50,
                }}


                whileInView={{
                  opacity: 1,
                  y: 0,
                }}


                viewport={{
                  once: true,
                }}


                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}


                whileHover={{
                  rotateX: 6,
                  rotateY: -6,
                  scale: 1.04,
                  y: -12,
                }}


                style={{
                  transformPerspective: 1000,
                }}


                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  p-7
                  transition-all
                  duration-300

                  ${
                    formation.featured
                      ? `
                        border-yellow-400/50
                        bg-yellow-400/5
                        shadow-[0_0_50px_rgba(250,204,21,0.15)]
                      `
                      :
                      `
                        border-zinc-800
                        bg-zinc-900/60
                      `
                  }
                `}
              >


                {/* brilho interno */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-yellow-400/10
                    via-transparent
                    to-transparent
                    opacity-0
                    transition
                    duration-500
                    group-hover:opacity-100
                  "
                />



                {formation.featured && (

                  <span
                    className="
                      absolute
                      right-5
                      top-5
                      rounded-full
                      bg-yellow-400
                      px-3
                      py-1
                      text-xs
                      font-black
                      text-black
                    "
                  >
                    MAIS POPULAR
                  </span>

                )}



                <div
                  className="
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-yellow-400/10
                  "
                >

                  <Icon
                    className="
                      h-6
                      w-6
                      text-yellow-400
                      transition
                      duration-300
                      group-hover:scale-110
                    "
                  />

                </div>




                <h3
                  className="
                    relative
                    mt-6
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  {formation.title}
                </h3>




                <p
                  className="
                    relative
                    mt-3
                    leading-7
                    text-zinc-400
                  "
                >
                  {formation.description}
                </p>




                <div
                  className="
                    relative
                    mt-6
                    flex
                    flex-wrap
                    gap-2
                  "
                >

                  {formation.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="
                        rounded-full
                        bg-yellow-400/10
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        text-yellow-400
                        transition
                        group-hover:bg-yellow-400
                        group-hover:text-black
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>



              </motion.div>

            );

          })}


        </div>


      </div>

    </section>
  );
}