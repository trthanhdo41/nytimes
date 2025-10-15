import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { 
  Save, 
  ArrowLeft, 
  AlertCircle,
  Loader
} from 'lucide-react';
import {
  createArticle,
  updateArticle,
  getArticleById
} from '../../firebase/articleService';

const ArticleEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'Kitchen',
    author: '',
    excerpt: '',
    content: '',
    mainImage: '',
    featured: false,
    tags: []
  });

  const categories = [
    'Prime Day',
    'Kitchen',
    'Electronics',
    'Home & Garden',
    'Health & Lifestyle',
    'Tech',
    'Baby & Kid',
    'Style',
    'Gifts',
    'Deals'
  ];

  useEffect(() => {
    if (isEditMode) {
      loadArticle();
    }
  }, [id]);

  const loadArticle = async () => {
    try {
      setLoading(true);
      const article = await getArticleById(id);
      setFormData({
        title: article.title || '',
        slug: article.slug || '',
        category: article.category || 'Kitchen',
        author: article.author || '',
        excerpt: article.excerpt || '',
        content: article.content || '',
        mainImage: article.mainImage || '',
        featured: article.featured || false,
        tags: article.tags || []
      });
    } catch (error) {
      console.error('Error loading article:', error);
      setError('Failed to load article. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'title') {
      setFormData({
        ...formData,
        title: value,
        slug: generateSlug(value)
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.title.trim()) {
      setError('Title is required');
      return;
    }
    if (!formData.author.trim()) {
      setError('Author is required');
      return;
    }
    if (!formData.excerpt.trim()) {
      setError('Excerpt is required');
      return;
    }
    if (!formData.content.trim()) {
      setError('Content is required');
      return;
    }

    try {
      setSaving(true);

      const articleData = {
        ...formData,
        title: formData.title.trim(),
        author: formData.author.trim(),
        excerpt: formData.excerpt.trim(),
        content: formData.content.trim()
      };

      if (isEditMode) {
        await updateArticle(id, articleData);
      } else {
        await createArticle(articleData);
      }

      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Error saving article:', error);
      setError('Failed to save article. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading article...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <Link
                to="/admin/dashboard"
                className="text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">
                {isEditMode ? 'Edit Article' : 'New Article'}
              </h1>
            </div>
            <button
              onClick={handleSubmit}
              disabled={saving}
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? (
                <>
                  <Loader className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save Article
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              placeholder="Enter article title..."
            />
            <p className="text-xs text-gray-500 mt-1">
              Slug: {formData.slug || 'auto-generated-from-title'}
            </p>
          </div>

          {/* Meta Information */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Meta Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Author *
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  placeholder="Author name..."
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-secondary focus:ring-secondary border-gray-300 rounded"
                />
                <span className="text-sm font-medium text-gray-700">
                  Featured Article
                </span>
              </label>
            </div>
          </div>

          {/* Main Image */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Image</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL
              </label>
              <input
                type="url"
                name="mainImage"
                value={formData.mainImage}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                placeholder="https://example.com/image.jpg"
              />
              <p className="text-xs text-gray-500 mt-2">
                Paste image URL from Imgur, Unsplash, Picsum, or any image hosting service
              </p>
            </div>
            
            {formData.mainImage && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
                <img
                  src={formData.mainImage}
                  alt="Preview"
                  className="w-full h-64 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}
          </div>

          {/* Excerpt */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Excerpt *
            </label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              required
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
              placeholder="Short description of the article..."
            />
          </div>

          {/* Content */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content *
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              required
              rows={20}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none font-mono text-sm"
              placeholder="Write your article content here... You can use HTML tags for formatting."
            />
            <p className="text-xs text-gray-500 mt-2">
              Tip: You can use HTML tags like &lt;p&gt;, &lt;h2&gt;, &lt;strong&gt;, &lt;ul&gt;, &lt;li&gt; for formatting.
            </p>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 justify-end">
            <Link
              to="/admin/dashboard"
              className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2 bg-secondary text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? 'Saving...' : (isEditMode ? 'Update Article' : 'Create Article')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleEditor;

