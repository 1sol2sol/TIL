/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}", // pages/모든폴더/모든파일/{확장자 나열}
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  // defult 설정은 media(브라우저의 설정을 따름, 컴퓨터 브라우저가 다크모드 설정이라면 자동으로 다크모드로 보이게됨)
  // class로 설정하면 토글버튼으로 수동을오 변경할 수 있음
  darkMode:"class", 
  plugins: [],
};
