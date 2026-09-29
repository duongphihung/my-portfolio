import movie from '../assets/images/project-1.png';
import jobs from '../assets/images/project-2.jpg';
import hiking from '../assets/images/project-3.jpg';
import navigation from '../assets/images/project-4.jpg';
import countries from '../assets/images/project-5.png';

// Illustrative case studies: replace scope, role, features and results with your own.
// Add real liveUrl / githubUrl values to display the project links.
export const projects = [
    {
        slug: 'movie-app',
        name: 'Movie App',
        category: 'Web application',
        image: movie,
        tone: 'lavender',
        tagline: 'A better way to find your next favorite film.',
        description:
            'A cinematic discovery experience that brings movie browsing, search, and film details into one intuitive interface.',
        stack: ['React', 'JavaScript', 'REST API'],
        role: 'Frontend development',
        type: 'Personal project',
        challenge:
            'Movie catalogs can feel overwhelming. The goal is to help people move from an open-ended search to a film they actually want to watch, without a cluttered interface.',
        solution:
            'Build a visual browsing experience with clear content hierarchy, reusable movie cards, and a dedicated details view. Make search feedback and loading states feel like part of the experience.',
        features: [
            'Search and browse a visual movie catalog',
            'Explore film summaries and key information',
            'Responsive layouts across mobile and desktop',
            'Clear loading, empty, and error states',
        ],
        process: [
            'Map the browsing journey and define the essential screens.',
            'Build reusable interface components and connect the data layer.',
            'Refine responsive behavior and review the complete user journey.',
        ],
        outcome:
            'The sample implementation demonstrates a complete discovery flow, from browsing to a detailed film view. Replace this paragraph with verified results and your own learnings.',
        liveUrl: '',
        githubUrl: '',
    },
    {
        slug: 'job-search',
        name: 'Job Search',
        category: 'Product interface',
        image: jobs,
        tone: 'peach',
        tagline: 'Helping the right opportunity find its people.',
        description:
            'A focused job discovery interface designed to make searching, comparing, and exploring opportunities feel effortless.',
        stack: ['React', 'CSS', 'JavaScript'],
        role: 'Frontend development',
        type: 'Personal project',
        challenge:
            'Job seekers need to scan a large amount of information quickly. Inconsistent listings and unclear filters make it difficult to compare relevant opportunities.',
        solution:
            'Create consistent listing cards, purposeful filters, and a readable job detail layout. Prioritize the information people need to decide whether an opportunity fits.',
        features: [
            'Searchable job listings',
            'Filters for relevant opportunities',
            'Structured job and company details',
            'Mobile-friendly browsing experience',
        ],
        process: [
            'Define the job seeker journey and organize listing information.',
            'Implement reusable cards, search controls, and detail layouts.',
            'Review keyboard navigation and small-screen usability.',
        ],
        outcome:
            'This sample case study illustrates a more focused journey from discovery to job details. Add your actual project scope, feedback, and outcomes here.',
        liveUrl: '',
        githubUrl: '',
    },
    {
        slug: 'highking',
        name: 'Highking',
        category: 'Landing page',
        image: hiking,
        tone: 'sage',
        tagline: 'An invitation to go a little further.',
        description:
            'An outdoor-inspired landing page balancing expressive visuals with a clear path to discovering the next adventure.',
        stack: ['HTML', 'CSS', 'JavaScript'],
        role: 'UI implementation',
        type: 'Personal project',
        challenge:
            'An adventure website needs to inspire exploration while keeping practical information easy to find and calls to action easy to understand.',
        solution:
            'Use strong imagery, spacious sections, and a consistent visual rhythm to guide visitors through the offering. Adapt the composition thoughtfully for smaller screens.',
        features: [
            'Responsive editorial sections',
            'Clear destination and service highlights',
            'Subtle interactive states',
            'Accessible navigation and calls to action',
        ],
        process: [
            'Break the visual concept into reusable sections.',
            'Build the responsive layout and interaction states.',
            'Polish spacing, image behavior, and device consistency.',
        ],
        outcome:
            'The sample page connects a distinctive visual direction with a straightforward browsing experience. Replace this with the details of your actual work.',
        liveUrl: '',
        githubUrl: '',
    },
    {
        slug: 'react-nav',
        name: 'React Nav',
        category: 'UI exploration',
        image: navigation,
        tone: 'blue',
        tagline: 'Small interactions. A smoother journey.',
        description:
            'An exploration of responsive navigation patterns and reusable interface components built with React.',
        stack: ['React', 'CSS', 'JavaScript'],
        role: 'Component development',
        type: 'UI exploration',
        challenge:
            'Navigation must stay predictable across device sizes while offering clear feedback about where a visitor is and where they can go.',
        solution:
            'Build a flexible navigation system with deliberate active states, mobile behavior, and keyboard interactions.',
        features: [
            'Reusable navigation components',
            'Responsive mobile menu',
            'Clear active and hover states',
            'Keyboard-friendly interactions',
        ],
        process: [
            'Define navigation states and responsive behavior.',
            'Implement composable React components.',
            'Check focus management and interaction consistency.',
        ],
        outcome:
            'This example provides a foundation for consistent navigation across a larger interface. Update it with your implementation details and learnings.',
        liveUrl: '',
        githubUrl: '',
    },
    {
        slug: 'vue-country',
        name: 'Vue Country',
        category: 'Web application',
        image: countries,
        tone: 'sand',
        tagline: 'A small window into a bigger world.',
        description:
            'A country exploration interface that transforms structured geographic data into a simple, approachable browsing experience.',
        stack: ['Vue', 'JavaScript', 'REST API'],
        role: 'Frontend development',
        type: 'Personal project',
        challenge:
            'Country datasets contain a lot of detail. The challenge is to surface useful facts while keeping searching and comparison simple.',
        solution:
            'Present countries in a consistent card system with search, filtering, and a focused details experience.',
        features: [
            'Browse and search countries',
            'Filter countries by region',
            'Explore key country information',
            'Responsive data-driven cards',
        ],
        process: [
            'Shape the data into a useful information hierarchy.',
            'Implement the browsing controls and country views.',
            'Refine feedback for loading and empty search results.',
        ],
        outcome:
            'This illustrative case study shows how structured data can become a friendly interface. Replace it with your real project outcomes before sharing.',
        liveUrl: '',
        githubUrl: '',
    },
];
