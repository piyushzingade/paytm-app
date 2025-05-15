
// import { Button } from "./button";

// interface AppbarProps {
//     user?: {
//         name?: string | null;
//     },
//     // TODO: can u figure out what the type should be here?
//     onSignin: any,
//     onSignout: any
// }

// export const Appbar = ({
//     user,
//     onSignin,
//     onSignout
// }: AppbarProps) => {
//     return <div className="flex justify-between border-b px-2 border-slate-300 py-2">z
//         <div className="text-xl font-bold flex flex-col justify-center pl-6">
//             PayTM
//         </div>
//         <div className="flex flex-col justify-center  pr-4">
//             <Button 
//                 className="border border-slate-500 text-slate-700 bg-transparent p-2 rounded-xl hover:text-white  hover:bg-[#6a51a6]"
//                 onClick={user ? onSignout : onSignin}>
//                 {user ? "Logout" : "Login"}
//             </Button>

//         </div>
//     </div>
// }
