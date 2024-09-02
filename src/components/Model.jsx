import { useState, useEffect } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const closeTimer = setTimeout(() => {
        setIsOpen(false);
      }, 5000);

      return () => clearTimeout(closeTimer);
    }
  }, [isOpen]);

  return (
    <div className="font-sans">
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Hello =)))
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">
                Welcome.Mình là Hoàng Anh! <br />
                Gửi thư ẩn danh cho mình ở đây nha.
              </p>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none"
              >
                Hủy
              </button>
              <button
                onClick={() => alert("Cảm ơn vì đã nhấn đồng ý :v")}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
              >
                Đồng Ý
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
