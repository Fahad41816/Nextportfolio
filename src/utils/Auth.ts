"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export const loginUser = async (userData: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(
      "https://nifahadserver.vercel.app//login",
      userData
    );

    if (response.data) {
      (await cookies()).set("Token", response.data.token);
    }

    // return data;
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const GetCurrentUser = async () => {
  const Token = (await cookies())?.get("Token")?.value;

  let decodedToken = null;

  if (Token) {
    decodedToken = await jwtDecode(Token);
    console.log(decodedToken);
    return {
      email: decodedToken.email,
    };
  }

  return decodedToken;
};
