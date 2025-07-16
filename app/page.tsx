import Link from "next/link";
import { redirect } from "next/navigation";

const Home = () => {
  return redirect("/pages/welcome");
};

export default Home;
