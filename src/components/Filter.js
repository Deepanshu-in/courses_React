function Filter(props) {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler(title) {
    setCategory(title);
  }
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((data) => {
        return (
          <button
            className={`button tex-lg px-2 py-1 rounded-md font-medium text-white bg-slate-400 hover:bg-opacity-50 border
                ${
                  category === data.title
                    ? "bg-opacity-60 border-white"
                    : "bg-opacity-40 border-transparent"
                }
                transition-all duration-200`}
            key={data.id}
            onClick={() => filterHandler(data.title)}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
}
export default Filter;
//${category=== data.title ?"bg-opacity-60 border-white" :"bg-opacity-40 border-transparent"}
