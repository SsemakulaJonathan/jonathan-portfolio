import fs from 'fs/promises'
import path from 'path'
import { Project, ProjectsData } from '@/types'

const dataFile = path.join(process.cwd(), 'data', 'portfolio.json')

export async function getProfile() {
  const data = await fs.readFile(dataFile, 'utf8')
  return JSON.parse(data).profile
}

export async function getProjects(): Promise<Project[]> {
  const data = await fs.readFile(dataFile, 'utf8')
  const projectsData: ProjectsData = JSON.parse(data)
  return projectsData.projects
}

export async function getProject(slug: string): Promise<Project | null> {
  const data = await fs.readFile(dataFile, 'utf8')
  const projectsData: ProjectsData = JSON.parse(data)
  return projectsData.projects.find((p: Project) => p.slug === slug) || null
}

export async function getResumeData() {
  const data = await fs.readFile(dataFile, 'utf8')
  return JSON.parse(data).resume
}

export async function updateProfile(newProfile: any) {
  const data = await fs.readFile(dataFile, 'utf8')
  const json = JSON.parse(data)
  json.profile = { ...json.profile, ...newProfile }
  await fs.writeFile(dataFile, JSON.stringify(json, null, 2))
  return json.profile
}

export async function updateProject(slug: string, newProject: any) {
  const data = await fs.readFile(dataFile, 'utf8')
  const json = JSON.parse(data)
  const index = json.projects.findIndex((p: any) => p.slug === slug)
  if (index !== -1) {
    json.projects[index] = { ...json.projects[index], ...newProject }
    await fs.writeFile(dataFile, JSON.stringify(json, null, 2))
    return json.projects[index]
  }
  throw new Error('Project not found')
}

export async function updateResumeData(newResumeData: any) {
  const data = await fs.readFile(dataFile, 'utf8')
  const json = JSON.parse(data)
  json.resume = { ...json.resume, ...newResumeData }
  await fs.writeFile(dataFile, JSON.stringify(json, null, 2))
  return json.resume
}