import Profile from "~/components/Profile";

const PERSONS = [
  {
    imgURL: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, at?",
    languages: ["English", "Indonesia", "France", "Japan"],
  },
  {
    imgURL:
      "https://images.unsplash.com/photo-1546539782-6fc531453083?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Emmilie Johnson",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, at?",
    languages: ["English"],
  },
];

function App() {
  return (
    <div className="p-12 flex flex-wrap gap-8 justify-center items-center">
      {PERSONS.map((person) => (
        <Profile
          key={person.name}
          name={person.name}
          imgURL={person.imgURL}
          description={person.description}
          languages={person.languages}
        />
      ))}
    </div>
  );
}

export default App;
