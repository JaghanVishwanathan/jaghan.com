import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Experience {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string[];
  isVolunteer?: boolean;
}

export interface Education {
  period: string;
  degree: string;
  field: string;
  university: string;
  location: string;
}

export interface Language {
  name: string;
  proficiency: string;
  flagImage?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  achievements?: string[];
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Skill {
  name: string;
  icon?: string;
  description: string;
  experience?: string;
}

export interface TravelLocation {
  id: string;
  location: string;
  coordinates: [number, number];
  year: number;
  caption: string;
  journalEntryId?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor() {}

  getExperiences(): Observable<Experience[]> {
    return of([
      {
        period: '04/2025 – Present',
        title: 'Public Relations and Web Development',
        company: 'TU Darmstadt Space Technology e.V.',
        location: 'Darmstadt, Germany',
        description: [
          'Developing the official BVSR Conference website, ensuring responsiveness and alignment with the organization\'s branding.',
          'Design and publish visually appealing, technically accurate posts to communicate complex aerospace projects in a clear and engaging way to diverse audiences.',
          'Coordinate with internal project teams to highlight milestones, events, and achievements through timely and effective communication.'
        ],
        isVolunteer: true
      },
      {
        period: '05/2022 – 08/2024',
        title: 'Associate Engineer - Full Stack Developer',
        company: 'Virtusa Consulting Services Pvt Ltd',
        location: 'Chennai, India',
        description: [
          'Developed high-performance web applications using Java and Angular, improving system efficiency by 30% through optimized code and UX/UI refinements.',
          'Designed and implemented responsive front-end interfaces with Angular, HTML, and CSS, ensuring accessibility and cross-browser compatibility.',
          'Led UX/UI design workflows, from creating wireframes and prototypes in Figma and Adobe XD to developing pixel-perfect UI components, streamlining the design-to-development pipeline.',
          'Oversaw front-end team hiring by conducting technical interviews, aligning candidate profiles with project requirements, and delivering knowledge transfer sessions to onboard new team members.'
        ],
        isVolunteer: false
      },
      {
        period: '01/2022 – 04/2022',
        title: 'Intern - Full Stack Developer',
        company: 'Virtusa Consulting Services Pvt Ltd',
        location: 'Chennai, India',
        description: [
          'Documented code, APIs, and system architecture to facilitate future maintenance and onboarding of new team members.',
          'Designed and implemented user interfaces with a focus on usability and aesthetics.',
          'Collaborated efficiently with team members.',
          'Enhanced code quality through rigorous development practices and optimization methodologies.'
        ],
        isVolunteer: false
      }
    ]);
  }

  getEducation(): Observable<Education[]> {
    return of([
      {
        period: '10/2024 – Present',
        degree: 'Master of Science (M.Sc.)',
        field: 'Information and Communication Engineering',
        university: 'Technische Universität Darmstadt',
        location: 'Darmstadt, Germany'
      },
      {
        period: '08/2018 – 04/2022',
        degree: 'Bachelor of Engineering (B.E.)',
        field: 'Electronics and Communication Engineering',
        university: 'Anna University',
        location: 'Chennai, India'
      }
    ]);
  }

  getLanguages(): Observable<Language[]> {
    return of([
      { name: 'English', proficiency: 'C1', flagImage: 'english-flag.png' },
      { name: 'German', proficiency: 'A2', flagImage: 'german-flag.png' },
      { name: 'Tamil', proficiency: 'C2', flagImage: 'tamil-flag.png' }
    ]);
  }

  getSkills(): Observable<SkillCategory[]> {
    return of([
      {
        category: 'Web & Front-End',
        skills: ['Angular', 'TypeScript', 'React', 'JavaScript', 'WordPress', 'HTML & CSS', 'Bootstrap', 'RxJS', 'PHP']
      },
      {
        category: 'Back-End',
        skills: ['Java', 'Spring (Spring Boot, Spring Security)', 'NodeJS', 'Maven', 'Python']
      },
      {
        category: 'Databases',
        skills: ['SQL']
      },
      {
        category: 'Testing',
        skills: ['Unit Testing', 'Karma', 'Jasmine']
      },
      {
        category: 'UX & Design',
        skills: ['User Experience Design (UX)', 'Figma', 'Adobe Creative Cloud (Photoshop, Lightroom, Illustrator, Premiere Pro)', 'Adobe XD']
      },
      {
        category: 'Softwares, Tools & Platforms',
        skills: ['Git', 'Jira', 'Postman', 'Microsoft Office', 'MATLAB']
      },
      {
        category: 'Soft Skills',
        skills: ['Communication', 'Team Collaboration', 'Leadership', 'Problem Solving', 'Adaptability', 'Time Management', 'Critical Thinking', 'Mentorship', 'Attention to Detail', 'Conflict Resolution']
      }
    ]);
  }

