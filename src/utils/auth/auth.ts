import instance from "@/config/axios.config";


export const checkAuth = async (): Promise<LoginData | null> => {
  try {
    const res = await instance.get("/auth");
    return res.data as LoginData;
  } catch (err) {
    return null;
  }
};
