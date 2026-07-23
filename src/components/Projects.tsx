"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "Easy Shopping",
    description:
      "Landing page responsiva desenvolvida com foco em experiência do usuário, responsividade e boas práticas de Front-end.",
    image: "/projects/easy-shopping.png",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    link: "#",
    github: "#",
  },

  {
    title: "Lumina Estética Avançada",
    description:
      "Site institucional premium desenvolvido com Next.js, Tailwind e animações modernas para uma experiência elegante.",
    image: "/projects/lumina.png",
    technologies: [
      "React",
      "Next.js",
      "Tailwind",
    ],
    link: "#",
    github: "#",
    featured: true,
  },
];


export default function Projects() {

  return (

    <section
      id="projects"
      className="relative overflow-hidden px-5 py-24 sm:px-8"
    >

      {/* Glow */}

      <div
        className="
          absolute
          right-0
          top-20
          h-[350px]
          w-[350px]
          rounded-full
          bg-yellow-400/10
          blur-[130px]
        "
      />


      <div className="relative mx-auto max-w-7xl">


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
            Projetos reais
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
            Construindo experiência
            <br />
            através da prática
          </h2>


          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-zinc-400
              sm:text-lg
            "
          >
            Projetos desenvolvidos para aplicar conhecimentos,
            criar portfólio e resolver problemas reais do mercado.
          </p>


        </motion.div>




        {/* Cards */}


        <div
          className="
            mt-14
            grid
            gap-10
            md:grid-cols-2
            lg:mx-auto
            lg:max-w-5xl
          "
        >


          {projects.map((project, index) => (

            <motion.div

              key={project.title}


              initial={{
                opacity: 0,
                y: 60,
              }}


              whileInView={{
                opacity: 1,
                y: 0,
              }}


              viewport={{
                once: true,
              }}


              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}


              whileHover={{
                rotateX: 5,
                rotateY: -5,
                scale: 1.03,
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
                bg-zinc-900/70
                transition-all
                duration-500

                ${
                  project.featured
                    ?
                    `
                    border-yellow-400/50
                    shadow-[0_0_60px_rgba(250,204,21,0.15)]
                    `
                    :
                    `
                    border-zinc-800
                    `
                }
              `}

            >


              {/* Brilho interno */}

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



              {/* Imagem */}


              <div
                className="
                  relative
                  aspect-video
                  overflow-hidden
                "
              >

                <Image

                  src={project.image}

                  alt={project.title}

                  fill

                  sizes="
                    (max-width:768px) 100vw,
                    50vw
                  "

                  className="
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "

                />


                {/* Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/20
                    transition
                    group-hover:bg-black/5
                  "
                />

              </div>





              {/* Conteúdo */}


              <div
                className="
                  relative
                  p-6
                "
              >


                {project.featured && (

                  <span
                    className="
                      absolute
                      right-6
                      top-6
                      rounded-full
                      bg-yellow-400
                      px-3
                      py-1
                      text-xs
                      font-black
                      text-black
                    "
                  >
                    DESTAQUE
                  </span>

                )}




                <h3
                  className="
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  {project.title}
                </h3>



                <p
                  className="
                    mt-4
                    leading-7
                    text-zinc-400
                  "
                >
                  {project.description}
                </p>




                {/* Tecnologias */}


                <div
                  className="
                    mt-5
                    flex
                    flex-wrap
                    gap-2
                  "
                >

                  {project.technologies.map((tech) => (

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




                {/* Botões */}


                <div
                  className="
                    mt-8
                    flex
                    flex-wrap
                    gap-4
                  "
                >


                  <a
                    href={project.link}

                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-yellow-400
                      px-5
                      py-2
                      text-sm
                      font-bold
                      text-black
                      transition
                      hover:scale-105
                      hover:bg-yellow-300
                    "
                  >

                    <ExternalLink className="h-4 w-4" />

                    Ver projeto

                  </a>




                  <a

                    href={project.github}

                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-zinc-700
                      px-5
                      py-2
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:border-yellow-400
                      hover:text-yellow-400
                    "

                  >

                    <Code2 className="h-4 w-4" />

                    Código

                  </a>


                </div>


              </div>



            </motion.div>

          ))}


        </div>


      </div>


    </section>

  );
}