  getSkillsWithDetails(): Observable<{ category: string; skills: Skill[] }[]> {
    return of([
      {
        category: 'Engineering',
        skills: [
          { name: 'Angular', description: 'Frontend framework', icon: 'angular.png' },
          { name: 'TypeScript', description: 'Type-safe JavaScript', icon: 'typescript.png' },
          { name: 'Java', description: 'Backend development', icon: 'java.png' },
          { name: 'Spring Boot', description: 'Enterprise framework', icon: 'spring.png' },
          { name: 'Node.js', description: 'Runtime environment', icon: 'nodejs.png' },
          { name: 'SQL', description: 'Database management', icon: 'sql.png' }
        ]
      },
      {
        category: 'Design Tools',
        skills: [
          { name: 'Figma', description: 'UI/UX design', icon: 'figma.png' },
          { name: 'Adobe XD', description: 'Prototyping tool', icon: 'adobe-xd.png' },
          { name: 'Adobe Photoshop', description: 'Image editing', icon: 'photoshop.png' },
          { name: 'Adobe Illustrator', description: 'Vector graphics', icon: 'illustrator.png' },
          { name: 'Adobe Premiere Pro', description: 'Video editing', icon: 'premiere.png' }
          // { name: 'User Experience Design', description: 'UX Thinking & Wireframing', icon: 'ux.png' }
        ]
      },
      {
        category: 'Other Skills',
        skills: [
          { name: 'Git', description: 'Version control', icon: 'git.png' },
          { name: 'Jira', description: 'Project management', icon: 'jira.png' },
          { name: 'Postman', description: 'API testing', icon: 'postman.png' },
          { name: 'MATLAB', description: 'Data analysis', icon: 'matlab.png' }
        ]
      }
    ]);
  }

  getProjects(): Observable<Project[]> {
    return of([
      {
        name: 'PlazaPalooza',
        description: 'Led the front-end team for an AI-driven board game, designing a high-performance UI with Angular & TypeScript. Implemented state management, optimized API handling, and applied UX design principles for an engaging experience. Ensured scalability with a modular architecture.',
        technologies: ['Angular', 'TypeScript', 'RxJS', 'State Management'],
        achievements: ['High-performance UI', 'Scalable modular architecture', 'Optimized API handling']
      },
      {
        name: 'Detection of Bone Fracture using Image Processing',
        description: 'Built an AI-powered diagnostic system using MATLAB & machine learning for fracture detection. Achieved 85% accuracy, reducing manual analysis time by 60%, and enhanced computer vision techniques for improved anomaly recognition.',
        technologies: ['MATLAB', 'Machine Learning', 'Image Processing', 'Computer Vision'],
        achievements: ['85% accuracy', '60% time reduction', 'Enhanced anomaly recognition']
      },
      {
        name: 'Integrated Soldier Security System',
        description: 'Developed a wearable IoT device for real-time tracking of soldiers\' vitals, location, and field visuals. Implemented live satellite data streaming and a low-latency communication system for mission-critical updates.',
        technologies: ['IoT', 'Real-time Tracking', 'Satellite Communication', 'Low-latency Systems'],
        achievements: ['Real-time vitals tracking', 'Live satellite data streaming', 'Mission-critical communication']
      },
      {
        name: 'Biometric Attendance using Cloud',
        description: 'Created a cloud-based biometric authentication system with fingerprint & facial recognition for secure workforce management. Built using Raspberry Pi & AWS, ensuring scalability & real-time data security.',
        technologies: ['Raspberry Pi', 'AWS', 'Biometric Authentication', 'Cloud Computing'],
        achievements: ['Fingerprint & facial recognition', 'Scalable cloud architecture', 'Real-time data security']
      },
      {
        name: 'E-Kart',
        description: 'Developed an Angular-based e-commerce platform with secure transactions and an intuitive user experience, featuring a responsive UI, AuthGuard enforcement for robust security, and integrated seller management tools using Angular, TypeScript, Node.js, and SQL.',
        technologies: ['Angular', 'TypeScript', 'Node.js', 'SQL', 'AuthGuard'],
        achievements: ['Secure transactions', 'Responsive UI', 'Integrated seller management']
      }
    ]);
  }

  getTravelLocations(): Observable<TravelLocation[]> {
    return of([
      { id: '1', location: 'India', coordinates: [20.5937, 78.9629], year: 2024, caption: 'Home country' },
      { id: '2', location: 'Malaysia', coordinates: [4.2105, 101.9758], year: 2024, caption: 'Southeast Asian adventure' },
      { id: '3', location: 'Germany', coordinates: [51.1657, 10.4515], year: 2024, caption: 'Currently studying at TU Darmstadt' },
      { id: '4', location: 'Spain', coordinates: [40.4637, -3.7492], year: 2024, caption: 'Iberian exploration' },
      { id: '5', location: 'Portugal', coordinates: [39.3999, -8.2245], year: 2024, caption: 'Coastal beauty' },
      { id: '6', location: 'France', coordinates: [46.2276, 2.2137], year: 2024, caption: 'French culture and cuisine' },
      { id: '7', location: 'Luxembourg', coordinates: [49.8153, 6.1296], year: 2024, caption: 'Small country, big experiences' },
      { id: '8', location: 'Switzerland', coordinates: [46.8182, 8.2275], year: 2024, caption: 'Alpine adventures' },
      { id: '9', location: 'Austria', coordinates: [47.5162, 14.5501], year: 2024, caption: 'Mountainous landscapes' },
      { id: '10', location: 'UAE', coordinates: [23.4241, 53.8478], year: 2024, caption: 'Desert and modern architecture' }
    ]);
  }
}
