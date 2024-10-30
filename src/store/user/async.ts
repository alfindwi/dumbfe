import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../libs/api";
import { IUser } from "../../types/user";
import Cookies from "js-cookie";

export const updateUserAsync = createAsyncThunk<
  { user: IUser },
  { data: Partial<IUser> & { image?: File } },
  { rejectValue: string }
>("user/updateUser", async ({ data }, thunkAPI) => {
  try {
    const token = Cookies.get("token");

    if (!token) {
      return thunkAPI.rejectWithValue("Token not found");
    }

    const formData = new FormData();
    formData.append("name", data.name || "");
    formData.append("phone", data.phone || "");
    formData.append("gender", data.gender || "");
    formData.append("address", data.address || "");
    if (data.image) {
      formData.append("image", data.image);
    }

    const res = await api.put(`/user`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

   const updateUser = res.data.user

    Cookies.set("user", JSON.stringify(updateUser), { expires: 7 });

    return updateUser
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Something went wrong";
    return thunkAPI.rejectWithValue(errorMessage);
  }
});