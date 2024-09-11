import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/style.css";

const AnonymousMessageForm = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const randomMessages = [
    "Test",
    "5cm",
    "Anh có iu em hông =))))",
    "Em chào anh Hoàng Anh!",
    "Em xin chào anh Hoàng Anh",
  ];

  const handleRandomMessage = () => {
    setIsSpinning(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * randomMessages.length);
      setMessage(randomMessages[randomIndex]);
      setError("");
      setIsSpinning(false);
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) {
      setError("Vui lòng nhập nội dung trước khi gửi.");
      return;
    }

    setError("");

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSfIYKl0u5pb-xfJOQnqhTSm3jdbRUbDooc6x0N3G2zUregvXw/formResponse";

    const formData = new FormData();
    formData.append("entry.397582701", message);

    try {
      await fetch(formURL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      toast.success("Gửi thành công!");
      setMessage("");
    } catch (error) {
      console.error("Có lỗi xảy ra khi gửi dữ liệu:", error);
      toast.error("Có lỗi xảy ra khi gửi dữ liệu.");
    }
  };

  return (
    <div className="relative flex justify-center pt-12 min-h-screen bg-blue-500 py-4">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="snail"></div>
        <div className="snail"></div>
        <div className="snail"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-11/12 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        style={{ height: "350px" }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
          Thư ẩn danh
        </h2>
        <form
          className="flex flex-col h-full space-y-4"
          onSubmit={handleSubmit}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
            className="mb-4"
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Nhập nội dung để submit nhé"
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={!message.trim()}
            className={`w-full py-2 sm:py-3 rounded-md transition duration-300 ${
              message.trim()
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
          >
            Gửi
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={handleRandomMessage}
            className="w-full mt-4 bg-blue-600 text-white py-2 sm:py-3 rounded-md hover:bg-blue-700 transition duration-300 flex justify-center items-center"
          >
            <motion.span
              animate={isSpinning ? { rotate: 360 } : { rotate: 0 }}
              transition={{ repeat: isSpinning ? Infinity : 0, duration: 1 }}
            >
              🎲
            </motion.span>
            Tạo nội dung ngẫu nhiên
          </motion.button>
        </form>
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default AnonymousMessageForm;
