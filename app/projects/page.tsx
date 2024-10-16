import Link from 'next/link'
import { getProjects } from '@/lib/api'
import { Project } from '@/types'

export default async function Projects() {
  const projects: Project[] = await getProjects()

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="flex items-center bg-white p-4 pb-2 justify-between">
        <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">Projects</h2>
        <div className="flex w-12 items-center justify-end">
{/*           <button className="text-[#111418]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"></path>
            </svg>
          </button> */}
        </div>
      </header>

      <main className="flex-grow p-4">
        {projects.map((project: Project) => (
          <Link href={`/projects/${project.slug}`} key={project.slug} className="block mb-4">
            <div
              className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl pt-[132px]"
              style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url(${project.image})`}}
            >
              <div className="flex w-full items-end justify-between gap-4 p-4">
                <div className="flex max-w-[440px] flex-1 flex-col gap-1">
                  <p className="text-white tracking-light text-2xl font-bold leading-tight max-w-[440px]">{project.title}</p>
                  <p className="text-white text-base font-medium leading-normal">{project.role}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </main>

      <footer className="mt-auto">
        <div className="flex justify-center">
          <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
            <Link href="/" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-transparent text-[#111418] text-base font-bold leading-normal tracking-[0.015em] grow">
              <span className="truncate">Back to Profile</span>
            </Link>
          </div>
        </div>
        <div className="h-5 bg-white"></div>
      </footer>
    </div>
  )
}
