
interface User {
  id: string;
  name: string | null;
  email: string | null;
  number: string;

}
 // Replace with your backend URL
export default function  ProfileCard({ user }: { user: User })  {

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 relative">
        <button
          className="absolute top-4 right-4 text-sm bg-indigo-100 text-[#6a51a6] px-3 py-1 rounded hover:bg-indigo-200"
        >
          Edit
        </button>

      
        <>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            User Info
          </h2>
          <div className="text-gray-700 space-y-2">
            <p>
              <span className="font-medium">Name:</span> {user.name || "-"}
            </p>
            <p>
              <span className="font-medium">Email:</span> {user.email || "-"}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {user.number}
            </p>
          </div>
        </>
    </div>
  );
};
