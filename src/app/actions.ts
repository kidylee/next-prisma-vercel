'use server'
import prisma from "@/app/prisma";

export async function getUser() {
    await prisma.user.create({
        data: {
            email: 'Alice' + Math.random(),
        }
    })
    console.log('getUser')
    return prisma.user.findMany()
}