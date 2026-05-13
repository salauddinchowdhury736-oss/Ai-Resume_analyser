import type { Route } from "./+types/home";
import { resumes } from "./constants";
import ResumeCard from "./constants/types/components/ResumeCard";
import Navbar from "./Navbar";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <main className='bg-[url(public/images/bg-main.svg)] bg-cover'>
 <section className='main-section'>
 <Navbar/>
<div className="page-heading py-18">
  <h1>Track your Applications & Resume Ratings </h1>
  <h2>Review your submissions  and check AI-powered feedback</h2>
</div>
 {resumes.length > 0 && (
  <div className="resumes-section ">
    {
      resumes.map((resume) => (
<ResumeCard key={resume.id} resume={resume} />
 ))
    }
  </div>
 )}
 </section>

  </main>;
}
