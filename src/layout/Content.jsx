import { useState } from "react";
import { motion } from "framer-motion";
import "../css/style.css";

const AnonymousMessageForm = () => {
  const [message, setMessage] = useState("");

  const randomMessages = [
    "Anh có iu em hông =))))",
    "Em chào anh Hoàng Anh!",
    "Em xin chào anh Hoàng Anh",
  ];

  const handleRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * randomMessages.length);
    setMessage(randomMessages[randomIndex]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSfIYKl0u5pb-xfJOQnqhTSm3jdbRUbDooc6x0N3G2zUregvXw/formResponse"; // Thay FORM_ID bằng ID của form của bạn

    const formData = new FormData();
    formData.append("entry.397582701", message);

    try {
      const response = await fetch(formURL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
      
     
      alert("Gửi thành công!");
      setMessage("");
    } catch (error) {
      console.error("Có lỗi xảy ra khi gửi dữ liệu:", error);
      

    }
  };

  return (
    <div className="relative flex justify-center pt-12 min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-sans animated-gradient">
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
          Gửi thư ẩn danh
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
              placeholder="Nhập nội dung thư ẩn danh"
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Gửi
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={handleRandomMessage}
            className="w-full mt-4 bg-gray-300 text-black py-2 sm:py-3 rounded-md hover:bg-gray-400 transition duration-300 flex justify-center items-center"
          >
            🎲 Tạo nội dung ngẫu nhiên
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default AnonymousMessageForm;
