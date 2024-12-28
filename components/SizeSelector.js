export default function SizeSelector() {
    return (
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-800">Select a Size</h2>
        <div className="flex items-center space-x-4 mt-4">
          <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">42mm</button>
          <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">46mm</button>
        </div>
      </div>
    );
  }
  