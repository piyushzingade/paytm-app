
import ProfileCard from "../../../components/Profile";
import { getUserDetails } from "../../lib/actions/getUsetDetails";


export default async function Profile() {
  const user = await getUserDetails();

  if (!user) {
    return (
      <div className="text-center mt-10 text-red-600 text-lg">
        Failed to load profile. Please log in.
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-8 py-10">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
        Profile
      </h1>
      <ProfileCard user={user} />
    </div>
  );
};
