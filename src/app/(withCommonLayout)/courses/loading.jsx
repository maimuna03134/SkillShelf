import Container from '@/components/shared/Container';

export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#1a1d23] transition-colors">
      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-r from-[#17a2b7] to-[#24292d] text-white py-16">
        <Container>
          <div className="animate-pulse">
            <div className="h-12 bg-white/20 rounded-lg w-3/4 mb-4"></div>
            <div className="h-6 bg-white/20 rounded-lg w-1/2"></div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-8">
          {/* Filter/Count Skeleton */}
          <div className="mb-8 animate-pulse">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
          </div>

          {/* Course Cards Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white dark:bg-[#24292d] rounded-xl shadow-md overflow-hidden animate-pulse"
              >
                {/* Image Skeleton */}
                <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
                
                {/* Content Skeleton */}
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                  
                  <div className="flex justify-between items-center pt-4">
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
