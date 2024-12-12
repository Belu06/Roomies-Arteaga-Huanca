import { prisma } from './prisma'

export async function getViviendas() {
  try {
    const viviendas = await prisma.viviendas.findMany()
    return viviendas
  } catch (error) {
    console.error('Failed to fetch viviendas:', error)
    throw new Error('Failed to fetch viviendas')
  }
}