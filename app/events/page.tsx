import { prisma } from '@/lib/prisma';

export default async function EventsPage() {
  const events = await prisma.event.findMany({
    include: {
      member: true,
    },
    orderBy: {
      date: 'desc',
    },
  });

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">历史事件</h1>
          <a
            href="/events/new"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
          >
            添加事件
          </a>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {events.map((event) => (
              <li key={event.id}>
                <a href={`/events/${event.id}`} className="block hover:bg-gray-50">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-indigo-600 truncate">
                          {event.title}
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">{event.description}</span>
                        </div>
                      </div>
                      <div className="ml-6 flex-shrink-0">
                        <div className="text-sm text-gray-500">
                          {new Date(event.date).toLocaleDateString()}
                        </div>
                        <div className="mt-1 text-sm text-gray-500">
                          {event.location}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="text-sm text-gray-500">
                        相关成员: {event.member.name}
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 