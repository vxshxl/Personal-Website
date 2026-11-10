// Experience and skills cross-checked against Tailor_Resume_2025.pdf
// and Doc for Tailor Resume.pages. Both versions list the same core skills.
// Keep dates and technologies aligned with your resume when updating this file.
export const timeline = [
  {
    period: 'Jul 2024 — Present', date: '2024-07', title: 'Cloud Engineer', organization: 'Vanguard', current: true,
    description: 'Supporting on-premises server migrations to AWS, building automated health checks, and resolving AWS and Azure incidents across compute, networking, and storage.',
    highlights: ['Automate post-migration verification to reduce manual work for application teams.', 'Work across teams to resolve cloud integration issues and maintain service continuity.'],
  },
  {
    period: 'Jun 2024', date: '2024-06', title: 'BS in Computer Science', organization: 'Drexel University',
    description: 'Concentrations in Artificial Intelligence and Algorithms & Data Structures.',
    highlights: ['A.J. Drexel Scholarship recipient.', 'Dean’s List, Spring Quarter 2019–2020.'],
  },
  {
    period: 'Mar — Sep 2022', date: '2022-03', title: 'Hosting Operations Co-op', organization: 'Vanguard',
    description: 'Tier 2 support for Windows and virtualized compute environments, with software deployments and self-service automation.',
    highlights: ['Supported Nutanix, VMware, vSphere, Windows Server, SCCM, SCOM, and Active Directory.', 'Used ServiceNow, Confluence, Jira, and Splunk within Agile and Lean workflows.'],
  },
  {
    period: 'Mar — Nov 2021', date: '2021-03', title: 'IT Infrastructure Co-op', organization: 'Franklin Square Investments',
    description: 'Supported a firm-wide BitLocker deployment, automated application deployments, and handled hardware, software, and onboarding support.',
    highlights: ['Diagnosed and resolved technical issues through FreshService.', 'Provisioned equipment, software, and security credentials for new hires.'],
  },
];
// Every item below is explicitly named in the resume's Skills, Work Experience,
// or Project Experience sections. Group labels organize the items; they do not
// imply additional technologies or proficiency levels.
export const skillGroups = [
  {
    name: 'Cloud & infrastructure',
    sources: ['Work Experience — Cloud Engineer', 'Work Experience — Hosting Operations Co-op'],
    skills: ['AWS', 'Azure', 'On-premises to AWS migration', 'Compute, networking & storage', 'VMware', 'vSphere', 'Nutanix', 'Windows Server', 'Active Directory'],
  },
  {
    name: 'Programming',
    sources: ['Skills — Programming Languages', 'Project Experience — Gym In Progress'],
    skills: ['Python', 'Java', 'C', 'Visual Basic', 'Racket', 'Dart'],
  },
  {
    name: 'Automation & operations',
    sources: ['Skills', 'Work Experience'],
    skills: ['PowerShell', 'Bash', 'PowerShell ISE', 'Automated health checks', 'Post-migration scripts', 'Microsoft SCCM', 'SCOM', 'BitLocker'],
  },
  {
    name: 'Web & mobile',
    sources: ['Skills', 'Project Experience — Ace Rithm', 'Project Experience — Gym In Progress'],
    skills: ['Web development', 'Mobile-friendly websites', 'Flutter', 'Git', 'GitHub'],
  },
  {
    name: 'Machine learning',
    sources: ['Project Experience — OpticBets'],
    skills: ['XGBoost', 'Random Forest', 'AdaBoost', 'Regressions', 'Neural networks', 'Data collection', 'Web scraping'],
  },
  {
    name: 'Tools & workflow',
    sources: ['Skills', 'Work Experience — Hosting Operations Co-op', 'Work Experience — IT Infrastructure Co-op'],
    skills: ['ServiceNow', 'Jira', 'Confluence', 'Splunk', 'FreshService', 'Visual Studio Code', 'PyCharm', 'IntelliJ', 'LaTeX', 'Agile', 'Lean'],
  },
];
