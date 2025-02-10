import React, { useState } from "react";

const Sidebar = () => {
  const [toggledProjects, setToggledProjects] = useState({});
  const [isMobileNavOpens, setIsMobileNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({ title: "", color: "" });

  function toggleProject(id) {
    setToggledProjects((pre) => ({ ...pre, [id]: !pre[id] }));
  }

  const things = [
    {
      id: 1,
      title: "Proje İsim 1",
      color: "red",
      sublist: [
        { title: "Overview", notifications: 10 },
        { title: "Notifications", notifications: 10 },
        { title: "Analytics", notifications: 10 },
        { title: "Reports", notifications: 10 },
      ],
    },
    {
      id: 2,
      title: "Proje İsim 2",
      color: "purple",
      sublist: [
        { title: "Overview", notifications: 10 },
        { title: "Notifications", notifications: 10 },
        { title: "Analytics", notifications: 10 },
        { title: "Reports", notifications: 10 },
      ],
    },
    {
      id: 3,
      title: "Proje İsim 3",
      color: "yellow",
      sublist: [
        { title: "Overview", notifications: 10 },
        { title: "Notifications", notifications: 10 },
        { title: "Analytics", notifications: 10 },
        { title: "Reports", notifications: 10 },
      ],
    },
    {
      id: 4,
      title: "Proje İsim 4",
      color: "blue",
      sublist: [
        { title: "Overview", notifications: 10 },
        { title: "Notifications", notifications: 10 },
        { title: "Analytics", notifications: 10 },
        { title: "Reports", notifications: 10 },
      ],
    },
  ];

  const [projects, setProjects] = useState(things); 

  const handleCreateProject = () => {
    if (newProject.title && newProject.color) {
      const newId = projects.length + 1; 
      setProjects((prev) => [
        ...prev,
        { id: newId, title: newProject.title, color: newProject.color, sublist: [] },
      ]);
      setIsModalOpen(false);
      setNewProject({ title: "", color: "" });
    } else {
      alert("Lütfen proje adı ve rengi seçin.");
    }
  };

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-[#363F72] border border-[#667085]"
        onClick={() => setIsMobileNavOpen(!isMobileNavOpens)}
      >
        <div className="w-6 h-6 relative">
          <div className="absolute top-1 bg-white w-6 h-[3px] rounded-sm"></div>
          <div className="absolute top-3 bg-white w-6 h-[3px] rounded-sm"></div>
          <div className="absolute top-5 bg-white w-6 h-[3px] rounded-sm"></div>
        </div>
      </button>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity lg:hidden ${
          isMobileNavOpens ? "opacity-90 z-40" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileNavOpen(false)}
      />

      <div
        className={`flex min-h-dvh fixed lg:static ${
          isMobileNavOpens ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } transition-transform duration-300 z-40`}
      >
        <div className="w-[72px] min-h-dvh">
          <div className="flex flex-col justify-between items-center min-h-dvh w-[72px] pb-4 pt-16 lg:pt-6 bg-[#363F72] ">
            <ul className="flex flex-col gap-2 cursor-pointer">
              {[1, 2, 3, 4].map((item) => (
                <li
                  key={item}
                  className="p-4 hover:bg-[#fefefe] rounded-lg transition-colors duration-300"
                >
                  <img
                    src="images/bell.png"
                    className="w-[16px] h-[20px] text-white"
                  />
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-2 cursor-pointer">
              {[1, 2, 3, 4].map((item) => (
                <li
                  key={item}
                  className="p-4 hover:bg-[#fefefe] rounded-lg transition-colors duration-300"
                >
                  <img
                    src="images/bell.png"
                    className="w-[16px] h-[20px] text-white"
                  />
                </li>
              ))}
              <div className="mt-4">
                <img src="images/Avatar.png" />
              </div>
            </ul>
          </div>
        </div>

        <div className="w-[282px] p-6 flex flex-col justify-between border-r border-[#dee2e9] bg-white min-h-dvh">
          <h2 className="text-xl font-bold mb-[-330px]">Projeler</h2>
          <ul className="flex flex-col gap-1">
            {projects.map((thing) => (
              <React.Fragment key={thing.id}>
                <li
                  className="flex justify-between items-center cursor-pointer hover:bg-[#F3F6FD] transition-colors duration-300 rounded-md py-1 px-2"
                  onClick={() => toggleProject(thing.id)}
                >
                  <div className="flex items-center gap-2 p-1">
                    <div
                      className="w-[10px] h-[10px] rounded-full"
                      style={{ backgroundColor: thing.color }} 
                    ></div>
                    {thing.title}
                  </div>
                  <img src="images/Icon(2).png" />
                </li>
                <ul
                  className={`transition-[max-height] duration-300 overflow-hidden flex flex-col gap-1 text-sm ${
                    toggledProjects[thing.id] ? "max-h-48" : "max-h-0"
                  }`}
                >
                  {thing.sublist.map((item) => (
                    <li
                      key={item.title}
                      className="hover:bg-[#F3F6FD] transition-colors duration-300 flex justify-center items-center rounded-md"
                    >
                      <a
                        href="#"
                        className="flex justify-between p-1 pl-8 w-full"
                      >
                        {item.title}
                        <div className="border border-[#EAECF0] rounded-full text-sm px-1 bg-[#F9FAFB]">
                          {item.notifications}
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            ))}

            <li
              className="flex gap-4 items-center cursor-pointer text-[#98A2B3] hover:bg-[#F3F6FD] transition-colors duration-300 rounded-md py-1 px-2"
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src="images/Icon(1).png"
                alt=""
                className="w-full h-[16px] max-w-[14px]"
              />
              Proje Oluştur
            </li>
          </ul>

          <div className="flex justify-between text-sm">
            <div>
              <p className="font-bold">Beril Badan</p>
              <p>baberldn@gmail.com</p>
            </div>
            <div className="w-[10px] h-[10px] border-2 border-[#475467] rounded-full mt-[10px]"></div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">Yeni Proje Oluştur</h2>
            <input
              type="text"
              placeholder="Proje Adı"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <select
              value={newProject.color}
              onChange={(e) => setNewProject({ ...newProject, color: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            >
              <option value="">Renk Seçin</option>
              <option value="red">Kırmızı</option>
              <option value="purple">Mor</option>
              <option value="yellow">Sarı</option>
              <option value="blue">Mavi</option>
              <option value="green">Yeşil</option>
              <option value="orange">Turuncu</option>
              <option value="pink">Pembe</option>
              <option value="gray">Gri</option>
              <option value="brown">Kahverengi</option>
              <option value="cyan">Cyan</option>
              <option value="magenta">Magenta</option>
            </select>
            <div className="flex justify-end">
              <button
                onClick={handleCreateProject}
                className="bg-[#145389] text-white py-1 px-4 rounded-md"
              >
                Oluştur
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="ml-2 text-gray-500"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;