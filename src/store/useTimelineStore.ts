import { create } from 'zustand'
import { HistoricalFigure } from '../data/historicalFigures'

interface TimelineStore {
  selectedFigures: HistoricalFigure[]
  selectedCategory: string
  currentYear: number
  addFigure: (figure: HistoricalFigure) => void
  removeFigure: (figureId: string) => void
  setSelectedCategory: (category: string) => void
  setCurrentYear: (year: number) => void
  clearSelectedFigures: () => void
}

export const useTimelineStore = create<TimelineStore>((set) => ({
  selectedFigures: [],
  selectedCategory: 'all',
  currentYear: 0,
  addFigure: (figure) => set((state) => ({
    selectedFigures: [...state.selectedFigures, figure]
  })),
  removeFigure: (figureId) => set((state) => ({
    selectedFigures: state.selectedFigures.filter(figure => figure.id !== figureId)
  })),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setCurrentYear: (year) => set({ currentYear: year }),
  clearSelectedFigures: () => set({ selectedFigures: [] })
}))
