import { Link } from 'react-router-dom'

const ArticleCard = ({ article, layout = 'horizontal' }) => {
  if (layout === 'horizontal') {
    return (
      <div className="flex gap-4 group fade-in">
        {article.image && (
          <Link to={`/article/${article.slug}`} className="flex-shrink-0 image-hover">
            <img
              src={article.image}
              alt={article.title}
              className="w-32 h-32 object-cover"
            />
          </Link>
        )}
        <div className="flex-1">
          <Link to={`/article/${article.slug}`} className="transition-colors">
            <h3 className="font-bold text-[18px] leading-[1.2] mb-2 group-hover:underline article-title">
              {article.title}
            </h3>
          </Link>
          {article.author && (
            <p className="text-[13px] text-gray-700 mb-2">by {article.author}</p>
          )}
          {article.excerpt && (
            <p className="text-[14px] text-gray-800 line-clamp-2 leading-relaxed">{article.excerpt}</p>
          )}
          {article.date && (
            <p className="text-[12px] text-gray-500 mt-2">{article.date}</p>
          )}
        </div>
      </div>
    )
  }

  if (layout === 'vertical') {
    return (
      <div className="group fade-in hover-lift rounded-lg">
        {article.image && (
          <Link to={`/article/${article.slug}`} className="block mb-2.5 image-hover rounded-lg overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full aspect-[4/3] object-cover"
            />
          </Link>
        )}
        <Link to={`/article/${article.slug}`} className="transition-colors">
          <h3 className="font-bold text-[17px] leading-[1.25] mb-2 group-hover:underline article-title">
            {article.title}
          </h3>
        </Link>
        {article.author && (
          <p className="text-[13px] text-gray-700 mb-1.5">by {article.author}</p>
        )}
        {article.excerpt && (
          <p className="text-[14px] text-gray-900 line-clamp-3 leading-[1.5]">{article.excerpt}</p>
        )}
        {article.date && (
          <p className="text-[11px] text-gray-500 mt-2 uppercase tracking-wide">{article.date}</p>
        )}
      </div>
    )
  }

  // List layout
  return (
    <div className="border-b border-gray-200 py-3 fade-in hover:bg-gray-50 transition-colors px-2 -mx-2 rounded">
      <Link to={`/article/${article.slug}`} className="group">
        <h3 className="font-bold text-[14px] leading-[1.35] hover:underline mb-1.5 transition-all">{article.title}</h3>
        <p className="text-[11px] text-gray-500 uppercase tracking-wide">{article.date}</p>
      </Link>
    </div>
  )
}

export default ArticleCard

