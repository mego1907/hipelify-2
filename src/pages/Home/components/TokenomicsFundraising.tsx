const TokenomicsFundraising = () => {
  const tableCols = [
    "Token Sales",
    "Capital Raise / $",
    "Valuation Cap / $",
    "Bonus Amount / %",
    "Effective Token Price / $",
    "Token Discount / %",
  ];

  const tableData = [
    [
      "Early Backers / Angels",
      "450,000",
      "27,000,000",
      "98.20%",
      "0.018",
      "50.91%",
    ],
    ["Seed", "2,500,000", "35,000,000", "40.00%", "0.023", "36.36%"],
    ["Pre-Sale 1", "2,500,000", "35,000,000", "40.00%", "0.023", "20.00%"],
    ["Pre-Sale 2", "2,500,000", "35,000,000", "40.00%", "0.023", "13.04%"],
    ["Public Sale", "1,400,000", "55,000,000", "0", "0.037", "0.00%"],
  ];

  return (
    <div className="flex flex-col">
      <h2 className="mb-12 text-2xl font-bold text-center text-white md:text-6xl">
        Tokenomics - Fundraising
      </h2>

      <div className="p-8 border rounded-xl">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden sm:rounded-lg">
              <table className="min-w-full">
                <thead className="text-white rounded-full bg-primary">
                  <tr>
                    {tableCols.map((col, index) => (
                      <th
                        key={index}
                        scope="col"
                        className={`px-6 py-3 text-lg font-medium tracking-wider text-center uppercase ${
                          index === 0 ? "rounded-l-full" : "border-l"
                        } ${
                          index === tableCols.length - 1 ? "rounded-r-full" : ""
                        }`}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-transparent ">
                  {tableData.map((item) => (
                    <tr>
                      {item.map((cell, index) => (
                        <td
                          key={index}
                          className={`px-6 py-4 text-lg text-center text-white whitespace-nowrap ${
                            index === 0 ? "border-none" : "border-l"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              type="button"
              className="w-full p-5 text-xl font-bold text-center text-white rounded-full bg-darkBtn"
            >
              Total Sum : 7,350,000$
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsFundraising;
