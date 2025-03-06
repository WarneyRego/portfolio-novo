import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      greeting: "Hi, Warney Rego",
      role: {
        webDev: 'Web Developer',
        uiDesigner: 'UI/UX Designer',
      },
      timeline: {
        title: 'Experience',
        subtitle: 'My professional journey and experience',
        experiences: [
          {
            "year": "2021",
            "title": "Beginning in Programming",
            "company": "",
            "description": "First steps in web development with HTML, CSS, and JavaScript."
          },
          {
            "year": "2022",
            "title": "Freelancing Experience and Improvement in React",
            "company": "",
            "description": "Worked as a freelancer, developing custom projects for various clients, which provided me with practical experience in creating on-demand solutions. At the same time, I deepened my knowledge in React and associated technologies, enhancing my web development skills."
          },
          {
            "year": "2023",
            "title": "Experience as an Assistant in the Maintenance of a Supermarket System",
            "company": "Progresso",
            "description": "My first contact with the system involved analyzing the existing code, identifying possible improvements, and fixing small bugs. This helped me understand the architecture used, the development standards adopted, and the client's specific needs."
          },
          {
            "year": "2024",
            "title": "Start of Software Engineering College",
            "company": "ICEV",
            "description": "Upon starting my Software Engineering degree, I deepened my knowledge in software engineering, agile methodologies, data structures, and system architecture. I learned to apply best development practices, work with Scrum and Kanban, optimize algorithms, and design scalable systems. Additionally, I improved my web development skills."
          },
          {
            "year": "2024",
            "title": "Development of an Article and Prototype for AMA (Friends of Autistics) Management System",
            "company": "AMA",
            "description": "In the Extension Project course, I developed a prototype of a management system for AMA (Friends of Autistics), starting with the creation of a detailed flowchart to map processes. The screens were designed in Figma, ensuring an intuitive design. The implementation was done with React for the frontend and Firebase for authentication and real-time database."
          },
          {
            "year": "2025",
            "title": "CS50’s Web Programming Certification - Harvard",
            "company": "CS50’s Harvard",
            "description": "I achieved the CS50’s Web Programming certification from Harvard, a course that deepens essential concepts such as HTML, CSS, JavaScript, Python, Django, APIs, and SQL databases. Throughout the course, I developed practical projects involving user authentication, API integration, and building scalable applications, reinforcing best practices in software architecture and security. This certification was crucial for my growth, consolidating my knowledge in modern technologies and full-stack development."
          }
          
        ],
      },
      techStack: {
        title: 'Technologies',
        subtitle: 'Technologies and tools I use to bring ideas to life',
        technologies: {
          htmlCss: {
            name: 'HTML/CSS',
            description: 'Frontend Fundamentals',
          },
          javascript: {
            name: 'JavaScript',
            description: 'Dynamic Scripting',
          },
          typescript: {
            name: 'TypeScript',
            description: 'Type-Safe Development',
          },
          react: {
            name: 'React',
            description: 'UI Components',
          },
          nextjs: {
            name: 'Next.js',
            description: 'Full-Stack Framework',
          },
          firebase: {
            name: 'Firebase',
            description: 'Backend Services',
          },
          tailwind: {
            name: 'Tailwind CSS',
            description: 'Utility-First CSS',
          },
          figma: {
            name: 'Figma',
            description: 'Design Tool',
          },
          docker:{
            name:'Docker',

          },
          aws:{
            name:'Amazon Web Services'
          }
        },
      },
      projects: {
        title: 'Projects',
        subtitle: 'Some of my recent work',
        viewLive: 'Live Demo',
        viewCode: 'Source Code',
        projects: [
          {
            title: 'E-commerce Platform',
            description: 'A modern e-commerce platform built with Next.js and Tailwind CSS.',
          },
          {
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates.',
          },
        ],
      },
      contact: {
        title: 'Contact',
        subtitle: "Let's work together on something great",
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
      },
    },
  },
  pt: {
    translation: {
      greeting: "Olá, eu sou o Warney Rego",
      role: {
        webDev: 'Desenvolvedor Web',
        uiDesigner: 'Designer UI/UX',
        react: 'Desenvolvedor React',
      },
      timeline: {
        title: 'Experiência',
        subtitle: 'Minha jornada profissional e experiência',
        experiences: [
          {
            year: '2021',
            title: 'Início na Programação',
            company: '',
            description: 'Primeiros passos no desenvolvimento web com HTML, CSS e JavaScript.',
          },
          {
            year: '2022',
            title: 'Experiência como Freelancer e Aperfeiçoamento em React',
            company: '',
            description: 'Atuei como freelancer, desenvolvendo projetos personalizados para diversos clientes, o que me proporcionou experiência prática na criação de soluções sob demanda. Paralelamente, aprofundei meus conhecimentos em React e tecnologias associadas, aprimorando minhas habilidades em desenvolvimento Web.',
          },
          {
            year: '2023',
            title: 'Experiência como Auxiliar na Manutenção de um Sistema de Supermercado',
            company: 'Progresso',
            description: 'Meu primeiro contato com o sistema envolveu analisar o código existente, identificar possíveis melhorias e corrigir pequenos bugs. Isso me ajudou a compreender a arquitetura utilizada, os padrões de desenvolvimento adotados e as necessidades específicas do cliente.',
          },
          {
            year: '2024',
            title: 'Início da Faculdade de Engenharia de Software',
            company: 'ICEV',
            description: 'Ao iniciar a faculdade de Engenharia de Software, aprofundei meus conhecimentos em engenharia de software, metodologias ágeis, estrutura de dados e arquitetura de sistemas. Aprendi a aplicar boas práticas de desenvolvimento, trabalhar com Scrum e Kanban, otimizar algoritmos e projetar sistemas escaláveis.Além disso, aprimorei minhas habilidades em desenvolvimento web',
          },
          {
            year: '2024',
            title: 'Desenvolvimento de Artigo e Protótipo de Sistema de Gestão para a AMA (Amigos dos Autistas)',
            company: 'AMA',
            description: 'Na Matéria Projeto de Extensão Desenvolvi um protótipo de sistema de gestão para a AMA (Amigos do Autismo), iniciando com a criação de um fluxograma detalhado para mapear os processos. As telas foram projetadas no Figma, garantindo um design intuitivo.A implementação foi feita com React para o frontend e Firebase para autenticação e banco de dados em tempo real. ',
          },
          {
            year: '2025',
            title: 'Certificação CS50’s Web Programming Havard',
            company: 'CS50´s Havard',
            description: 'Consegui a certificação CS50’s Web Programming de Harvard, um curso que aprofunda conceitos essenciais como HTML, CSS, JavaScript, Python, Django, APIs e banco de dados SQL. Durante o curso, desenvolvi projetos práticos que envolveram autenticação de usuários, integração com APIs e construção de aplicações escaláveis, reforçando boas práticas de arquitetura de software e segurança. Essa certificação foi fundamental para meu crescimento, consolidando meu conhecimento em tecnologias modernas e desenvolvimento full stack. ',
          },
        
        ],
      },
      techStack: {
        title: 'Tecnologias',
        subtitle: 'Tecnologias e ferramentas que uso para dar vida às ideias',
        technologies: {
          htmlCss: {
            name: 'HTML/CSS',
            description: 'Fundamentos Frontend',
          },
          javascript: {
            name: 'JavaScript',
            description: 'Programação Dinâmica',
          },
          typescript: {
            name: 'TypeScript',
            description: 'Desenvolvimento Tipado',
          },
          react: {
            name: 'React',
            description: 'Componentes UI',
          },
          nextjs: {
            name: 'Next.js',
            description: 'Framework Full-Stack',
          },
          firebase: {
            name: 'Firebase',
            description: 'Serviços Backend',
          },
          tailwind: {
            name: 'Tailwind CSS',
            description: 'CSS Utilitário',
          },
          figma: {
            name: 'Figma',
            description: 'Ferramenta de Design',
          },
          docker:{
            name:'Docker'
          },
          aws:{
            name:'Serviços Web da Amazon'
          }
        },
      },
      projects: {
        title: 'Projetos',
        subtitle: 'Alguns dos meus trabalhos recentes',
        viewLive: 'Ver Demo',
        viewCode: 'Ver Código',
        projects: [
          {
            title: 'Plataforma E-commerce',
            description: 'Uma plataforma moderna de e-commerce construída com Next.js e Tailwind CSS.',
            tech:['TypeScript','Tailwind'],
               
          },
          {
            title: 'App de Gestão de Tarefas',
            description: 'Uma aplicação colaborativa de gestão de tarefas com atualizações em tempo real.',
          },
        ],
      },
      contact: {
        title: 'Contato',
        subtitle: 'Vamos trabalhar juntos em algo incrível',
        name: 'Nome',
        email: 'Email',
        message: 'Mensagem',
        send: 'Enviar Mensagem',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;