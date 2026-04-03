import React from 'react'
import { HistoricalFigure, historicalFigures, categories } from '../data/historicalFigures'
import { useTimelineStore } from '../store/useTimelineStore'

const CelebritySelector: React.FC = () => {
  const { 
    selectedFigures, 
    selectedCategory, 
    addFigure, 
    removeFigure, 
    setSelectedCategory 
  } = useTimelineStore()

  const filteredFigures = selectedCategory === 'all' 
    ? historicalFigures 
    : historicalFigures.filter(figure => figure.category === selectedCategory)

  const isSelected = (figureId: string) => {
    return selectedFigures.some((figure: HistoricalFigure) => figure.id === figureId)
  }

  const handleFigureToggle = (figure: HistoricalFigure) => {
    if (isSelected(figure.id)) {
      removeFigure(figure.id)
    } else {
      addFigure(figure)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-serif font-bold text-primary mb-6">选择历史名人</h2>
      
      {/* 分类标签 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category.id 
              ? 'bg-primary text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {/* 名人列表 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredFigures.map((figure) => (
          <div
            key={figure.id}
            className={`border rounded-lg p-4 transition-all cursor-pointer ${isSelected(figure.id) 
              ? 'border-primary bg-primary/5' 
              : 'border-gray-200 hover:border-primary hover:shadow-sm'}`}
            onClick={() => handleFigureToggle(figure)}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={figure.imageUrl} 
                  alt={figure.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm">{figure.name}</h3>
                <p className="text-xs text-gray-500">{figure.birthYear} - {figure.deathYear}</p>
                <p className="text-xs text-gray-400 mt-1">{figure.description.substring(0, 20)}...</p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSelected(figure.id) 
                ? 'border-primary bg-primary text-white' 
                : 'border-gray-300'}`}>
                {isSelected(figure.id) && <span className="text-xs">✓</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* 已选择的名人数量 */}
      <div className="mt-6 text-sm text-gray-600">
        已选择 {selectedFigures.length} 位名人
      </div>
    </div>
  )
}

export default CelebritySelector
