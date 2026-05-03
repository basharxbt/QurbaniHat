export const allCattles = async () => {
  const res = await fetch("https://qurbani-hat-9w66.vercel.app/data.json", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};
