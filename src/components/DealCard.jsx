import { ExternalLink } from 'lucide-react'

const DealCard = ({ deal }) => {
  return (
    <div className="border-b border-gray-200 pb-4 mb-4 fade-in group hover:bg-gray-50 transition-all p-2 -mx-2 rounded">
      {deal.image && (
        <a href={deal.link} target="_blank" rel="noopener noreferrer" className="block mb-2.5 image-hover overflow-hidden rounded">
          <img
            src={deal.image}
            alt={deal.title}
            className="w-full h-32 object-contain bg-white"
          />
        </a>
      )}
      <a 
        href={deal.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="font-bold text-[13px] hover:underline block mb-1.5 leading-[1.3] transition-all"
      >
        {deal.title}
      </a>
      <div className="text-[13px] mb-1 leading-tight">
        <span className="font-bold text-red-600">${deal.salePrice}</span>
        {deal.originalPrice && (
          <span className="text-gray-500 line-through ml-2">${deal.originalPrice}</span>
        )}
        {deal.store && <span className="text-gray-800"> from {deal.store}</span>}
      </div>
      {deal.note && (
        <p className="text-[11px] text-gray-600 leading-[1.4]">{deal.note}</p>
      )}
    </div>
  )
}

export default DealCard

