import { cookies } from "next/headers";
import BasketPage from "@/components/templates/BasketPage";
import { redirect } from "next/navigation";

export default async function Basket() {
  const cookieStore = cookies();
  const token = cookieStore.get("accessToken")?.value;
  //   console.log(token);
  if (!token ) redirect("/?redirected=unauthorized");

  const [tourData, profileData] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}basket`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }),
  ]);

  const tour = await tourData.json();
  const user = await profileData.json();
  console.log({ tour, user });
  if(!tour || tour.length === 0 || tour.message === "خطا در دریافت سبد خرید." ) redirect("/?redirected=emptyBasket")

  return <BasketPage data={{tour,user}} />;
}
