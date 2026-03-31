import React from 'react'

const About: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-serif font-bold text-primary mb-6">关于历史年轮</h2>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-serif font-semibold mb-3">项目背景</h3>
          <p className="text-gray-700 leading-relaxed">
            历史年轮项目旨在通过可视化方式帮助用户理解历史名人的时间分布，特别是不同领域名人的同时代关系。
            通过滑动时间线，用户可以直观地了解历史名人的出生、在世和离世情况，从而更好地理解历史的发展脉络。
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-serif font-semibold mb-3">使用方法</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>在首页选择你感兴趣的历史名人分类</li>
            <li>从列表中选择具体的历史名人</li>
            <li>滑动时间线或点击年份标记来查看不同年份</li>
            <li>观察名人状态的变化，包括出生、在世和离世状态</li>
            <li>可以通过缩放功能查看更详细的时间范围</li>
          </ol>
        </section>
        
        <section>
          <h3 className="text-xl font-serif font-semibold mb-3">技术栈</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">TypeScript</span>
            <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Tailwind CSS</span>
            <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Vite</span>
            <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Zustand</span>
          </div>
        </section>
        
        <section>
          <h3 className="text-xl font-serif font-semibold mb-3">未来计划</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>添加更多历史名人数据</li>
            <li>实现历史事件的时间线显示</li>
            <li>添加搜索功能，方便用户快速找到特定名人</li>
            <li>支持用户添加自定义名人</li>
            <li>实现历史名人之间的关系图谱</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default About
