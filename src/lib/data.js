export const allCattles = async () => {
  const res = await fetch(
    "https://qurbani-hat-9w66-git-main-shafiullahbashaar-7454s-projects.vercel.app/data.json",
  );
  const data = await res.json();
  return data;
};
