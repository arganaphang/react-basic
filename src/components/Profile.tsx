import React from "react";

type ProfileProps = {
  imgURL: string;
  name: string;
  description: string;
  languages: string[];
};

const Profile: React.FC<ProfileProps> = ({
  imgURL,
  name,
  description,
  languages,
}) => {
  return (
    <div className="bg-white w-56 h-80 rounded-lg py-6 px-2 flex flex-col gap-4 justify-center items-center">
      <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-500 text-white text-xs grid place-content-center">
        <img src={imgURL} alt={`${name} face`} className="w-full h-full" />
      </div>
      <div className="text-center flex-1 flex flex-col gap-2">
        <h1 className="text-lg font-bold line-clamp-1">{name}</h1>
        <p className="text-sm line-clamp-3">{description}</p>
        <ul className="flex flex-wrap gap-2 justify-center">
          {languages.map((lang, idx) => (
            <li key={idx}>
              <span className="text-xs px-2 py-1 rounded-sm bg-slate-500 text-slate-50">
                {lang}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
