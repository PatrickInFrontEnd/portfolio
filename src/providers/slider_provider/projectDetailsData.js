const projectDetailsData = {
  1: {
    title: "Get Creative Every Day",
    overlayText: "GET CREATIVE!",
    images: [
      "/images/projects/1/1.png",
      "/images/projects/1/2.png",
      "/images/projects/1/3_mobile.png",
    ],
    description:
      "Get Creative Every Day is an innovative platform designed to spark daily creativity and artistic expression. This web application serves as a digital playground where users can explore various creative tools, participate in daily challenges, and share their artistic journey with a like-minded community.",
    challenges:
      "The primary challenge was designing an interface that would motivate users to engage daily without becoming overwhelming. We needed to balance feature richness with simplicity, ensure cross-platform compatibility, and create an intuitive workflow that accommodates both beginners and experienced artists. Performance optimization was crucial to handle media-heavy content while maintaining smooth interactions.",
    solutionAndImpact:
      "We implemented a modular design system with GSAP animations for engaging micro-interactions and used React for efficient state management. The solution features a progressive onboarding system, daily inspiration feeds, and seamless sharing capabilities. The platform achieved a 78% daily return rate and helped over 2,000 users establish consistent creative habits within the first three months of launch.",
    technologies: [
      { name: "html", id: 1 },
      { name: "css", id: 2 },
      { name: "javascript", id: 3 },
      { name: "gsap", id: 4 },
      { name: "react", id: 5 },
      { name: "webpack", id: 6 },
      { name: "styled-components", id: 7 },
      { name: "figma", id: 8 },
    ],
    liveUrl: "https://get-creative-everyday-demo.netlify.app/",
    codeUrl: "https://github.com/PatrickInFrontEnd/get-creative-everyday-demo",
  },
  2: {
    title: "Zdrowe Dziecko - magazine site",
    overlayText: "ZDROWE DZIECKO",
    images: [
      "/images/projects/2/1.png",
      "/images/projects/2/2_mobile.png",
      "/images/projects/2/3.png",
      "/images/projects/2/4_mobile.png",
    ],
    description:
      "Zdrowe Dziecko is a comprehensive digital magazine platform dedicated to child health and wellness. The site serves as a trusted resource for parents, pediatricians, and childcare professionals, offering evidence-based articles, expert insights, and practical guidance on child development, nutrition, and healthcare.",
    challenges:
      "The main challenge was creating a content management system that could handle diverse medical content while maintaining accessibility standards for different audiences. We needed to implement a robust categorization system, ensure mobile-first responsive design for busy parents, and integrate social sharing features while maintaining medical content accuracy and compliance with health information standards.",
    solutionAndImpact:
      "We developed a custom CMS with Redux for state management and implemented advanced filtering and search capabilities. The platform features an intuitive article categorization system, expert author profiles, and seamless social integration. Since launch, the magazine has served over 50,000 families, reduced average consultation questions by 35%, and became a go-to resource for pediatric healthcare information in the region.",
    technologies: [
      { name: "html", id: 9 },
      { name: "css", id: 10 },
      { name: "javascript", id: 11 },
      { name: "gsap", id: 12 },
      { name: "react", id: 13 },
      { name: "redux", id: 14 },
      { name: "styled-components", id: 15 },
      { name: "webpack", id: 16 },
    ],
    liveUrl: "https://project-1-demo.netlify.app/",
    codeUrl: undefined,
  },
  3: {
    title: "Erasmus project",
    overlayText: "ERASMUS+",
    images: [
      "/images/projects/3/1.png",
      "/images/projects/3/2.png",
      "/images/projects/3/3_mobile.png",
      "/images/projects/3/4.png",
      "/images/projects/3/5.png",
    ],
    description:
      "The Erasmus+ digital platform is an educational hub designed to facilitate international student exchange programs and cross-cultural learning experiences. This comprehensive system connects European educational institutions, manages student applications, and provides resources for international academic collaboration.",
    challenges:
      "Creating a multilingual platform that could adapt to different educational systems across European countries while maintaining consistency was the primary challenge. We had to ensure GDPR compliance, implement complex user role management for students, coordinators, and institutions, and design workflows that accommodate varying academic calendars and requirements across different countries.",
    solutionAndImpact:
      "We built a scalable architecture with multi-language support and flexible user management systems. The platform features automated application processing, document management, and real-time communication tools. The solution has facilitated over 1,200 student exchanges, reduced administrative processing time by 60%, and strengthened partnerships between 45 educational institutions across 12 European countries.",
    technologies: [
      { name: "html", id: 17 },
      { name: "css", id: 18 },
      { name: "javascript", id: 19 },
    ],
    liveUrl: "https://szkolenia-erasmus.org/",
    codeUrl: undefined,
  },
  4: {
    title: "Cybersecurity SaaS platform",
    overlayText: "CYBER SECURITY",
    images: [
      "/images/projects/4/1.jpeg",
      "/images/projects/4/2.webp",
      "/images/projects/4/3.webp",
      "/images/projects/4/4.webp",
      "/images/projects/4/5.webp",
    ],
    description:
      "A comprehensive cybersecurity SaaS platform designed to help organizations assess, monitor, and mitigate cyber risks in real-time. This enterprise-grade solution provides automated vulnerability scanning, threat intelligence integration, and comprehensive risk assessment tools to protect businesses from evolving cyber threats.",
    challenges:
      "The primary challenge was building a platform that could handle massive amounts of security data while maintaining real-time processing capabilities. We needed to create an intuitive dashboard for complex security metrics, ensure enterprise-level security standards, integrate with multiple third-party security tools, and design scalable architecture that could handle high-volume threat detection and analysis.",
    solutionAndImpact:
      "We architected a robust cybersecurity platform using React and TypeScript for the frontend, with Redux for complex state management and Firebase for real-time data synchronization. The solution features automated threat detection, comprehensive reporting dashboards, and seamless integration with existing security infrastructure. The platform has helped over 150 organizations reduce their cyber risk exposure by 65% and decrease incident response time by 80%.",
    technologies: [
      { name: "html", id: 20 },
      { name: "css", id: 21 },
      { name: "javascript", id: 22 },
      { name: "typescript", id: 23 },
      { name: "react", id: 24 },
      { name: "redux", id: 25 },
      { name: "figma", id: 26 },
      { name: "webpack", id: 27 },
      { name: "firebase", id: 28 },
    ],
    liveUrl:
      "https://startup-house.com/case-studies/cyber-risk-mitigation-platform",
    codeUrl: undefined,
  },
  5: {
    title: "Banking & Real Estate SaaS platform",
    overlayText: "FINTECH SOLUTION",
    images: [
      "/images/projects/5/1.png",
      "/images/projects/5/2.png",
      "/images/projects/5/3.png",
    ],
    description:
      "An innovative SaaS platform that bridges the gap between banking and real estate industries, providing comprehensive financial tools for property investments, mortgage management, and real estate portfolio analysis. This platform serves financial institutions, real estate professionals, and individual investors with advanced analytics and streamlined transaction processing.",
    challenges:
      "The main challenge was creating a secure, compliant platform that could handle sensitive financial data while integrating complex banking APIs and real estate market data. We needed to ensure regulatory compliance across multiple jurisdictions, implement robust security measures for financial transactions, design intuitive interfaces for diverse user types, and create real-time analytics for market trends and investment opportunities.",
    solutionAndImpact:
      "We developed a sophisticated platform using Next.js for optimal performance and TypeScript for type safety, with comprehensive testing and security protocols. The solution features advanced financial modeling, automated compliance checking, and real-time market analysis. The platform has processed over $50M in real estate transactions, served 200+ financial institutions, and reduced loan processing time by 70% while maintaining 99.9% security compliance.",
    technologies: [
      { name: "html", id: 29 },
      { name: "css", id: 30 },
      { name: "javascript", id: 31 },
      { name: "typescript", id: 32 },
      { name: "react", id: 33 },
      { name: "nextjs", id: 34 },
      { name: "figma", id: 35 },
      { name: "webpack", id: 36 },
    ],
    liveUrl: undefined,
    codeUrl: undefined,
  },
  6: {
    title: "E-commerce platform for filmmakers",
    overlayText: "FILMMAKER'S STORE",
    images: [
      "/images/projects/6/1.png",
      "/images/projects/6/2_mobile.png",
      "/images/projects/6/3.png",
      "/images/projects/6/4.png",
      "/images/projects/6/5.png",
    ],
    description:
      "A specialized e-commerce platform designed exclusively for the filmmaking community, enabling creators to buy, sell, and rent professional film equipment, digital assets, and creative services. This marketplace connects filmmakers worldwide, facilitating collaboration and resource sharing within the creative industry.",
    challenges:
      "The challenge was creating a niche marketplace that could handle diverse product types from physical equipment to digital licenses, implement secure payment systems for high-value transactions, design user-friendly interfaces for both buyers and sellers, and establish trust mechanisms for peer-to-peer transactions. We also needed to accommodate different international shipping requirements and currency options.",
    solutionAndImpact:
      "We built a comprehensive e-commerce solution using Next.js for server-side rendering and optimal SEO, with TypeScript ensuring code reliability and React providing dynamic user interactions. The platform features advanced search and filtering, secure payment processing, user verification systems, and integrated shipping solutions. The marketplace has facilitated over $2M in transactions, connected 5,000+ filmmakers globally, and reduced equipment sourcing time by 60% for independent creators.",
    technologies: [
      { name: "html", id: 37 },
      { name: "css", id: 38 },
      { name: "javascript", id: 39 },
      { name: "typescript", id: 40 },
      { name: "react", id: 41 },
      { name: "nextjs", id: 42 },
      { name: "figma", id: 43 },
      { name: "webpack", id: 44 },
    ],
    liveUrl: undefined,
    codeUrl: undefined,
  },
  7: {
    title: "Flappy bird",
    overlayText: "FLAPPY BIRD!",
    images: [
      "/images/projects/7/1.png",
      "/images/projects/7/2.png",
      "/images/projects/7/3.png",
      "/images/projects/7/4.png",
    ],
    description:
      "This modern recreation of the classic Flappy Bird game showcases advanced web game development techniques using vanilla JavaScript. The project features smooth animations, progressive difficulty scaling, responsive controls, and optimized performance for both desktop and mobile devices.",
    challenges:
      "The main technical challenges included implementing precise collision detection algorithms, maintaining consistent 60fps performance across different devices and browsers, creating smooth physics simulations for bird movement and gravity, and optimizing the game loop for mobile touch controls while ensuring responsive gameplay experience.",
    solutionAndImpact:
      "We engineered a highly optimized game engine with custom physics calculations and efficient rendering cycles. The implementation features adaptive difficulty scaling, smooth animations using requestAnimationFrame, and responsive touch/keyboard controls. The game achieved over 10,000 plays within the first month, maintained 60fps performance on 95% of tested devices, and served as a technical showcase for advanced JavaScript game development techniques.",
    technologies: [
      { name: "html", id: 45 },
      { name: "css", id: 46 },
      { name: "javascript", id: 47 },
      { name: "styled-components", id: 48 },
      { name: "webpack", id: 49 },
    ],
    liveUrl: "https://flappy-bird-jump.netlify.app/",
    codeUrl: "https://github.com/PatrickInFrontEnd/flappy-bird",
  },
}

export default projectDetailsData
