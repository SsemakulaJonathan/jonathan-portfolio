import { getResumeData } from '@/lib/api'
import { ResumeData } from '@/types'

// // Define types for our resume data
// type Education = {
//   year: string
//   institution: string
//   qualification: string
// }

// type WorkExperience = {
//   company: string
//   position: string
//   date: string
//   description: string
// }

// type ConsultancyAssignment = {
//   date: string
//   organization: string
//   roleAndAssignment: string
//   referencePerson: string
// }

// type Project = {
//   name: string
//   description: string
// }

// type Reference = {
//   name: string
//   position: string
//   organization: string
//   phone: string
//   email: string
// }

// type ResumeData = {
//   education: Education[]
//   workExperience: WorkExperience[]
//   consultancyAssignments: ConsultancyAssignment[]
//   projectsWorkedOn: Project[]
//   ongoingProjects: Project[]
//   skills: string[]
//   hobbiesAndInterests: string[]
//   languageProficiency: string[]
//   references: Reference[]
// }

export default async function Resume() {
  const resumeData: ResumeData = await getResumeData()

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="flex items-center bg-white p-4 pb-2 justify-between">
        <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">Resume</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="text-[#111418]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"></path>
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-grow p-4 space-y-8">
        <section>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">Education</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Year</th>
                  <th className="p-2 text-left">Institution</th>
                  <th className="p-2 text-left">Qualification</th>
                </tr>
              </thead>
              <tbody>
                {resumeData.education.map((edu, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{edu.year}</td>
                    <td className="p-2">{edu.institution}</td>
                    <td className="p-2">{edu.qualification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">Work Experience</h2>
          {resumeData.workExperience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-lg">{exp.company}</h3>
                <span className="text-sm text-gray-600">{exp.date}</span>
              </div>
              <p className="font-medium">{exp.position}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">Consultancy Assignments</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">Organization</th>
                  <th className="p-2 text-left">Role and Assignment</th>
                  <th className="p-2 text-left">Reference Person</th>
                </tr>
              </thead>
              <tbody>
                {resumeData.consultancyAssignments.map((assignment, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{assignment.date}</td>
                    <td className="p-2">{assignment.organization}</td>
                    <td className="p-2">{assignment.roleAndAssignment}</td>
                    <td className="p-2">{assignment.referencePerson}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">Projects Worked On</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Project</th>
                  <th className="p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {resumeData.projectsWorkedOn.map((project, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{project.name}</td>
                    <td className="p-2">{project.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">Ongoing Projects</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Project</th>
                  <th className="p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {resumeData.ongoingProjects.map((project, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{project.name}</td>
                    <td className="p-2">{project.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">Skills</h2>
          <ul className="list-disc list-inside">
            {resumeData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">Hobbies and Interests</h2>
          <ul className="list-disc list-inside">
            {resumeData.hobbiesAndInterests.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">Language Proficiency</h2>
          <ul className="list-disc list-inside">
            {resumeData.languageProficiency.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">References</h2>
          <div className="space-y-4">
            {resumeData.references.map((reference, index) => (
              <div key={index} className="border-b pb-4">
                <p className="font-bold">{reference.name}</p>
                <p>{reference.position}</p>
                <p>{reference.organization}</p>
                <p>Phone: {reference.phone}</p>
                <p>Email: {reference.email}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

  <footer className="mt-auto">
        <div className="flex justify-center">
          <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
            <Link href="/" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-transparent text-[#111418] text-base font-bold leading-normal tracking-[0.015em] grow">
              <span className="truncate">Back to Profile</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
