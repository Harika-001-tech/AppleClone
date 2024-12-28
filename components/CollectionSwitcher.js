export default function CollectionSwitcher() {
    return (
      <div className="mb-8">
        <label className="block text-gray-800 text-sm font-medium">
          Select Collection
        </label>
        <select className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
          <option>Series 10</option>
          <option>Hermès</option>
          <option>SE</option>
        </select>
      </div>
    );
  }
  