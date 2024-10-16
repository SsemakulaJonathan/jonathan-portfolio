// import fs from 'fs/promises'
// import path from 'path'
// import { Project, Profile, PortfolioData, ResumeData } from '@/types'

// const dataFile = path.join(process.cwd(), 'data', 'portfolio.json')

// async function readPortfolioData(): Promise<PortfolioData> {
//   const data = await fs.readFile(dataFile, 'utf8')
//   return JSON.parse(data) as PortfolioData
// }

// export async function getProfile(): Promise<Profile> {
//   const data = await readPortfolioData()
//   return data.profile
// }

// export async function getProjects(): Promise<Project[]> {
//   const data = await readPortfolioData()
//   return data.projects
// }

// export async function getProject(slug: string): Promise<Project | null> {
//   const projects = await getProjects()
//   return projects.find((p) => p.slug === slug) || null
// }

// export async function getResumeData(): Promise<ResumeData> {
//   const data = await readPortfolioData()
//   return data.resume
// }

// export async function updateProfile(newProfile: Partial<Profile>): Promise<Profile> {
//   const data = await readPortfolioData()
//   data.profile = { ...data.profile, ...newProfile }
//   await fs.writeFile(dataFile, JSON.stringify(data, null, 2))
//   return data.profile
// }

// export async function updateProject(slug: string, newProject: Partial<Project>): Promise<Project> {
//   const data = await readPortfolioData()
//   const index = data.projects.findIndex((p) => p.slug === slug)
//   if (index !== -1) {
//     data.projects[index] = { ...data.projects[index], ...newProject }
//     await fs.writeFile(dataFile, JSON.stringify(data, null, 2))
//     return data.projects[index]
//   }
//   throw new Error('Project not found')
// }

// export async function updateResumeData(newResumeData: Partial<ResumeData>): Promise<ResumeData> {
//   const data = await readPortfolioData()
//   data.resume = { ...data.resume, ...newResumeData }
//   await fs.writeFile(dataFile, JSON.stringify(data, null, 2))
//   return data.resume
// }

import fs from 'fs/promises'
import path from 'path'
import { Project, Profile, PortfolioData, ResumeData } from '@/types'

const dataFile = path.join(process.cwd(), 'data', 'portfolio.json')

async function readPortfolioData(): Promise<PortfolioData> {
  const data = await fs.readFile(dataFile, 'utf8')
  return JSON.parse(data) as PortfolioData
}

export async function getProfile(): Promise<Profile> {
  const data = await readPortfolioData()
  return data.profile
}

export async function getProjects(): Promise<Project[]> {
  const data = await readPortfolioData()
  return data.projects
}

export async function getProject(slug: string): Promise<Project | null> {
  const projects = await getProjects()
  return projects.find((p) => p.slug === slug) || null
}

export async function getResumeData(): Promise<ResumeData> {
  const data = await readPortfolioData()
  return data.resume
}

export async function updateProfile(newProfile: Partial<Profile>): Promise<Profile> {
  const data = await readPortfolioData()
  data.profile = { ...data.profile, ...newProfile }
  await fs.writeFile(dataFile, JSON.stringify(data, null, 2))
  return data.profile
}

export async function updateProject(slug: string, newProject: Partial<Project>): Promise<Project> {
  const data = await readPortfolioData()
  const index = data.projects.findIndex((p) => p.slug === slug)
  if (index !== -1) {
    data.projects[index] = { ...data.projects[index], ...newProject }
    await fs.writeFile(dataFile, JSON.stringify(data, null, 2))
    return data.projects[index]
  }
  throw new Error('Project not found')
}

export async function updateResumeData(newResumeData: Partial<ResumeData>): Promise<ResumeData> {
  const data = await readPortfolioData()
  data.resume = { ...data.resume, ...newResumeData }
  await fs.writeFile(dataFile, JSON.stringify(data, null, 2))
  return data.resume
}

