import { getProject } from '@/lib/api'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/types'

export default async function ProjectDetail({ params }: { params: { slug: string } }) {
  const project: Project | null = await getProject(params.slug)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <header className="flex items-center bg-slate-50 p-4 pb-2 justify-between">
        <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">Project Details</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="text-[#0e141b]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L204.69,112H165a88,88,0,0,0-85.23,66,8,8,0,0,1-15.5-4A103.94,103.94,0,0,1,165,96h39.71L170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66ZM192,208H40V88a8,8,0,0,0-16,0V208a16,16,0,0,0,16,16H192a8,8,0,0,0,0-16Z"></path>
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-grow">
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div
              className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-slate-50 @[480px]:rounded-xl min-h-[218px]"
              style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url(${project.image})`}}
            >
              <div className="flex p-4">
                <p className="text-white tracking-light text-[28px] font-bold leading-tight">{project.title}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-6 space-y-6">
        {project.logo && (
          <div className="mt-6">
            {/* /* <h3 className="text-[#0e141b] text-lg font-bold mb-2">Project Logo</h3> */}
            <div className="flex justify-center">
              <Image src={project.logo} alt={`${project.title} logo`} width={150} height={150} className="rounded-lg" />
            </div>
          </div>
        )}

          <p className="text-[#0e141b] text-base font-normal leading-normal">{project.description}</p>

          <div className="space-y-4">
            <ProjectDetailItem title="Problem" content={project.problem} />
            <ProjectDetailItem title="Solution" content={project.solution} />
            <ProjectDetailItem title="Market Opportunity" content={project.marketOpportunity} />
            <ProjectDetailItem title="Business Model" content={project.businessModel} />
            <ProjectDetailItem title="Funding Request" content={project.fundingRequest} />
            <ProjectDetailItem title="Future Prospects" content={project.futureProspects} />
            <ProjectDetailItem title="Team" content={project.team} />
          </div>

          {/* {project.logo && (
            <div className="mt-6">
              <h3 className="text-[#0e141b] text-lg font-bold mb-2">Project Logo</h3>
              <Image src={project.logo} alt={`${project.title} logo`} width={100} height={100} className="rounded-lg" />
            </div>
          )} */}
        </div>
      </main>

      <footer className="mt-auto">
        <div className="flex justify-center">
          <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
            <Link href="/projects" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-transparent text-[#0e141b] text-base font-bold leading-normal tracking-[0.015em] grow">
              <span className="truncate">Back to Projects</span>
            </Link>
          </div>
        </div>
        <div className="h-5 bg-slate-50"></div>
      </footer>
    </div>
  )
}

function ProjectDetailItem({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h3 className="text-[#0e141b] text-lg font-bold mb-1">{title}</h3>
      <p className="text-[#4e7397] text-sm font-normal leading-normal">{content}</p>
    </div>
  )
}