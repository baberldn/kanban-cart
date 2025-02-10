import React, { useEffect, useRef, useState } from "react";

function TaskTabs({ task }) {
  const [activeTab, setActiveTab] = useState("subtask");

  const tabs = [
    { id: "attachment", label: "Attachment", icon: "images/Iconf.png" },
    { id: "subtask", label: "Sub Task", icon: "images/Iconf.png" },
    { id: "comment", label: "Comment", icon: "images/Iconf.png" },
  ];

  return (
    <div className="border rounded-lg mt-4 sm:mt-8 mb-2 sm:mb-4">
      <div className="flex justify-around text-[10px] sm:text-xs border-b bg-[#F9FAFB]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 text-gray-600 relative ${
              activeTab === tab.id ? "text-[#145389]" : "hover:text-gray-900"
            }`}
          >
            <img src={tab.icon} alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#145389]"></div>
            )}
          </button>
        ))}
      </div>
      <div className="p-2 sm:p-4 h-[150px] sm:h-[180px]">
        {activeTab === "subtask" && (
          <div className="flex justify-between min-h-[100px] sm:min-h-[128px]">
            <div className="flex flex-col gap-1 sm:gap-2">
              <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs">
                <img
                  src="images/Task Icon.png"
                  alt=""
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="font-medium text-xs sm:text-sm">
                  Task Content
                </span>
                <div className="flex gap-1 items-center">
                  <img
                    src="images/Link 1.png"
                    alt=""
                    className="w-3 h-3 sm:w-auto sm:h-auto"
                  />
                  <span className="text-gray-300">#{task.id}</span>
                </div>
              </div>
              <div className="flex gap-1 sm:gap-2 text-[10px] sm:text-xs">
                <div className="flex gap-1 items-center">
                  <img
                    src="images/Calendar.png"
                    alt=""
                    className="w-3 h-3 sm:w-auto sm:h-auto"
                  />
                  <span className="text-[#98A2B3]">{task.date}</span>
                </div>
                <div className="flex gap-1 items-center">
                  <img
                    src="images/Rectangle 41978.png"
                    alt=""
                    className="w-3 h-3 sm:w-auto sm:h-auto"
                  />
                  <span className="font-medium text-[#98A2B3]">
                    Milestone Name
                  </span>
                </div>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 sm:w-4 sm:h-4"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.6191 8.05667L13.2877 4.90133C13.3697 4.746 13.3644 4.55933 13.2737 4.40933C13.1837 4.25933 13.0211 4.16733 12.8457 4.16733H8.45706V3.26C8.45706 2.984 8.23306 2.76 7.95706 2.76H3.65437V2.5C3.65437 2.224 3.43037 2 3.15437 2C2.87837 2 2.65437 2.224 2.65437 2.5V14.5C2.65437 14.776 2.87837 15 3.15437 15C3.43037 15 3.65437 14.776 3.65437 14.5V10.578L7.45839 10.484V11.498C7.45839 11.6327 7.51306 11.762 7.60906 11.856C7.70506 11.95 7.81039 11.998 7.97039 11.998L12.8577 11.8787C13.0317 11.8747 13.1904 11.78 13.2777 11.6293C13.3651 11.4793 13.3684 11.294 13.2857 11.1413L11.6191 8.05667Z"
                    fill={task.priority}
                  />
                </svg>
              </div>
            </div>
            <div>
              <img
                src="images/p1.png"
                alt=""
                className="w-[28px] h-[28px] sm:w-[35px] sm:h-[35px] rounded-full border border-white"
              />
            </div>
          </div>
        )}

        {activeTab === "attachment" && (
          <div className="flex items-center justify-center h-24 sm:h-32 text-gray-500 text-xs sm:text-sm">
            No attachments yet
          </div>
        )}

        {activeTab === "comment" && (
          <div className="flex items-center justify-center h-24 sm:h-32 text-gray-500 text-xs sm:text-sm">
            No comments yet
          </div>
        )}
      </div>
    </div>
  );
}

function ActivityItem({ id, user, action, target, time, projectLink }) {
  return (
    <div
      key={id}
      className="flex items-start gap-2 sm:gap-3 p-1.5 sm:p-2 bg-[#F3F6FD]"
    >
      <div className="relative">
        <img
          src={user.photo}
          alt=""
          className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-gray-200"
        />
        <div className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-white"></div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-0.5 sm:gap-1 text-xs sm:text-sm">
          <span className="font-medium text-[#344054]">{user.name}</span>
          <span className="text-[#475467]">{action}</span>
          {target && (
            <span className="font-medium text-[#344054]">{target}</span>
          )}
          {projectLink && (
            <a
              href="#"
              className="font-medium text-[#6941C6] hover:text-[#5e399E]"
            >
              {projectLink}
            </a>
          )}
        </div>
        <p className="text-[11px] sm:text-[13px] text-[#667085] mt-0.5">
          {time}
        </p>
      </div>
    </div>
  );
}
function Activities({ task }) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const activities = randoActivity();
    setActivities(activities);
  }, []);

  const activityRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  function handleMouseDown(e) {
    if (activityRef.current.contains(e.target)) {
      e.preventDefault();
      setIsDragging(true);
      setStartY(e.pageY - activityRef.current.offsetTop);
      setScrollTop(activityRef.current.scrollTop);
    }
  }

  function handleMouseLeave() {
    setIsDragging(false);
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  function handleMouseMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    const y = e.pageY - activityRef.current.offsetTop;
    const walk = y - startY;
    activityRef.current.scrollTop = scrollTop - walk;
  }

  function handleTouchStart(e) {
    const touch = e.touches[0];
    setIsDragging(true);
    setStartY(touch.pageY - activityRef.current.offsetTop);
    setScrollTop(activityRef.current.scrollTop);
  }

  function handleTouchMove(e) {
    if (!isDragging) return;
    const touch = e.touches[0];
    const y = touch.pageY - activityRef.current.offsetTop;
    const walk = y - startY;
    activityRef.current.scrollTop = scrollTop - walk;
  }

  function randoTime() {
    const times = [
      "2 mins ago",
      "5 mins ago",
      "10 mins ago",
      "1 hour ago",
      "2 hours ago",
      "3 hours ago",
    ];
    return times[Math.floor(Math.random() * times.length)];
  }

  function randoActivity() {
    const actions = [
      { action: "added a comment to", needsTarget: false },
      { action: "created a subtask in", needsTarget: false },
      { action: "invited", needsTarget: true },
      { action: "updated the status of", needsTarget: false },
      { action: "added a file to", needsTarget: false },
      { action: "mentioned you in", needsTarget: false },
    ];

    let activities = [];
    task.people.forEach((person) => {
      const numActivities = Math.floor(Math.random() * 12) + 1;
      for (let i = 0; i < numActivities; i++) {
        const randoAction = actions[Math.floor(Math.random() * actions.length)];
        const activity = {
          id: `activity-${crypto.randomUUID()}`,
          user: person,
          action: randoAction.action,
          time: randoTime(),
          projectLink: "Frontend Case",
        };

        if (randoAction.needsTarget) {
          const targets = task.people.filter((p) => p.name !== person.name);
          const target =
            targets.length > 0
              ? targets[Math.floor(Math.random() * targets.length)]
              : { name: "ghost" };
          activity.target = target.name;
        }
        activities.push(activity);
      }
    });
    return activities.sort((a, b) => {
      const aTime = parseInt(a.time);
      const bTime = parseInt(b.time);
      return aTime - bTime;
    });
  }

  return (
    <div className="w-full max-w-[280px] sm:max-w-md border-l border-[#EAECF0]">
      <div className="p-2 sm:p-3 border-b border-[#EAECF0]">
        <div className="flex items-center justify-between">
          <h2 className="text-xs sm:text-sm font-semibold text-[#145389]">
            Activity
          </h2>
          <div className="flex items-center gap-1 sm:gap-2">
            <button className="p-0.5 sm:p-1 hover:bg-gray-50 rounded-md">
              <img
                src="images/Icong.png"
                className="w-4 h-4 sm:w-auto sm:h-auto"
              />
            </button>
            <button className="p-1 sm:p-1.5 hover:bg-gray-50 rounded-md">
              <img
                src="images/filter-lines.png"
                className="w-4 h-4 sm:w-auto sm:h-auto"
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className="divide-y divide-[#EAECF0] overflow-y-auto max-h-[400px] sm:max-h-[500px] scrollbar-hide"
        ref={activityRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {activities.map((activity, index) => (
          <ActivityItem key={index} {...activity} />
        ))}
      </div>
    </div>
  );
}

function TaskDetails({ task, taskDeselect, handleDelete }) {
  const [thingy, setThingy] = useState(false);

  function handleThingy() {
    setThingy((prev) => !prev);
  }

  return (
    <div className="fixed inset-0 flex items-start sm:items-center justify-center bg-black bg-opacity-75 z-50 p-2 sm:p-0 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-[95%] sm:max-w-[85%] md:max-w-[75%] gap-2 sm:gap-4 my-4 sm:my-8">
        <div className="flex items-center gap-2 md:gap-8 justify-between px-3 sm:px-8 py-2 sm:py-4 border-b border-[#EAECF0] text-xs sm:text-sm md:text-base">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-8 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-1 sm:gap-2 md:gap-4 shrink-0">
              <button className="p-1 sm:p-2">
                <span className="inline-block w-4 h-4">
                  <img  src="images/Icon-1.png"
  
                    className="w-full h-full object-contain"
                  />
                </span>
              </button>
              <button className="p-1 sm:p-2">
                <span className="inline-block w-4 h-4">
                  <img src="images/Icon.png"
                    className="w-full h-full object-contain"
                  />
                </span>
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <img src="images/_Breadcrumb button base.png"
                className="w-4 h-4 object-contain"
              />
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-2">
                  <img  src="images/Icon-2.png"
                    className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
                  />
                  <span>25 Proje</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="images/Icon-2.png"
                    className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
                  />
                  <span>Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="images/Icon-2.png"
                    className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
                  />
                  <span className="text-blue-500 font-medium">
                    Frontend Case
                  </span>
                </div>
                <img  src="images/Icon-3.png"
                  className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <div
              className="p-1 sm:p-2 relative cursor-pointer"
              onClick={handleThingy}
            >
              <span className="inline-block w-4 h-4">
                <img  src="images/Icon-4.png"
                  className="w-full h-full object-contain"
                />
              </span>
              {thingy && (
                <div className="absolute text-[10px] sm:text-xs top-4 right-4 min-w-20 bg-white border border-gray-300 rounded-md flex flex-col p-1 divide-y divide-gray-300">
                  <button
                    className="p-1 hover:bg-gray-100 font-semibold text-red-600"
                    onClick={() => handleDelete(task)}
                  >
                    Delete Task
                  </button>
                  
                </div>
              )}
            </div>
            <button className="p-1 sm:p-2">
              <span className="inline-block w-4 h-4">
                <img  src="images/Icon-5.png"
                  className="w-full h-full object-contain"
                />
              </span>
            </button>
            <button className="p-1 sm:p-2">
              <span className="inline-block w-4 h-4">
                <img src="images/Icon-6.png"
                  className="w-full h-full object-contain"
                />
              </span>
            </button>
            <button onClick={taskDeselect} className="p-1 sm:p-2">
              <span className="inline-block w-4 h-4">
                <img  src="images/Icon-7.png"
                  className="w-full h-full object-contain"
                />
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] xl:grid-cols-[3fr_1.5fr]">
          <div className="p-3 sm:p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-6">
              <img src="images/Task Icon.png"
                className="w-5 h-5 sm:w-auto sm:h-auto"
              />
              <div>
                <h2 className="text-[#475467] font-bold text-base sm:text-xl">
                  {task.description}
                </h2>
                <div className="flex gap-1 items-center text-xs sm:text-sm text-[#98A2B3]">
                  <span>ID:</span>
                  <span className="underline">#{task.id}</span>
                  <img src="images/Copy 2.png"
                    className="w-3 h-3 sm:w-auto sm:h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 mb-3 sm:mb-6">
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">
                  Task Status
                </h3>
                <div className="flex items-center gap-2">
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm">
                    Open
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">
                  Assignment
                </h3>
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="flex -space-x-1 sm:-space-x-2">
                    {task.people.slice(0, 4).map((person, i) => (
                      <div key={person.id || person.name}>
                        <img
                          src={person.photo}
                          className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                        />
                      </div>
                    ))}
                    {task.people.length > 4 && (
                      <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs sm:text-sm text-gray-600">
                        +5
                      </span>
                    )}
                  </div>
                  <button className="p-0.5 sm:p-1 rounded-full border border-dashed border-gray-200 w-6 h-6 sm:w-8 sm:h-8 text-gray-500">
                    +
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">
                  Priority
                </h3>
                <div className="flex items-center gap-2">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 sm:w-auto sm:h-auto"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.6191 8.05667L13.2877 4.90133C13.3697 4.746 13.3644 4.55933 13.2737 4.40933C13.1837 4.25933 13.0211 4.16733 12.8457 4.16733H8.45706V3.26C8.45706 2.984 8.23306 2.76 7.95706 2.76H3.65437V2.5C3.65437 2.224 3.43037 2 3.15437 2C2.87837 2 2.65437 2.224 2.65437 2.5V14.5C2.65437 14.776 2.87837 15 3.15437 15C3.43037 15 3.65437 14.776 3.65437 14.5V10.578L7.45839 10.484V11.498C7.45839 11.6327 7.51306 11.762 7.60906 11.856C7.70506 11.95 7.81039 11.998 7.97039 11.998L12.8577 11.8787C13.0317 11.8747 13.1904 11.78 13.2777 11.6293C13.3651 11.4793 13.3684 11.294 13.2857 11.1413L11.6191 8.05667Z"
                      fill={task.priority}
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-3 sm:mb-6">
              <h3 className="text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">
                Description
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm">
                Görevin açıklaması: Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ea aperiam voluptates aut amet asperiores iste
                debitis et aliquam beatae, voluptate fugiat? Commodi a maxime
                veritatis omnis quis alias unde dolorum.
              </p>
            </div>
            <TaskTabs task={task} />
          </div>


          <div className="flex">
            <Activities task={task} />

            <div className="border-l border-[#EAECF0]">
              <div className="flex flex-col items-center justify-start text-[10px] font-medium text-[#D0D5DD] gap-2 border-[#EAECF0]">
                <div className="flex flex-col items-center justify-start gap-2 border-b p-2 border-[#EAECF0]">
                  <div className="flex flex-col items-center text-[#F79009]">
                    <button className="bg-[#FFFAEB] p-1.5 sm:p-2 rounded-lg">
                      <img  src="images/Icon-8.png"
                        className="w-4 h-4 sm:w-auto sm:h-auto"
                      />
                    </button>
                    <p>Activity</p>
                  </div>
                  <div className="flex flex-col items-center justify-start text-[10px] font-medium text-[#D0D5DD]">
                    <button className="bg-[#EAECF04D] p-1.5 sm:p-2 rounded-lg">
                      <img  src="images/Icon (2).png"
     
                        className="w-4 h-4 sm:w-auto sm:h-auto"
                      />
                    </button>
                    <p>QA</p>
                  </div>
                  <div className="flex flex-col items-center justify-start text-[10px] font-medium text-[#D0D5DD]">
                    <button className="bg-[#EAECF04D] p-1.5 sm:p-2 rounded-lg">
                      <img   src="images/Icon (2).png"
                        className="w-4 h-4 sm:w-auto sm:h-auto"
                      />
                    </button>
                    <p>Condition</p>
                  </div>
                  <div className="flex flex-col items-center justify-start text-[10px] font-medium text-[#D0D5DD]">
                    <button className="bg-[#EAECF04D] p-1.5 sm:p-2 rounded-lg">
                      <img src="images/Icon (2).png"
                        className="w-4 h-4 sm:w-auto sm:h-auto"
                      />
                    </button>
                    <p>Meetings</p>
                  </div>
                  <div className="flex flex-col items-center justify-start text-[10px] font-medium text-[#D0D5DD]">
                    <button className="bg-[#EAECF04D] p-1.5 sm:p-2 rounded-lg">
                      <img
                        src="images/Icon (2).png"
                        alt=""
                        className="w-4 h-4 sm:w-auto sm:h-auto"
                      />
                    </button>
                    <p>Docs</p>
                  </div>
                  <button className="bg-[#FFFAEB] p-1.5 sm:p-2 rounded-lg mb-2">
                    <img
                      src="images/Icon-8.png"
                      className="w-4 h-4 sm:w-auto sm:h-auto"
                    />
                  </button>
                </div>
                <button className="flex justify-center items-start p-1.5 sm:p-2 mt-2">
                  <img
                    src="images/Icon (3).png"
                    className="w-4 h-4 sm:w-auto sm:h-auto"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
