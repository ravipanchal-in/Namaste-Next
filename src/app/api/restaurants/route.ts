import { restaurantList } from "@/constants/db";
import { NextResponse } from "next/server";

export async function GET() {
  const data = restaurantList;
  return NextResponse.json(data, { status: 200 });
}
