'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function getPosts() {
  return await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    include: { _count: { select: { comments: true } } }
  })
}

export async function createPost(content: string) {
  if (!content.trim()) return
  await prisma.post.create({ data: { content } })
  revalidatePath('/')
}

export async function getPostDetail(id: number) {
  const post = await prisma.post.update({
    where: { id },
    data: { views: { increment: 1 } },
    include: { comments: { orderBy: { createdAt: 'asc' } } }
  })
  return post
}

export async function createComment(postId: number, content: string) {
  if (!content.trim()) return
  await prisma.comment.create({ data: { postId, content } })
  revalidatePath(`/post/${postId}`)
}
