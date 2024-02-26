import { atom } from 'jotai'
import { Recommendation } from '@/lib/types'

export const nodesAtom = atom([])
export const edgesAtom = atom([])
export const recommendationsAtom = atom([] as Recommendation[])
export const backendDataAtom = atom(null)
export const keywordsListAnswerAtom = atom([] as string[])
export const keywordsListQuestionAtom = atom([] as string[])