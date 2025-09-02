// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { 
//   Menu, 
//   X, 
//   Home, 
//   Upload, 
//   BarChart2, 
//   Settings, 
//   ChevronDown, 
//   ChevronRight,
//   FileText,
//   LayoutTemplate,
//   BookOpen,
//   FileStack,
//   Wand2,
//   CheckSquare,
//   Brain,
//   Palette,
//   Bookmark,
//   Users,
//   Briefcase,
//   Code,
//   GraduationCap,
//   HeartHandshake
// } from "lucide-react"; 

// const Sidebar = () => {
//   const [open, setOpen] = useState(true);
//   const [resumeOpen, setResumeOpen] = useState(false);
//   const [templatesOpen, setTemplatesOpen] = useState(false);
//   const [guidesOpen, setGuidesOpen] = useState(false);
//   const [examplesOpen, setExamplesOpen] = useState(false);

//   const menus = [
//     { name: "Dashboard", icon: <Home size={20} />, path: "/" },
//     { 
//       name: "Resume", 
//       icon: <FileText size={20} />, 
//       hasDropdown: true,
//       isOpen: resumeOpen,
//       toggle: () => setResumeOpen(!resumeOpen),
//       submenus: [
//         {
//           title: "Upload Resume",
//           icon: <Upload size={16} />,
//           path: "/upload"
//         },
//         {
//           title: "Resume Templates",
//           icon: <LayoutTemplate size={16} />,
//           hasDropdown: true,
//           isOpen: templatesOpen,
//           toggle: () => setTemplatesOpen(!templatesOpen),
//           submenu: [
//             {
//               title: "Creative Templates",
//               icon: <Palette size={14} />,
//               description: "Creative resume for creative industries to capture the recruiter's attention",
//               path: "/templates/creative"
//             },
//             {
//               title: "Traditional Templates",
//               icon: <Bookmark size={14} />,
//               description: "For conservative industries when you need to show your career accomplishments",
//               path: "/templates/traditional"
//             },
//             {
//               title: "Modern Templates",
//               icon: <LayoutTemplate size={14} />,
//               description: "The latest resume trends in a modern and stylish resume",
//               path: "/templates/modern"
//             },
//             {
//               title: "Simple Templates",
//               icon: <FileText size={14} />,
//               description: "Focus on your skills and accomplishments with simple resume templates",
//               path: "/templates/simple"
//             }
//           ]
//         },
//         {
//           title: "Resume Writing Guides",
//           icon: <BookOpen size={16} />,
//           hasDropdown: true,
//           isOpen: guidesOpen,
//           toggle: () => setGuidesOpen(!guidesOpen),
//           submenu: [
//             {
//               title: "Writing a Resume",
//               icon: <FileText size={14} />,
//               description: "The most comprehensive guide on the internet about writing a resume",
//               path: "/guides/writing"
//             },
//             {
//               title: "Resume Summary",
//               icon: <BookOpen size={14} />,
//               description: "How to include and write a summary that gets your point across quickly",
//               path: "/guides/summary"
//             },
//             {
//               title: "Choosing a Resume Format",
//               icon: <LayoutTemplate size={14} />,
//               description: "The different resume formats, which one is best for your use case",
//               path: "/guides/format"
//             },
//             {
//               title: "Fitting Experience on One Page",
//               icon: <FileText size={14} />,
//               description: "The tricks behind fitting a lot of experience on a single page",
//               path: "/guides/one-page"
//             }
//           ]
//         },
//         {
//           title: "Resume Examples",
//           icon: <FileStack size={16} />,
//           hasDropdown: true,
//           isOpen: examplesOpen,
//           toggle: () => setExamplesOpen(!examplesOpen),
//           submenu: [
//             {
//               title: "Project Manager",
//               icon: <Briefcase size={14} />,
//               path: "/examples/project-manager"
//             },
//             {
//               title: "Data Scientist",
//               icon: <Code size={14} />,
//               path: "/examples/data-scientist"
//             },
//             {
//               title: "Scrum Master",
//               icon: <Users size={14} />,
//               path: "/examples/scrum-master"
//             },
//             {
//               title: "Business Analyst",
//               icon: <BarChart2 size={14} />,
//               path: "/examples/business-analyst"
//             },
//             {
//               title: "Software Engineer",
//               icon: <Code size={14} />,
//               path: "/examples/software-engineer"
//             },
//             {
//               title: "Marketing Manager",
//               icon: <HeartHandshake size={14} />,
//               path: "/examples/marketing-manager"
//             },
//             {
//               title: "Recent Graduate",
//               icon: <GraduationCap size={14} />,
//               path: "/examples/recent-graduate"
//             }
//           ]
//         },
//         {
//           title: "AI Resume Builder",
//           icon: <Wand2 size={16} />,
//           path: "/ai-builder"
//         },
//         {
//           title: "Resume Checker",
//           icon: <CheckSquare size={16} />,
//           path: "/checker"
//         },
//         {
//           title: "Resume Skills",
//           icon: <Brain size={16} />,
//           path: "/resume-skills"
//         }
//       ]
//     },
//     { name: "Reports", icon: <BarChart2 size={20} />, path: "/reports" },
//     { name: "Settings", icon: <Settings size={20} />, path: "/settings" },
//   ];

