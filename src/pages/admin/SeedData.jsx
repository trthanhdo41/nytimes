import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Database, AlertCircle, CheckCircle } from 'lucide-react';
import { seedDatabase } from '../../utils/seedData';

const SeedData = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSeed = async () => {
    if (!window.confirm('Are you sure you want to import sample articles? This will add ~25 articles to your database.')) {
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const { successCount, errorCount } = await seedDatabase();
      setResult({ successCount, errorCount });
    } catch (err) {
      console.error('Seed error:', err);
      setError('Failed to seed database. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 py-4">
            <Link
              to="/admin/dashboard"
              className="text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Import Sample Data</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <div className="text-center mb-8">
            <Database className="w-16 h-16 text-secondary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Import Sample Articles
            </h2>
            <p className="text-gray-600">
              This will add approximately 25 high-quality sample articles across all categories.
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {result && (
            <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-green-800 mb-1">
                    Import Complete!
                  </p>
                  <p className="text-sm text-green-700">
                    Successfully imported {result.successCount} articles.
                    {result.errorCount > 0 && ` Failed: ${result.errorCount}`}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
            <h3 className="text-sm font-medium text-blue-800 mb-2">
              What will be imported:
            </h3>
            <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
              <li>Kitchen: 4 articles (Chef's Knife, Cutting Boards, Blender, Coffee Maker)</li>
              <li>Tech: 4 articles (Wireless Earbuds, Laptop, Smartphone, Tablet)</li>
              <li>Home & Garden: 3 articles (Vacuum, Air Purifier, Robot Vacuum)</li>
              <li>Health & Lifestyle: 3 articles (Fitness Tracker, Yoga Mat, Water Bottle)</li>
              <li>Baby & Kid: 3 articles (Car Seat, Stroller, Baby Monitor)</li>
              <li>Style: 3 articles (T-Shirt, Jeans, Sneakers)</li>
              <li>Electronics: 3 articles (Headphones, Monitor, Keyboard)</li>
              <li>Gifts: 2 articles (Under $50, Coffee Lovers)</li>
              <li>Featured articles will appear on homepage</li>
            </ul>
          </div>

          <div className="flex gap-3 justify-center">
            <Link
              to="/admin/dashboard"
              className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              Cancel
            </Link>
            <button
              onClick={handleSeed}
              disabled={loading || result !== null}
              className="px-6 py-2 bg-secondary text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Importing...
                </>
              ) : result ? (
                'Import Complete'
              ) : (
                <>
                  <Database className="w-4 h-4" />
                  Import Sample Data
                </>
              )}
            </button>
          </div>

          {result && (
            <div className="mt-6 text-center">
              <Link
                to="/admin/dashboard"
                className="text-secondary hover:underline"
              >
                Go to Dashboard →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeedData;

