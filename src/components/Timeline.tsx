import React, { useState, useRef } from 'react'
import { useTimelineStore } from '../store/useTimelineStore'

const Timeline: React.FC = () => {
  const { selectedFigures, currentYear, setCurrentYear } = useTimelineStore()
  const [zoom, setZoom] = useState(1)
  const timelineRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // 计算时间范围
  const getTimeRange = () => {
    if (selectedFigures.length === 0) {
      return { min: -500, max: 2000 }
    }
    const years = selectedFigures.flatMap(figure => [figure.birthYear, figure.deathYear])
    return {
      min: Math.min(...years) - 50,
      max: Math.max(...years) + 50
    }
  }

  const { min, max } = getTimeRange()
  const totalYears = max - min

  // 处理滚动
  const handleScroll = () => {
    if (timelineRef.current) {
      setScrollLeft(timelineRef.current.scrollLeft)
    }
  }

  // 处理拖拽开始
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX - (timelineRef.current?.offsetLeft || 0))
  }

  // 处理拖拽移动
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !timelineRef.current) return
    e.preventDefault()
    const x = e.clientX - (timelineRef.current.offsetLeft || 0)
    const walk = (x - startX) * 1.5
    timelineRef.current.scrollLeft = scrollLeft - walk
  }

  // 处理拖拽结束
  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // 处理滚轮缩放
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const newZoom = e.deltaY > 0 ? Math.max(0.5, zoom - 0.1) : Math.min(3, zoom + 0.1)
    setZoom(newZoom)
  }

  // 处理年份点击
  const handleYearClick = (year: number) => {
    setCurrentYear(year)
  }

  // 生成年份标记
  const generateYearMarks = () => {
    const marks = []
    const step = Math.ceil(totalYears / 50) * zoom
    for (let year = min; year <= max; year += step) {
      marks.push(year)
    }
    return marks
  }

  const yearMarks = generateYearMarks()

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-serif font-bold text-primary mb-6">历史时间线</h2>
      
      {selectedFigures.length === 0 ? (
        <p className="text-center text-gray-500 py-12">请先选择历史名人</p>
      ) : (
        <>
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm">
              当前年份: <span className="font-semibold">{currentYear}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                缩小
              </button>
              <button
                onClick={() => setZoom(Math.min(3, zoom + 0.1))}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                放大
              </button>
            </div>
          </div>
          
          <div
            ref={timelineRef}
            className="relative overflow-x-auto pb-4"
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
            style={{
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
          >
            <div 
              className="relative h-16"
              style={{
                width: `${totalYears * 10 * zoom}px`,
                minWidth: '100%'
              }}
            >
              {/* 时间线 */}
              <div className="absolute top-8 left-0 right-0 h-1 bg-gray-300"></div>
              
              {/* 年份标记 */}
              {yearMarks.map((year) => {
                const position = ((year - min) / totalYears) * 100
                return (
                  <div
                    key={year}
                    className="absolute top-0 transform -translate-x-1/2"
                    style={{
                      left: `${position}%`
                    }}
                  >
                    <div 
                      className="w-3 h-3 bg-primary rounded-full cursor-pointer hover:bg-secondary transition-colors"
                      onClick={() => handleYearClick(year)}
                    ></div>
                    <div className="text-xs text-gray-600 mt-1 whitespace-nowrap">
                      {year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`}
                    </div>
                  </div>
                )
              })}
              
              {/* 当前年份指示器 */}
              <div
                className="absolute top-0 bottom-0 w-px bg-red-500 z-10"
                style={{
                  left: `${((currentYear - min) / totalYears) * 100}%`
                }}
              >
                <div className="absolute -top-4 -left-2 w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="absolute -bottom-6 left-0 transform -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {currentYear < 0 ? `${Math.abs(currentYear)} BCE` : `${currentYear} CE`}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Timeline
