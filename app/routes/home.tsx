import type { Route } from "./+types/home";
import Navbar from "./Navbar";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <main>
 <section className='bg-[url(public/images/bg-main.svg)] bg-cover bg-center h-screen flex flex-col items-center justify-center gap-4'>
 <Navbar/>
<div className="page-heading">
  <h1>Track your Applications & Resume Ratings </h1>
  <h2>Review your submissions  and check AI-powered feedback</h2>
</div>
 </section>
  </main>;
}
