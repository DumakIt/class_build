/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "class-build-project",

  // 아래 주소들만 out폴더에 만들어줘! (getServerSideProps 있는 페이지는 제외)
  exportPathMap: () => {
    return {
      "/": { page: "/" },
      "/board": { page: "/board" },
      "/404": { page: "/404" },
    };
  },
};

module.exports = nextConfig;
