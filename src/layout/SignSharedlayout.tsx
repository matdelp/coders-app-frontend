import { NavLink } from "react-router-dom";

export type SignPagesProp = {
  children: React.ReactNode;
  title: string;
  message: string;
  link: string;
  path: string;
};

export const SignSharedlayout: React.FC<SignPagesProp> = (params) => {
  return (
    <main className="grid grid-cols-2 w-screen h-screen">
      <div className="flex items-center justify-center bg-background-500">
        <img src="src/assets/images/coding.png" alt="coding icon" />
      </div>
      <div className="flex flex-col items-center justify-center bg-background-100 w-full">
        <div className="flex flex-col items-center justify-center bg-white p-10 rounded-xl w-1/2">
          <h2 className="text-main-500 text-xl py-5">{params.title}</h2>
          {params.children}
          <p className="py-1">
            {params.message}
            {"  "}
            <NavLink className="text-main-500" to={params.path}>
              {params.link}
            </NavLink>
          </p>
        </div>
      </div>
    </main>
  );
};
