import React from 'react'
import { HistoricalFigure } from '../data/historicalFigures'
import { useTimelineStore } from '../store/useTimelineStore'

const CelebrityStatus: React.FC = () => {
  const { selectedFigures, currentYear } = useTimelineStore()

  // 获取名人在当前年份的状态
  const getCelebrityStatus = (figure: HistoricalFigure) => {
    if (currentYear < figure.birthYear) {
      return { status: '未出生', color: 'bg-gray-300', label: '未出生' }
    } else if (currentYear <= figure.deathYear) {
      return { status: '在世', color: 'bg-green-500', label: '在世' }
    } else {
      return { status: '已离世', color: 'bg-red-500', label: '已离世' }
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-serif font-bold text-primary mb-6">名人状态</h2>
      
      {selectedFigures.length === 0 ? (
        <p className="text-center text-gray-500 py-12">请先选择历史名人</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {selectedFigures.map((figure) => {
            const status = getCelebrityStatus(figure)
            return (
              <div 
                key={figure.id} 
                className="border rounded-lg p-4 transition-all hover:shadow-md"
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
                    <h3 className="font-semibold">{figure.name}</h3>
                    <p className="text-sm text-gray-500">{figure.birthYear} - {figure.deathYear}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className={`w-3 h-3 rounded-full ${status.color}`}></div>
                      <span className="text-sm font-medium">{status.label}</span>
                    </div>
                  </div>
                </div>
                {currentYear >= figure.birthYear && currentYear <= figure.deathYear && (
                  <div className="mt-3 text-sm">
                    <p>年龄: {currentYear - figure.birthYear} 岁</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default CelebrityStatus
