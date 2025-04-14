import React from "react";

const notes = [
  {
    id: 1,
    title: "go to gyym",
    content: "every day i am going to gym in the morning",
    created: "2 mins ago",
  },
  {
    id: 2,
    title: "go to Toilet",
    content: "every day i am going to gym in the toilet,some time wont come",
    created: "7 mins ago",
  },
  {
    id: 3,
    title: "go to School",
    content: "every day i am going to school in the moning by bus",
    created: "8 mins ago",
  },
];

const Dashboard = () => {
  return (
    <section className="py-8 max-h-screen px-3 md:px-6">
      <div>
        <h1>
          Welcome back,{" "}
          <span className="text-slate-400 text-xl font-extralight">
            Sujith Balan
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-4 sm:mt-10">
        {notes.map((note) => (
          <div className="bg-slate-700 text-white p-4 rounded-lg hover:bg-white  border-2 border-slate-800 hover:text-slate-900 hover:border-2 hover:border-slate-800  transition-all duration-500">
            <h2 className="text- md:text-2xl font-bold">{note.title}</h2>
            <p className="text-lg  mt-3">{note.content}</p>
            <div className="flex justify-end mt-5">
              <span className="text-slate-400">created {note.created}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
