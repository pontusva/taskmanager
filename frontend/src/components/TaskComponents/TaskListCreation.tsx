const TaskListCreation = () => {
  return (
    <div className="mt-40">
      <div className="max-w-lg lg:ms-auto mx-auto text-center ">
        <div className="py-16 px-7 rounded-md bg-white">
          <form className="" action="" method="POST">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <label htmlFor="">Task name</label>
              <input
                type="text"
                id="taskname"
                name="taskname"
                placeholder="task name *"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 "
              />

              <div className="md:col-span-2">
                <label className="float-left block  font-normal text-gray-400 text-lg">
                  Task priority :
                </label>
                <select
                  id="assign"
                  name="assign"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700">
                  <option value="" disabled selected>
                    task priority
                  </option>
                  <option value="Option-1">normal</option>
                  <option value="Option-2">high</option>
                  <option value="Option-3">urgent</option>
                </select>
                <label className="float-left block  font-normal text-gray-400 text-lg">
                  Assign To:
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700">
                  <option value="" disabled selected>
                    assign
                  </option>
                  <option value="Option-1">Person 1</option>
                  <option value="Option-2">self</option>
                </select>
                <label className="float-left block  font-normal text-gray-400 text-lg">
                  Task category :
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700">
                  <option value="" disabled selected>
                    Choose category
                  </option>
                  <option value="Option-1">Bug</option>
                  <option value="Option-2">Feature</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <textarea
                  name="message"
                  rows={4}
                  cols={1}
                  placeholder="Enter task description"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskListCreation;
