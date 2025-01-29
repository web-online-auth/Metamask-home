import React from "react";

const Verify = () => {
  const openChat = () => {
    if (window.Tawk_API && window.Tawk_API.maximize) {
      window.Tawk_API.maximize(); // Open the Tawk.to chat widget
    } else {
      alert("Please wait...");
    }
  };

  return (
    <div className="bg-white min-h-screen flex justify-center items-center p-4 sm:p-6">
      <div className="w-full max-w-lg sm:max-w-xl bg-white rounded-lg shadow-md border-2">
        {/* Header Image */}
        <div className="flex justify-center py-4">
        <img
              alt="Navigation"
              className="w-32"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjExIiBoZWlnaHQ9IjQxIiB2aWV3Qm94PSIwIDAgMjExIDQxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0zNC41NzcxIDAuODIyMDIxQzM1Ljk5NzQgMy4xNjczMyAzNi42Mzc3IDUuNTgzMDEgMzYuNjM3NyA4LjYzNDUxQzM2LjYzNzcgMTguMzY3MiAyOC4zMjc3IDMxLjAxMDcgMjEuNTgzMiAzOS44ODg4SDYuMTc4MjVMMCAyLjk1Mjk2TDEzLjQ4ODcgMS42NzI1OEwxNi43NTUyIDI3Ljk1NDhDMTkuODA3NCAyMi45ODM0IDIzLjU3MzggMTUuMTcxIDIzLjU3MzggOS44NDQ1M0MyMy41NzM4IDYuOTI5MDIgMjMuMDc0MyA0Ljk0MzE4IDIyLjI5MzUgMy4zMDgwNkwzNC41NzcxIDAuODIyMDIxWiIgZmlsbD0iIzAwOENGRiIvPgogIDxwYXRoIGQ9Ik01Mi4wNTk1IDE3LjA4ODdDNTQuNTQxNyAxNy4wODg3IDYwLjc5MDcgMTUuOTUzNCA2MC43OTA3IDEyLjQwMjRDNjAuNzkwNyAxMC42OTczIDU5LjU4NDggOS44NDY3NiA1OC4xNjM3IDkuODQ2NzZDNTUuNjc3NiA5Ljg0Njc2IDUyLjQxNSAxMi44Mjc1IDUyLjA1OTUgMTcuMDg4N1pNNTEuNzc1MSAyNC4xMjE0QzUxLjc3NTEgMjguNDU3MyA1NC4xODY1IDMwLjE1ODQgNTcuMzgzNCAzMC4xNTg0QzYwLjg2NDcgMzAuMTU4NCA2NC4xOTc5IDI5LjMwNzggNjguNTMwMyAyNy4xMDY1TDY2Ljg5ODUgMzguMTg1MkM2My44NDYgMzkuNjc2MyA1OS4wODg4IDQwLjY3MTMgNTQuNDcxMyA0MC42NzEzQzQyLjc1ODQgNDAuNjcxMyAzOC41NjY0IDMzLjU2OTMgMzguNTY2NCAyNC42OTA4QzM4LjU2NjQgMTMuMTgzNCA0NS4zODUzIDAuOTY0NiA1OS40NDM2IDAuOTY0NkM2Ny4xODM3IDAuOTY0NiA3MS41MTE3IDUuMzAwMTMgNzEuNTExNyAxMS4zMzcxQzcxLjUxMjQgMjEuMDY5NSA1OS4wMTg4IDI0LjA1MSA1MS43NzUxIDI0LjEyMTRaIiBmaWxsPSIjMDA4Q0ZGIi8+CiAgPHBhdGggZD0iTTExMC40MzkgOS4zNDgzNUMxMTAuNDM5IDEwLjc2ODcgMTEwLjIyNCAxMi44Mjg5IDExMC4wMDkgMTQuMTc1M0wxMDUuOTYyIDM5Ljc0NzRIOTIuODI3NUw5Ni41MTk2IDE2LjMwNTlDOTYuNTg5NiAxNS42NzAxIDk2LjgwNDggMTQuMzkwMSA5Ni44MDQ4IDEzLjY3OTlDOTYuODA0OCAxMS45NzQ3IDk1LjczOTMgMTEuNTQ5MyA5NC40NTgzIDExLjU0OTNDOTIuNzU2OCAxMS41NDkzIDkxLjA1MTMgMTIuMzI5OCA4OS45MTU1IDEyLjg5OTdMODUuNzI3OCAzOS43NDc3SDcyLjUxOTVMNzguNTUzNyAxLjQ2MTg1SDg5Ljk4NTVMOTAuMTMwMiA0LjUxNzczQzkyLjgyNzIgMi43NDIyNCA5Ni4zNzg1IDAuODIyMDIyIDEwMS40MTcgMC44MjIwMjJDMTA4LjA5MyAwLjgyMTI5MiAxMTAuNDM5IDQuMjMxOSAxMTAuNDM5IDkuMzQ4MzVaIiBmaWxsPSIjMDA4Q0ZGIi8+CiAgPHBhdGggZD0iTTE0OS40MzIgNS4xNTU3N0MxNTMuMTk0IDIuNDU5MzYgMTU2Ljc0NiAwLjk2NDYgMTYxLjY0MyAwLjk2NDZDMTY4LjM4NyAwLjk2NDYgMTcwLjczMyA0LjM3NTIxIDE3MC43MzMgOS40OTE2N0MxNzAuNzMzIDEwLjkxMjEgMTcwLjUxOCAxMi45NzIzIDE3MC4zMDQgMTQuMzE4N0wxNjYuMjYxIDM5Ljg5MDdIMTUzLjEyM0wxNTYuODg2IDE1Ljk1MzhDMTU2Ljk1NSAxNS4zMTM5IDE1Ny4xMDEgMTQuNTMzNCAxNTcuMTAxIDE0LjAzODNDMTU3LjEwMSAxMi4xMTg0IDE1Ni4wMzUgMTEuNjkyNiAxNTQuNzU0IDExLjY5MjZDMTUzLjEyMyAxMS42OTI2IDE1MS40OTIgMTIuNDAyOCAxNTAuMjgxIDEzLjA0M0wxNDYuMDk0IDM5Ljg5MTFIMTMyLjk2TDEzNi43MjIgMTUuOTU0MUMxMzYuNzkxIDE1LjMxNDMgMTM2LjkzMyAxNC41MzM4IDEzNi45MzMgMTQuMDM4N0MxMzYuOTMzIDEyLjExODggMTM1Ljg2NiAxMS42OTMgMTM0LjU5IDExLjY5M0MxMzIuODg1IDExLjY5MyAxMzEuMTgzIDEyLjQ3MzUgMTMwLjA0NyAxMy4wNDM0TDEyNS44NTYgMzkuODkxNUgxMTIuNjUyTDExOC42ODYgMS42MDU1MkgxMjkuOTc4TDEzMC4zMzMgNC44MDE3NkMxMzIuOTYgMi44ODYyOCAxMzYuNTA4IDAuOTY2MDU3IDE0MS4yNjUgMC45NjYwNTdDMTQ1LjM4NCAwLjk2NDU5OSAxNDguMDggMi43NDA0NSAxNDkuNDMyIDUuMTU1NzdaIiBmaWxsPSIjMDA4Q0ZGIi8+CiAgPHBhdGggZD0iTTE5Ni44NjkgMTYuMzA3NkMxOTYuODY5IDEzLjE4MjEgMTk2LjA4NyAxMS4wNTEyIDE5My43NDYgMTEuMDUxMkMxODguNTYzIDExLjA1MTIgMTg3LjQ5OCAyMC4yMTMzIDE4Ny40OTggMjQuOTAwM0MxODcuNDk4IDI4LjQ1NiAxODguNDkzIDMwLjY1NjYgMTkwLjgzNCAzMC42NTY2QzE5NS43MzMgMzAuNjU2NiAxOTYuODY5IDIwLjk5NDIgMTk2Ljg2OSAxNi4zMDc2Wk0xNzQuMTUgMjQuMzM0NUMxNzQuMTUgMTIuMjYwOCAxODAuNTM5IDAuOTYzMzc5IDE5NS4yMzggMC45NjMzNzlDMjA2LjMxNCAwLjk2MzM3OSAyMTAuMzYzIDcuNDk5ODUgMjEwLjM2MyAxNi41MjJDMjEwLjM2MyAyOC40NTU2IDIwNC4wNDMgNDAuODE0IDE4OC45ODkgNDAuODE0QzE3Ny44NDIgNDAuODE0IDE3NC4xNSAzMy40OTcgMTc0LjE1IDI0LjMzNDVaIiBmaWxsPSIjMDA4Q0ZGIi8+Cjwvc3ZnPg=="
            />
        </div>

        {/* Alert Message */}
        <div className="text-center px-4 sm:px-8 py-6">
          <h1 className="text-red-500 text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Important Message
          </h1>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            Due to unauthorized activity and identification failure on your
            Account, access has been suspended. Please get in touch with our
            Support Staff immediately.
          </p>
          <p className="font-bold text-gray-800 text-sm sm:text-base md:text-lg">
            Error CODE: EBRX16X76D
          </p>
        </div>

        {/* Action Button */}
        <div className="flex justify-center pb-6">
          <button
            className="px-6 py-3 bg-blue-700 text-white text-sm sm:text-base rounded-lg hover:bg-blue-800 transition"
            onClick={openChat}
          >
            Ask Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verify;
