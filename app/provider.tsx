import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect } from "react";

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { user } = useUser();

  const createNewUser = async () => {
    const result = await axios.post("/api/user", {});
    console.log(result.data);
  };

  useEffect(() => {
    if (user) {
      createNewUser();
    }
  }, [user]);

  return <div>{children}</div>;
};

export default Provider;