//   const renderSubmenu = (submenu, level = 0) => {
//     return (
//       <ul className={`ml-${level * 4} mt-1 border-l border-gray-700 pl-2`}>
//         {submenu.map((item, index) => (
//           <li key={index} className="my-1">
//             {item.path ? (
//               <Link to={item.path}>
//                 <div className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded-md">
//                   {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
//                   <span className="text-sm">{item.title}</span>
//                 </div>
//               </Link>
//             ) : item.hasDropdown ? (
//               <div>
//                 <div 
//                   onClick={item.toggle}
//                   className="flex items-center justify-between p-2 hover:bg-gray-800 rounded-md cursor-pointer"
//                 >
//                   <div className="flex items-center gap-2">
//                     {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
//                     <span className="text-sm">{item.title}</span>
//                   </div>
//                   {item.isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
//                 </div>
                
//                 {item.isOpen && item.submenu && renderSubmenu(item.submenu, level + 1)}
//               </div>
//             ) : (
//               <div className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded-md">
//                 {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
//                 <span className="text-sm">{item.title}</span>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div
//         className={`${
//           open ? "w-64" : "w-16"
//         } fixed left-0 top-0 h-screen bg-gray-900 text-gray-200 duration-300 overflow-y-auto`}
//       >
//         {/* Toggle Button */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="absolute -right-3 top-4 bg-gray-700 rounded-full p-1 z-10"
//         >
//           {open ? <X size={18} /> : <Menu size={18} />}
//         </button>

//         {/* Logo */}
//         <div className="p-4 border-b border-gray-700">
//           <h1 className={`text-xl font-bold ${!open && "hidden"}`}>
//             Resume Analyzer
//           </h1>
//         </div>

//         {/* Menu Items */}
//         <ul className="pt-2">
//           {menus.map((menu, i) => (
//             <li key={i} className="px-2">
//               {menu.hasDropdown ? (
//                 <div>
//                   <div 
//                     onClick={menu.toggle}
//                     className="flex items-center justify-between p-3 hover:bg-gray-700 rounded-md cursor-pointer"
//                   >
//                     <div className="flex items-center gap-3">
//                       {menu.icon}
//                       <span className={`${!open && "hidden"} origin-left duration-200`}>
//                         {menu.name}
//                       </span>
//                     </div>
//                     {open && (menu.isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
//                   </div>
                  
//                   {/* Dropdown Content */}
//                   {menu.isOpen && open && menu.submenus && renderSubmenu(menu.submenus)}
//                 </div>
//               ) : (
//                 <Link to={menu.path}>
//                   <div className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-md cursor-pointer">
//                     {menu.icon}
//                     <span className={`${!open && "hidden"} origin-left duration-200`}>
//                       {menu.name}
//                     </span>
//                   </div>
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Page Content */}
//       <div
//         className={`flex-1 p-6 duration-300 ${
//           open ? "ml-64" : "ml-16"
//         }`}
//       >
//         {/* Your page content goes here */}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

